import { InvalidDate } from '@/common/domain/date/InvalidDate';
import type { ISODate } from '@/common/domain/date/ISODate';

export type Formatter = (day: string, month: string, year: string) => string;

export const DD_MM_YYYY_FORMATTER: Formatter = (day: string, month: string, year: string) => `${day}/${month}/${year}`;
export const MM_DD_YYYY_FORMATTER: Formatter = (day: string, month: string, year: string) => `${month}/${day}/${year}`;

export class LocalDate {
  private constructor(private isoDate: ISODate) {
    InvalidDate.assertValidity(isoDate);
  }

  static of(isoDate: ISODate): LocalDate {
    return new LocalDate(isoDate);
  }

  toHuman(formatter = DD_MM_YYYY_FORMATTER) {
    const [, year, month, day] = this.isoDate.match(/^(\d{4})-(\d{2})-(\d{2})$/)!;
    return formatter(day, month, year);
  }

  toISODate() {
    return this.isoDate;
  }
}
