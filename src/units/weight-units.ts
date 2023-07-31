import { Decimal } from 'decimal.js';

export enum WeightUnit {
    TONNE = 'tonne',
    KILOGRAM = 'kilogram',
    GRAM = 'gram',
    MILLIGRAM = 'milligram',
    MICROGRAM = 'microgram',
    LONG_TON = 'long_ton',
    SHORT_TON = 'short_ton',
    STONE = 'stone',
    POUND = 'pound',
    OUNCE = 'ounce',
};

export const weightConversionRates: Record<WeightUnit, Decimal> = {
    [WeightUnit.TONNE]: new Decimal(1000), // 1 Tonne is equivalent to 1000 Kilograms
    [WeightUnit.KILOGRAM]: new Decimal(1),
    [WeightUnit.GRAM]: new Decimal(1).div(1000), // 1 Gram is equivalent to 0.001 Kilograms
    [WeightUnit.MILLIGRAM]: new Decimal(1).div(1000000), // 1 Milligram is equivalent to 0.000001 Kilograms
    [WeightUnit.MICROGRAM]: new Decimal(1).div(1000000000), // 1 Microgram is equivalent to 0.00000000 Kilograms
    [WeightUnit.LONG_TON]: new Decimal(1016.0469088), // 1 Long Ton is equivalent to 1016.0469088 Kilograms
    [WeightUnit.SHORT_TON]: new Decimal(907.184748990598), // 1 Short Ton is equivalent to 907.184748990598 Kilograms
    [WeightUnit.STONE]: new Decimal(6.35029318071658), // 1 Stone is equivalent to 6.35029318071658 Kilograms
    [WeightUnit.POUND]: new Decimal(0.453592370010035), // 1 Pound is equivalent to 0.453592370010035 Kilograms
    [WeightUnit.OUNCE]: new Decimal(0.0283495231246628), // 1 Ounce is equivalent to 0.0283495231246628 Kilograms
};