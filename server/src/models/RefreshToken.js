import mongoose, { trusted } from "mongoose";

/**
 * RefreshToken Schema definition
 */

const RefreshTokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User reference is required"],
      index: true,
    },
    token: {
      type: String,
      required: [true, "Token is required"],
      unique: true,
    },
    expiresAt: {
      type: Date,
      required: [true, "Expiration timeStamp is required"],
    },
    revokedAt: {
      type: Date,
      dafault: null,
    },
    isRevoked: {
      type: Boolean,
      deafult: false,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * MongoDB TTL Index to automatically delete expired tokens from the collection.
 * expireAfterSeconds: 0 instructs MongoDB to delete the document when the current time is past 'expiresAt'.
 */
refreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);
export default RefreshToken;
