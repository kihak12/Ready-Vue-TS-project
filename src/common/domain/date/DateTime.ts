import { InvalidDateTime } from '@/common/domain/date/InvalidDateTime';
import type { ISODateTime } from '@/common/domain/date/ISODateTime';
import { getLocalFromIso2 } from '@/i18n';

const DAY_IN_MILLISECONDS = 86400000;

const toTwoCharacters = (num: number): string => num.toString().padStart(2, '0');

export class DateTime {
  private date: Date;

  private constructor(private isoDateTime: ISODateTime) {
    InvalidDateTime.assertValidity(isoDateTime);
    this.date = new Date(isoDateTime);
  }

  static of(isoDateTime: ISODateTime): DateTime {
    return new DateTime(isoDateTime);
  }

  toHumanDate() {
    const day = toTwoCharacters(this.date.getDate());
    const month = toTwoCharacters(this.date.getMonth() + 1);
    const year = this.date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  toHuman() {
    const hours = toTwoCharacters(this.date.getHours());
    const minutes = toTwoCharacters(this.date.getMinutes());
    const seconds = toTwoCharacters(this.date.getSeconds());
    return `${this.toHumanDate()} ${hours}:${minutes}:${seconds}`;
  }

  toLongHuman(locale: string) {
    return Intl.DateTimeFormat(getLocalFromIso2(locale), {
      dateStyle: 'long',
      timeStyle: 'medium',
    }).format(this.date);
  }

  getDate(): Date {
    return this.date;
  }

  toIso(): ISODateTime {
    return this.date.toISOString();
  }

  toIsoDate(): ISODateTime {
    const day = toTwoCharacters(this.date.getDate());
    const month = toTwoCharacters(this.date.getMonth() + 1);
    const year = this.date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  addDays(days: number): DateTime {
    const newDate = new Date(this.date.getTime());
    newDate.setDate(newDate.getDate() + days);
    return DateTime.of(newDate.toISOString());
  }

  subtractDays(days: number): DateTime {
    const millisecondsToSubtract = days * DAY_IN_MILLISECONDS;
    const newDate = new Date(this.date.getTime() - millisecondsToSubtract);
    this.isoDateTime = newDate.toISOString();
    this.date = newDate;
    return this;
  }

  isGreaterThan(dateTimeToCompare: DateTime): boolean {
    return this.date.getTime() > dateTimeToCompare.date.getTime();
  }
}

export const toOptionalDateTime = (isoDateTime: ISODateTime | undefined): DateTime | undefined =>
  isoDateTime ? DateTime.of(isoDateTime) : undefined;
