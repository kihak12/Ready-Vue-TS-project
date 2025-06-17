import { ReadyProjectTsError } from '@/common/domain/ReadyProjectTsError';

export class InvalidFormat extends ReadyProjectTsError {
  constructor(format: string, value: string) {
    super(`The format for '${value}' does not match with '${format}'`);
  }

  static for(format: string, value: string): InvalidFormat {
    return new InvalidFormat(format, value);
  }
}
