import { ReadyProjectTsError } from '@/common/domain/ReadyProjectTsError';

export class InvalidTime extends ReadyProjectTsError {
  constructor(message: string) {
    super(`${message} are not valid for a time`);
  }

  static forHours(hours: number): InvalidTime {
    return new InvalidTime(`${hours} hour(s)`);
  }

  static forMinutes(minutes: number): InvalidTime {
    return new InvalidTime(`${minutes} minute(s)`);
  }

  static forSeconds(seconds: number): InvalidTime {
    return new InvalidTime(`${seconds} second(s)`);
  }
}
