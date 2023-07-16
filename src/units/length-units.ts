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

export const lengthConversionRates: Record<LengthUnit, number> = {
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