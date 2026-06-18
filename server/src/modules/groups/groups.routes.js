import express from "express";
import {
  handleAddMember,
  handleCreateGroup,
  handleGetGroupById,
  handleGetGroupMembers,
  handleGetGroups,
  handleRemoverMember,
  handleUpdateGroup,
} from "./groups.controller.js";
import { protect } from "../../middleware/auth.middleware.js";
import {
  validateAddMember,
  validateGroupCreate,
  validateGroupUpdate,
} from "./groups.validation.js";

const router = express.Router();

router.post("/", protect, validateGroupCreate, handleCreateGroup);
router.get("/", protect, handleGetGroups);
router.get("/:groupId", protect, handleGetGroupById);
router.put("/:groupId", protect, validateGroupUpdate, handleUpdateGroup);

router.post("/:groupId/members", protect, validateAddMember, handleAddMember);
router.get("/:groupId/members", protect, handleGetGroupMembers);
router.delete("/:groupId/members/:userId", protect, handleRemoverMember);

export default router;
