import Joi from 'joi';

const accountSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string()
    .pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{7,20}$/)
    .required()
    .messages({
      'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 7-20 characters long.',
    }),
  firstName: Joi.string().min(1).max(30).required(),
  lastName: Joi.string().min(1).max(30).required(),
});

export default { account: accountSchema };
