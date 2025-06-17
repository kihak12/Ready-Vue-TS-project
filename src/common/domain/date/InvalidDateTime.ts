import type { ISODateTime } from '@/common/domain/date/ISODateTime';
import { ReadyProjectTsError } from '@/common/domain/ReadyProjectTsError';

export class InvalidDateTime extends ReadyProjectTsError {
  constructor() {
    super('The date time is invalid');
  }

  static assertValidity(pattern: ISODateTime) {
    if (isNaN(Date.parse(pattern))) {
      throw new InvalidDateTime();
    }
  }
}
