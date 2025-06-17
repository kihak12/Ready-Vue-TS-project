import { ReadyProjectTsError } from '@/common/domain/ReadyProjectTsError';

export class Forbidden extends ReadyProjectTsError {
  constructor(message: string) {
    super(message);
  }
}
