import { ReadyProjectTsError } from '@/common/domain/ReadyProjectTsError';

export class NotFound extends ReadyProjectTsError {
  constructor(message: string) {
    super(message);
  }
}
