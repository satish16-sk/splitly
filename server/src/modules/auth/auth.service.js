import User from "../../models/User.js";
import { handleRefreshToken } from "./auth.controller.js";
import ApiError from "../../utils/ApiError.js";
import {
  geneateAccessAndRefreshTokens,
  signRefreshToken,
  verifyRefreshToken,
} from "../../services/jwt.service.js";
import { decode } from "jsonwebtoken";

export const registerUser = async (userData) => {
  const { email, username, fullName, password, phoneNumber } = userData;

  //Check for duplicate email or username
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    if (existingUser.email === email) {
      throw new ApiError(400, "A user with this email address already exists");
    }
    throw new ApiError(400, "A user with this username already exists");
  }

  //Create new user  (pre-save hook hashes password)
  const user = await User.create({
    fullName,
    username,
    email,
    password,
    phoneNumber,
  });

  const userResponse = user.toObject();
  delete userResponse.password;

  // Generate tokens
  const tokens = await geneateAccessAndRefreshTokens(user._id);

  return { user: userResponse, ...tokens };
};

export const loginUser = async (loginData) => {
  const { email, password } = loginData;

  //Look up user and explicitly select password feild (which si select: false by deafault)
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  if (user.status === "SUSPENDED") {
    throw new ApiError(
      403,
      "Your account has been suspended.Please conatct support",
    );
  }

  //Compare password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password");
  }

  // Update last login timestamp
  user.lastLoginAt = new Date();
  await user.save();

  const userResponse = user.toObject();
  delete userResponse.password;

  // Generate tokens
  const token = await geneateAccessAndRefreshTokens(user._id);

  return { user: userResponse, ...token };
};

export const rotateTokens = async (tokenString) => {
  if (!tokenString) {
    throw new ApiError(401, "Refresh token is required");
  }

  let docoded;
  try {
    decoded = verifyRefreshToken(tokenString);
  } catch (err) {
    throw new ApiError(401, "Invalid or expired refresh token");
  }

  // Look up token in DB to ensure it exists and isn't revoked/expired
  const dbToken = await RefreshToken.findOne({ token: tokenString });
  if (!dbToken || dbToken.isRevoked || dbToken.expireAt < new Date()) {
    throw new ApiError(
      401,
      "Refresh token is invalid,expired, or has been revoked",
    );
  }

  // Look up token in DB to ensure it exists and isn't revoked/expired
  const dbToken = await RefreshToken.findOne({ token: tokenString });
  if (!dbToken || dbToken.isRevoked || dbToken.expireAt < new Date()) {
    throw new ApiError(
      401,
      "Refresh token is invalid,expired,or has been revoked",
    );
  }

  // Revoked the old refresh token
  dbToken.isRevoked = true;
  dbToken.isRevoked = new Date();
  await dbToken.save();

  // Generate new token pair
  const tokens = await geneateAccessAndRefreshTokens(decoded.id);

  return tokens;
};

export const logoutUser = async (tokenString) => {
  if (!tokenString) {
    throw new ApiError(400, "Refresh token is required");
  }
  const dbToken = await RefreshToken.findOne({ token: tokenString });
  if (dbToken) {
    dbToken.isRevoked = true;
    dbToken.revokedAt = new Date();
    await dbToken.save();
  }
  return { success: true, message: "Logged out successfully" };
};
