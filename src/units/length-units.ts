import { Decimal } from 'decimal.js';

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

export const lengthConversionRates: Record<LengthUnit, Decimal> = {
    [LengthUnit.KILOMETER]: new Decimal(1000), // 1 Kilometer is equivalent to 1000 Meters
    [LengthUnit.METER]: new Decimal(1),
    [LengthUnit.CENTIMETER]: new Decimal(1).div(100), // 1 Centimeter is equivalent to 0.01 Meters
    [LengthUnit.MILLIMETER]: new Decimal(1).div(1000), // 1 Millimeter is equivalent to 0.001 Meters
    [LengthUnit.MICROMETER]: new Decimal(1).div(1000000), // 1 Micrometer is equivalent to 0.000001 Meters
    [LengthUnit.NANOMETER]: new Decimal(1).div(1000000000), // 1 Nanometer is equivalent to 0.000000001 Meters
    [LengthUnit.MILE]: new Decimal(1609.344), // 1 Mile is equivalent to 1609.344 Meters
    [LengthUnit.YARD]: new Decimal(0.914399999998083), // 1 Yard is equivalent to 0.914399999998083 Meters
    [LengthUnit.FOOT]: new Decimal(0.304800000001219), // 1 Foot is equivalent to 0.304800000001219 Meters
    [LengthUnit.INCH]: new Decimal(0.0254000000001016), // 1 Inch is equivalent to 0.0254000000001016 Meters
    [LengthUnit.NAUTICAL_MILE]: new Decimal(1852), // 1 Nautical Mile is equivalent to 1852 Meters
};