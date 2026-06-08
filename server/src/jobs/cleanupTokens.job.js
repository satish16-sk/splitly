import RefreshToken from "../models/RefreshToken.js";

export const runCleanupTokensJob = async () => {
  console.log("Running expired token cleanup job...");
  try {
    const result = await RefreshToken.deleteMany({
      $or: [{ expiresAt: { $lt: new Date() } }, 
        { isRevoked: true }
    ]
    });
    console.log(`Pruned ${result.deleteCount} expired/revoked refresh tokens.`);
  } catch (error) {
    console.log("Token pruning error:", error.messaage);
  }
};
