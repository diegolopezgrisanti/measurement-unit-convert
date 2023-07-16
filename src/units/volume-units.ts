export enum VolumeUnit {
    CUBIC_METER = 'cubic_meter',
    LITER = 'liter',
    GALLON = 'gallon',
    PINT = 'pint',
    CUBIC_CENTIMETER = 'cubic_centimeter',
    CUBIC_FOOT = 'cubic_foot',
    CUBIC_INCH = 'cubic_inch',
};

export const volumeConversionRates: Record<VolumeUnit, number> = {
    [VolumeUnit.CUBIC_METER]: 1000, // 1 Cubic Meter is equivalent to 1000 Liters
    [VolumeUnit.LITER]: 1,
    [VolumeUnit.GALLON]: 3.78541178397347, // 1 Gallon is equivalent to 3.78541178397347 Liters
    [VolumeUnit.PINT]: 0.473176472992206, // 1 Pint is equivalent to 0.473176472992206 Liters
    [VolumeUnit.CUBIC_CENTIMETER]: 0.001, // 1 Cubic Centimeter is equivalent to 0.001 Liters
    [VolumeUnit.CUBIC_FOOT]: 28.3168465923398, // 1 Cubic Foot is equivalent to 28.3168465923398 Liters
    [VolumeUnit.CUBIC_INCH]: 0.0163870640001966, // 1 Cubic Inch is equivalent to 0.0163870640001966 Liters
};