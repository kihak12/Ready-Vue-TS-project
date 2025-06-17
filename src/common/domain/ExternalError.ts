import { ReadyProjectTsError } from '@/common/domain/ReadyProjectTsError';

export class ExternalError extends ReadyProjectTsError {
  constructor(message: string) {
    super(message);
  }
}
