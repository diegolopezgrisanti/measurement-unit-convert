export enum LengthUnit {
    KILOMETER = 'kilometer',
    METER = 'meter',
    CENTIMETER = 'centimeter',
    MILLIMETER = 'millimeter',
    MICROMETER = 'micrometer',
    NANOMETER = 'nanometer',
    MILE = 'mile',
    YARD = 'yard',
    FOOT = 'foot',
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
    CUBIC_FOOT = 'cubic_foot',
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
    [LengthUnit.KILOMETER]: 1000, // 1 Kilometer is equivalent to 1000 Meters
    [LengthUnit.METER]: 1,
    [LengthUnit.CENTIMETER]: 0.01, // 1 Centimeter is equivalent to 0.01 Meters
    [LengthUnit.MILLIMETER]: 0.001, // 1 Millimeter is equivalent to 0.001 Meters
    [LengthUnit.MICROMETER]: 0.000001, // 1 Micrometer is equivalent to 0.000001 Meters
    [LengthUnit.NANOMETER]: 0.000000001, // 1 Nanometer is equivalent to 0.000000001 Meters
    [LengthUnit.MILE]: 1609.344, // 1 Mile is equivalent to 1609.344 Meters
    [LengthUnit.YARD]: 0.914399999998083, // 1 Yard is equivalent to 0.914399999998083 Meters
    [LengthUnit.FOOT]: 0.304800000001219, // 1 Foot is equivalent to 0.304800000001219 Meters
    [LengthUnit.INCH]: 0.0254000000001016, // 1 Inch is equivalent to 0.0254000000001016 Meters
    [LengthUnit.NAUTICAL_MILE]: 1852, // 1 Nautical Mile is equivalent to 1852 Meters
};

const weightConversionRates = {
    [WeightUnit.TONNE]: 1000, // 1 Tonne is equivalent to 1000 Kilograms
    [WeightUnit.KILOGRAM]: 1,
    [WeightUnit.GRAM]: 0.001, // 1 Gram is equivalent to 0.001 Kilograms
    [WeightUnit.MILLIGRAM]: 0.000001, // 1 Milligram is equivalent to 0.000001 Kilograms
    [WeightUnit.MICROGRAM]: 0.000000001, // 1 Microgram is equivalent to 0.00000000 Kilograms
    [WeightUnit.LONG_TON]: 1016.0469088, // 1 Long Ton is equivalent to 1016.0469088 Kilograms
    [WeightUnit.SHORT_TON]: 907.184748990598, // 1 Short Ton is equivalent to 907.184748990598 Kilograms
    [WeightUnit.STONE]: 6.35029318071658, // 1 Stone is equivalent to 6.35029318071658 Kilograms
    [WeightUnit.POUND]: 0.453592370010035, // 1 Pound is equivalent to 0.453592370010035 Kilograms
    [WeightUnit.OUNCE]: 0.0283495231246628, // 1 Ounce is equivalent to 0.0283495231246628 Kilograms
};

const volumeConversionRates = {
    [VolumeUnit.CUBIC_METER]: 1000, // 1 Cubic Meter is equivalent to 1000 Liters
    [VolumeUnit.LITER]: 1,
    [VolumeUnit.GALLON]: 3.78541178397347, // 1 Gallon is equivalent to 3.78541178397347 Liters
    [VolumeUnit.PINT]: 0.473176472992206, // 1 Pint is equivalent to 0.473176472992206 Liters
    [VolumeUnit.CUBIC_CENTIMETER]: 0.001, // 1 Cubic Centimeter is equivalent to 0.001 Liters
    [VolumeUnit.CUBIC_FOOT]: 28.3168465923398, // 1 Cubic Foot is equivalent to 28.3168465923398 Liters
    [VolumeUnit.CUBIC_INCH]: 0.0163870640001966, // 1 Cubic Inch is equivalent to 0.0163870640001966 Liters
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