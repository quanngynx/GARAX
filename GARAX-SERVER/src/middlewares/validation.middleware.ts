import { PrototypesExpress } from '@/common/interfaces';
import { ObjectSchema, ValidationError } from 'joi';

interface ValidatorHandler extends PrototypesExpress {
  schema: ObjectSchema;
}

export const validatorHandler: ({ req, res, next, schema }: ValidatorHandler) => Promise<void> = async ({
  req,
  res,
  next,
  schema
}: ValidatorHandler) => {
  try {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(400).json({
        status: 'error',
        message: error.details.map((detail) => detail.message).join(', ')
      });
      return;
    }
    next();
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({
        status: 'error',
        message: error.message.split(', ')
      });
    } else {
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }
};
