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

export const areaConversionRates: Record<AreaUnit, number> = {
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