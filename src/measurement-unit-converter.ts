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

export enum AreaUnit {
    SQUARE_KILOMETER = 'square_kilometer',
    HECTARE = 'hectare',
    SQUARE_METER = 'square_meter',
    SQUARE_CENTIMETER = 'square_centimeter',
    SQUARE_MILLIMETER = 'square_millimeter',
    SQUARE_MILE = 'square_mile',
    ACRE = 'acre',
    SQUARE_YARD = 'square_yard',
    SQUARE_FOOT = 'square_foot',
    SQUARE_INCH = 'square_inch',
};

export enum SpeedUnit {
    KILOMETER_PER_HOUR = 'kilometer_per_hour',
    METER_PER_SECOND = 'meter_per_second',
    MILE_PER_HOUR = 'mile_per_hour',
    KNOT = 'knot',
    FOOT_PER_SECOND = 'foot_per_second',
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

const areaConversionRates = {
    [AreaUnit.SQUARE_KILOMETER]: 1000000, // 1 Square Kilometer is equivalent to 1000000 Square Meters
    [AreaUnit.HECTARE]: 10000, // 1 Hectare is equivalent to 10000 Square Meters
    [AreaUnit.SQUARE_METER]: 1,
    [AreaUnit.SQUARE_CENTIMETER]: 0.0001, // 1 Square Centimeter is equivalent to 0.0001 Square Meters
    [AreaUnit.SQUARE_MILLIMETER]: 0.000001, // 1 Square Millimeter is equivalent to 1E-6 Square Meters
    [AreaUnit.SQUARE_MILE]: 2589988.110336, // 1 Square Mile is equivalent to 2589988.1103 Square Meters
    [AreaUnit.ACRE]: 4046.85611888692, // 1 Acre is equivalent to 4046.8561 Square Meters
    [AreaUnit.SQUARE_YARD]: 0.836127359996498, // 1 Square Yard is equivalent to 0.8361 Square Meters
    [AreaUnit.SQUARE_FOOT]: 0.0929030400007433, // 1 Square Foot is equivalent to 0.0929 Square Meters
    [AreaUnit.SQUARE_INCH]: 0.000645160000005161, // 1 Square Inch is equivalent to 0.0006 Square Meters
};

const speedConversionRates = {
    [SpeedUnit.KILOMETER_PER_HOUR]: 1,
    [SpeedUnit.METER_PER_SECOND]: 3.6, // 1 Meter per Second is equivalent to 3.6 Kilometers per Hour
    [SpeedUnit.MILE_PER_HOUR]: 1.609344, // 1 Mile per Hour is equivalent to 1.6093 Kilometers per Hour
    [SpeedUnit.KNOT]: 1.852, // 1 Nautical Mile Per Hour is equivalent to 1.852 Kilometers per Hour
    [SpeedUnit.FOOT_PER_SECOND]: 1.09728000000439, // 1 foot per second is equal to 1.09728000000439 kilometers per hour
};

type Unit = LengthUnit | WeightUnit | VolumeUnit | AreaUnit | SpeedUnit;

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

    if (isAreaUnit(fromUnit) && isAreaUnit(toUnit)) {
        const conversionRate = areaConversionRates[fromUnit] / areaConversionRates[toUnit];
        return value * conversionRate;
    }

    if (isSpeedUnit(fromUnit) && isSpeedUnit(toUnit)) {
        const conversionRate = speedConversionRates[fromUnit] / speedConversionRates[toUnit];
        return value * conversionRate;
    }

    throw new Error('Cannot convert between different units');
}

function isUnitValid(unit: Unit): boolean {
    return isLengthUnit(unit) || isWeightUnit(unit) || isVolumeUnit(unit) || isAreaUnit(unit) || isSpeedUnit(unit);
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

function isAreaUnit(unit: Unit): unit is AreaUnit {
    return Object.values(AreaUnit).includes(unit as AreaUnit);
};

function isSpeedUnit(unit: Unit): unit is SpeedUnit {
    return Object.values(SpeedUnit).includes(unit as SpeedUnit);
};