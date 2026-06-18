import {
  createGroup,
  getGroupByUser,
  getGroupById,
  updateGroup,
  addMember,
  removeMember,
  getGroupMembers
} from './groups.service.js'

import ApiResponse from "../../utils/ApiResponse.js";

export const handleCreateGroup = async (req, res, next) => {
  try {
    const result = await handleCreateGroup(req.body, req.user.id);
    res
      .status(201)
      .json(new ApiResponse(201, result, "Group created successfully"));
  } catch (error) {
    next(error);
  }
};

export const handleGetGroups = async (req, res, next) => {
  try {
    const result = await getGroupByUser(req.user.id);
    res
      .status(200)
      .json(new ApiResponse(200, result, "Group retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

export const handleGetGroupById = async (req, res, next) => {
  try {
    const result = await handleGetGroupById(req.params.groupId, req.user.id);
    res
      .status(200)
      .json(new ApiResponse(200, result, "Group retrival successfully"));
  } catch (error) {
    next(error);
  }
};

export const handleUpdateGroup = async (req, res, next) => {
  try {
    const result = await updateGroup(req.params.groupId, req.body, req.user.id);
    res
      .status(200)
      .json(new ApiResponse(200, result, "Group updated successfully"));
  } catch (error) {
    next(error);
  }
};

export const handleAddMember = async (req, res, next) => {
  try {
    const result = await addMember(req.params.groupId, req.body, req.user.id);
    res
      .status(201)
      .json(new ApiResponse(201, result, "Member added successfully"));
  } catch (error) {
    next(error);
  }
};

export const handleRemoverMember = async(req,res,next)=> {
  try {
    await handleRemoverMember(req,params.groundId, req,params.userId, req,user.id);
    res.status(200).json(new ApiResponse(200,null,'Member removed successfully'));
  } catch (error) {
    next(error);
  }
};

export const handleGetGroupMembers =async (req,res,next)=> {
  try {
    const result = await handleGetGroupMembers(req,params.groupId, req,user.id);
    res.status(200).json(new ApiResponse(200,result,'Group members retrived successfully'));
  } catch (error) {
    next(error);
  }
};
