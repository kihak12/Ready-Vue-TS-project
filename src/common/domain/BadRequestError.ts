import { ReadyProjectTsError } from '@/common/domain/ReadyProjectTsError';

export class BadRequestError extends ReadyProjectTsError {
  constructor(
    message: string,
    public errors?: string[]
  ) {
    super(message);
  }
}
