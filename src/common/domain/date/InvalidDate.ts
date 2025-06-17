import type { ISODate } from '@/common/domain/date/ISODate';
import { ReadyProjectTsError } from '@/common/domain/ReadyProjectTsError';

const isBadFormat = (pattern: ISODate): boolean => !pattern.match(/^\d{4}-\d{2}-\d{2}$/);

export class InvalidDate extends ReadyProjectTsError {
  constructor() {
    super('The date is invalid');
  }
  static assertValidity(pattern: ISODate): void {
    if (isBadFormat(pattern) || isNaN(Date.parse(pattern))) {
      throw new InvalidDate();
    }
  }
}
