import { InvalidTime } from '@/common/domain/date/InvalidTime';
import { InvalidFormat } from '@/common/domain/InvalidFormat';

const TIME_FORMAT = /^\d{2}:\d{2}(:\d{2})?$/;
const MAX_HOURS = 23;
const MAX_MINUTES = 59;
const MAX_SECONDS = 59;

const assertFormat = (pattern: string): void => {
  if (!TIME_FORMAT.test(pattern)) {
    throw new InvalidFormat('HH:mm or HH:mm:ss', pattern);
  }
};

const pad = (number: number): string => number.toString().padStart(2, '0');

export class Time {
  private readonly hours: number;
  private readonly minutes: number;
  private readonly seconds?: number;

  private constructor(pattern: string) {
    assertFormat(pattern);

    [this.hours, this.minutes, this.seconds] = pattern.split(':').map((number) => parseInt(number, 10));

    this.assertValidity();
  }

  static of(pattern: string): Time {
    return new Time(pattern);
  }

  private assertValidity() {
    if (this.hours > MAX_HOURS) {
      throw InvalidTime.forHours(this.hours);
    }
    if (this.minutes > MAX_MINUTES) {
      throw InvalidTime.forMinutes(this.minutes);
    }
    if (this.seconds !== undefined && this.seconds > MAX_SECONDS) {
      throw InvalidTime.forSeconds(this.seconds);
    }
  }

  getHours(): number {
    return this.hours;
  }

  getMinutes(): number {
    return this.minutes;
  }

  getSeconds(): number | undefined {
    return this.seconds;
  }

  toHuman() {
    return this.toHumanOrMachine();
  }

  toMachine() {
    return this.toHumanOrMachine();
  }

  toHumanHours() {
    return pad(this.hours);
  }

  toHumanMinutes() {
    return pad(this.minutes);
  }

  toHumanSeconds() {
    if (this.seconds === undefined) {
      return '';
    }
    return pad(this.seconds);
  }

  private toHumanOrMachine() {
    return [this.toHumanHours(), this.toHumanMinutes(), this.toHumanSeconds()].filter((timeUnit) => timeUnit !== '').join(':');
  }
}
