import { Numeral } from '@/common/domain/Numeral';

export interface NumeralProjection {
  value: number;
  text: string;
  shortText: string;
}

export const toNumeralProjection = (numeral: Numeral, numberOfDecimal?: number): NumeralProjection => ({
  value: numeral.get(),
  text: numeral.toHuman(numberOfDecimal),
  shortText: numeral.toShortHuman(),
});

export const toOptionalNumeralProjection = (numeral?: Numeral): NumeralProjection | undefined =>
  numeral ? toNumeralProjection(numeral) : undefined;

export const zeroNumeralProjection = (): NumeralProjection => ({
  value: 0,
  text: '0',
  shortText: '0',
});
