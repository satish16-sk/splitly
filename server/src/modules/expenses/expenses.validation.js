import {
  createExpenseSchema,
  updateExpenseSchema,
} from "../../validators/expense.validator.js";

const validateSchema = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errorDetails = result.error.issues.map((err) => ({
      feild: err.path.join("."),
      message: err.message,
    }));
    return res.status(400).json({
      success: false,
      message: "validate failed",
      errors: errorDetails
    });
  }
  req.body = result.data;
  next();
};

export const validateExpenseCreate = validateSchema(createExpenseSchema);
export const validateExpenseUpdate = validateSchema(updateExpenseSchema);
