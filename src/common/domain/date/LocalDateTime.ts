import { LocalDate } from '@/common/domain/date/LocalDate';
import { Time } from '@/common/domain/date/Time';

const isMidnight = (time: Time) => time.getHours() === 0 && time.getMinutes() === 0;
const removeZero = (toModify: string): string => (toModify.startsWith('0') ? toModify.slice(1) : toModify);

export class LocalDateTime {
  private readonly localeDate: LocalDate;
  private readonly time?: Time;

  private constructor(isoDate: string, time?: string) {
    this.localeDate = LocalDate.of(isoDate);
    this.time = time ? Time.of(time) : undefined;
  }

  static of(isoDate: string, time?: string): LocalDateTime {
    return new LocalDateTime(isoDate, time);
  }

  toHuman(): string {
    if (!this.time || isMidnight(this.time)) {
      return this.toHumanLocalDate();
    }
    return `${this.toHumanLocalDate()} ${this.time.toHuman()}`;
  }

  toHumanLocalDate(): string {
    return this.localeDate.toHuman();
  }

  toHumanTime(): string {
    return this.time ? this.time.toHuman() : '';
  }

  toHumanYear(): string {
    return this.localeDate.toISODate().split('-')[0];
  }

  toHumanMonth(): string {
    return removeZero(this.localeDate.toISODate().split('-')[1]);
  }

  toHumanDay(): string {
    return removeZero(this.localeDate.toISODate().split('-')[2]);
  }

  toHumanHours(): string {
    return this.time ? this.time.toHumanHours() : '';
  }

  toHumanMinutes(): string {
    return this.time ? this.time.toHumanMinutes() : '';
  }

  toHumanSeconds(): string {
    return this.time ? this.time.toHumanSeconds() : '';
  }

  toIsoLocalDate() {
    return this.localeDate.toISODate();
  }

  toMachineTime(): string | undefined {
    return this.time ? this.time.toMachine() : undefined;
  }
}
