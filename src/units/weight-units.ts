import { Decimal } from 'decimal.js';

export enum WeightUnit {
    CARAT = 'carat',
    DECAGRAM = 'decagram',
    EARTH_MASS = 'earth_mass',
    FEMTOGRAM = 'femtogram',
    GRAIN = 'grain',
    GRAM = 'gram',
    HECTOGRAM = 'hectogram',
    HUNDREDWEIGHT_UK = 'hundredweight_uk',
    HUNDREDWEIGHT_US = 'hundredweight_us',
    KILOGRAM = 'kilogram',
    KILOTON = 'kiloton',
    LONG_TON = 'long_ton',
    MEGATONNE = 'megatonne',
    MICROGRAM = 'microgram',
    MILLIGRAM = 'milligram',
    NANOGRAM = 'nanogram',
    OUNCE = 'ounce',
    PICOGRAM = 'picogram',
    POUND = 'pound',
    SHORT_TON = 'short_ton',
    SLUG = 'slug',
    SOLAR_MASS = 'solar_mass',
    STONE_UK = 'stone_uk',
    STONE_US = 'stone_us',
    TONNE = 'tonne',
};

export const weightConversionRates: Record<WeightUnit, Decimal> = {
    [WeightUnit.CARAT]: new Decimal(0.0002), // 1 Carat is equivalent to 0.0002 Kilograms
    [WeightUnit.DECAGRAM]: new Decimal(0.01), // 1 Decagram is equivalent to 0.01 Kilograms
    [WeightUnit.EARTH_MASS]: new Decimal(5.976E+24), // 1 Earth Mass is equivalent to 5.976E+24 Kilograms
    [WeightUnit.FEMTOGRAM]: new Decimal(1E-18), // 1 Femtogram is equivalent to 1E-18 Kilograms 
    [WeightUnit.GRAIN]: new Decimal(6.47989099997541E-5), // 1 Grain is equivalent to 6,47989099997541E-5 Kilograms
    [WeightUnit.GRAM]: new Decimal(1).div(1000), // 1 Gram is equivalent to 0.001 Kilograms
    [WeightUnit.HECTOGRAM]: new Decimal(0.1), // 1 Hectogram is equivalent to 0.1 Kilograms
    [WeightUnit.HUNDREDWEIGHT_UK]: new Decimal(50.8023453166888), // 1 Hundredweight UK is equivalent to 50.8023453166888 Kilograms
    [WeightUnit.HUNDREDWEIGHT_US]: new Decimal(45.3592370380378), // 1 Hundredweight US is equivalent to 45.3592370380378 Kilograms
    [WeightUnit.KILOGRAM]: new Decimal(1),
    [WeightUnit.KILOTON]: new Decimal(1000000), // 1 Kiloton is equivalent to 1000000 Kilograms
    [WeightUnit.LONG_TON]: new Decimal(1016.0469088), // 1 Long Ton is equivalent to 1016.0469088 Kilograms
    [WeightUnit.MEGATONNE]: new Decimal(1000000000), // 1 Megatonne is equivalent to 1000000000 Kilograms
    [WeightUnit.MICROGRAM]: new Decimal(1).div(1000000000), // 1 Microgram is equivalent to 0.00000000 Kilograms
    [WeightUnit.MILLIGRAM]: new Decimal(1).div(1000000), // 1 Milligram is equivalent to 0.000001 Kilograms
    [WeightUnit.NANOGRAM]: new Decimal(1E-12), // 1 Nanogram is equivalent to 1E-12 Kilograms
    [WeightUnit.OUNCE]: new Decimal(0.0283495231246628), // 1 Ounce is equivalent to 0.0283495231246628 Kilograms
    [WeightUnit.PICOGRAM]: new Decimal(1E-15), // 1 Picogram is equivalent to 1E-15 Kilograms
    [WeightUnit.POUND]: new Decimal(0.453592370010035), // 1 Pound is equivalent to 0.453592370010035 Kilograms
    [WeightUnit.SHORT_TON]: new Decimal(907.184748990598), // 1 Short Ton is equivalent to 907.184748990598 Kilograms
    [WeightUnit.SLUG]: new Decimal(14.5939029280038), // 1 Slug is equivalent to 14.5939029280038 Kilograms
    [WeightUnit.SOLAR_MASS]: new Decimal(1.988E+30), // 1 Solar Mass is equivalent to 1.988E+30 Kilograms
    [WeightUnit.STONE_UK]: new Decimal(6.35029318071658), // 1 Stone UK is equivalent to 6.35029318071658 Kilograms
    [WeightUnit.STONE_US]: new Decimal(1), // 1 Stone US is equivalent to  Kilograms
    [WeightUnit.TONNE]: new Decimal(1000), // 1 Tonne is equivalent to 1000 Kilograms
};