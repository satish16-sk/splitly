import Group from "../../models/Group.js";
import GroupMember from "../../models/GroupMember.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const createGroup = async (groupData, creatorId) => {
  const group = await Group.create({ ...groupData, createdBy: creatorId });
  await GroupMember.create({
    group: group._id,
    user: creatorId,
    role: "OWNER",
    isActive: true,
  });
  return group;
};

export const getGroupsByUser = async (userId) => {
  const memberships = await GroupMember.find({
    user: userId,
    isActive: true,
  }).populate({
    path: "group",
    populate: {
      path: "createdBy",
      select: "name email avatar",
    },
  });
  return memberships.map((m) => m.group).filter(Boolean);
};

export const getGroupById = async (groupId, userId) => {
  const membership = await GroupMember.findOne({group:groupId,user:userId,isActive:true});
  if(!membership) {
    throw new ApiError(403,'You are not an active member of this group');
  }

  const group = await Group.findById(groupId).populate('createdBy','name email avatar');
  if(!group) {
    throw new ApiError(404,'Group not found');
  }
  return group;
};


export const updateGroup = async(groupId, groupData, userId) => {
  const membership = await GroupMember.findOne({group:groupId, user:userId, isActive:true });
  if(!membership || !['OWNER','ADMIN'].includes(membership.role)) {
    throw new ApiError(403,'Only group owners or administrators can update group details');
  }

  const group = await Group.findByIdAndUpdate(groupId, groupData,{new:true, runValidators:true});
  if(!group) {
    throw new ApiError(404,'Group not found');
  }

  return group;
};

export const addMember = async (groupId, {email, userId, role}, requestedId) => {
 const requesterMembership = await GroupMember.findOne({ group: groupId, user:requesterId, isACtive: true});
 if(!requesterMembership) {
  throw new ApiError(403,'You must be an active member of this group to add other members');
 }

 let userToAdd = null;
 if (userId) {
  userToAdd = await User.findById(userId);
  if(!userToAdd) {
    throw new ApiError (404,'User to add not found');
  }
 } else if (email) {
  userToAdd = await User.findOne({email:email.toLowerCase().trim()});
  if(!userToAdd) {
    throw new ApiError(404,`No user found with email address: ${email}`)
  }
 }

 if(!userToAdd) {
  throw new ApiError(400,'Either emial or userId must be provided');
 }

const existingMember = await GroupMember.findOne({ group: groupId, user:userToAdd._id });
if (existingMember) {
  if(existingMember.isActive) {
    throw new ApiError(400, 'User is already an active member of this group');
  } else {
    existingMember.isActive = true;
    if(role) {
      existingMember.role = role;
    }
    await existingMember.save();

    await Group.findByIdAndUpdate(groupId, {$inc: {memberCount:1}});
  }
}

const newMember = await GroupMember.create({
  group:groupId,
  user:userToAdd._id,
  role:role || 'MEMBER',
  isActive:true
});

await Group.findByIdAndUpdate(groupId,{$inc: {memberCount: 1 }});

return newMember;
};


export const removeMember = async (groupId, userIdRemove, requestedId) => {
  const targetMember = await GroupMemeber.findOne({ group: groupId, user:userIdToRemove,isActive:true});
  if(!targetMember) {
    throw new ApiError(404, 'Member to remove is an active member of this group');
  }

  if(targetMember.role==='OWNER') {
    throw new ApiError(400,'Group owner cannot be removed. Transfer ownership first.');
  }

  if (requestedId.toString() !== userIdRemove.toString()) {
    const requesterMember = await GroupMember.findOne({group: groupId, user: requestedId, isActive:true});
    if(!requesterMember) {
      throw new ApiError(403,'You are not member of this group');
    }

    if(requesterMember.role === 'MEMBER') {
      throw new ApiError(403,'Only group owners or administrators can remove members');
    }

    if(requesterMember.role === 'ADMIN' && targetMember.role==='ADMIN') {
      throw new ApiError(403,'Administrators cannot remove other administrators');
    }
  }

  const groupExpenses = await Expense.find({ group: groupId, isDeleted: { $ne: true} });
  const expenseIds = groupExpenses.map(e => e._id);
  const paidExpenseIds = groupExpenses.filter(e => e.paidBy.toString() === userIdToRemove.toString()).map(e._id);


  const oweSplit = await ExpenseSplit.findOne({
    expense: { $in:expenseIds },
    user: userIdToRemove,
    $expr: { $gt: ['$amountOwed', '$settledAmount'] }
  });


  const owedSplit = await ExpenseSplit.findOne({
    expense: { $in: paidExpenseIds },
    user: {$ne: userIdToRemove },
    $expr: { $gt: ['$amountOwed','$settledAmount']}
  });

  if(oweSplit || owedSplit) {
    throw new ApiError(400,'Member cannot be removed because they have unsettled balances in this group');
  }

  targetMember.isActive = false;
  await targetMember.save();

  await Group.findByIdAndUpdate(groupId,{ $inc: {memberCount: -1}});

  return targetMember;
};

export const getGroupMembers = async (groupId,userId) => {
  const requesterMembership = await GroupMember.findOne({ group: groupId, user:userId, isActive:true});
  if(!requesterMembership) {
    throw new ApiError(403, 'You must be an active member of this group to view its member');
  }

  const members= await GroupMember.find({ group:groupId, isActive: true})
  .populate('user','name email avatar');

  return members;
};
