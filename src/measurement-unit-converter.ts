export enum LengthUnit {
    KILOMETER = 'kilometer',
    METER = 'meter',
    CENTIMETER = 'centimeter',
    MILLIMETER = 'millimeter',
    MICROMETER = 'micrometer',
    NANOMETER = 'nanometer',
    MILE = 'mile',
    YARD = 'yard',
    FEET = 'feet',
    INCH = 'inch',
    NAUTICAL_MILE = 'nautical_mile',
};

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

export enum VolumeUnit {
    CUBIC_METER = 'cubic_meter',
    LITER = 'liter',
    GALLON = 'gallon',
    PINT = 'pint',
    CUBIC_CENTIMETER = 'cubic_centimeter',
    CUBIC_FEET = 'cubic_feet',
    CUBIC_INCH = 'cubic_inch',
};

const lengthConversionRates = {
    [LengthUnit.KILOMETER]: 1000,
    [LengthUnit.METER]: 1,
    [LengthUnit.CENTIMETER]: 0.01,
    [LengthUnit.MILLIMETER]: 0.001,
    [LengthUnit.MICROMETER]: 0.000001,
    [LengthUnit.NANOMETER]: 0.000000001,
    [LengthUnit.MILE]: 1609.34,
    [LengthUnit.YARD]: 0.9144,
    [LengthUnit.FEET]: 0.3048,
    [LengthUnit.INCH]: 0.0254,
    [LengthUnit.NAUTICAL_MILE]: 1852,
};

const weightConversionRates = {
    [WeightUnit.TONNE]: 1000,
    [WeightUnit.KILOGRAM]: 1,
    [WeightUnit.GRAM]: 0.001,
    [WeightUnit.MILLIGRAM]: 0.000001,
    [WeightUnit.MICROGRAM]: 0.000000001,
    [WeightUnit.LONG_TON]: 1016.0469088,
    [WeightUnit.SHORT_TON]: 907.18474,
    [WeightUnit.STONE]: 6.35029,
    [WeightUnit.POUND]: 0.453592,
    [WeightUnit.OUNCE]: 0.0283495,
};

const volumeConversionRates = {
    [VolumeUnit.CUBIC_METER]: 1000,
    [VolumeUnit.LITER]: 1,
    [VolumeUnit.GALLON]: 3.78541,
    [VolumeUnit.PINT]: 0.473176,
    [VolumeUnit.CUBIC_CENTIMETER]: 0.001,
    [VolumeUnit.CUBIC_FEET]: 28.3168,
    [VolumeUnit.CUBIC_INCH]: 0.0163871,
};

type Unit = LengthUnit | WeightUnit | VolumeUnit;

export function convertUnits(value: number, fromUnit: Unit, toUnit: Unit): number {
    if (!isUnitValid(fromUnit) || !isUnitValid(toUnit)) {
        throw new Error('Invalid unit');
    }

    if (isLengthUnit(fromUnit) && isLengthUnit(toUnit)) {
        const conversionRate = lengthConversionRates[fromUnit] / lengthConversionRates[toUnit];
        return value * conversionRate;
    }

    if (isWeightUnit(fromUnit) && isWeightUnit(toUnit)) {
        const conversionRate = weightConversionRates[fromUnit] / weightConversionRates[toUnit];
        return value * conversionRate;
    }

    if (isVolumeUnit(fromUnit) && isVolumeUnit(toUnit)) {
        const conversionRate = volumeConversionRates[fromUnit] / volumeConversionRates[toUnit];
        return value * conversionRate;
    }

    throw new Error('Cannot convert between different units');
}

function isUnitValid(unit: Unit): boolean {
    return isLengthUnit(unit) || isWeightUnit(unit) || isVolumeUnit(unit);
}

function isLengthUnit(unit: Unit): unit is LengthUnit {
    return Object.values(LengthUnit).includes(unit as LengthUnit);
};

function isWeightUnit(unit: Unit): unit is WeightUnit {
    return Object.values(WeightUnit).includes(unit as WeightUnit);
};

function isVolumeUnit(unit: Unit): unit is VolumeUnit {
    return Object.values(VolumeUnit).includes(unit as VolumeUnit);
};