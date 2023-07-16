export enum SpeedUnit {
    KILOMETER_PER_HOUR = 'kilometer_per_hour',
    METER_PER_SECOND = 'meter_per_second',
    MILE_PER_HOUR = 'mile_per_hour',
    KNOT = 'knot',
    FOOT_PER_SECOND = 'foot_per_second',
};

export const speedConversionRates: Record<SpeedUnit, number> = {
    [SpeedUnit.KILOMETER_PER_HOUR]: 1,
    [SpeedUnit.METER_PER_SECOND]: 3.6, // 1 Meter per Second is equivalent to 3.6 Kilometers per Hour
    [SpeedUnit.MILE_PER_HOUR]: 1.609344, // 1 Mile per Hour is equivalent to 1.6093 Kilometers per Hour
    [SpeedUnit.KNOT]: 1.852, // 1 Nautical Mile Per Hour is equivalent to 1.852 Kilometers per Hour
    [SpeedUnit.FOOT_PER_SECOND]: 1.09728000000439, // 1 foot per second is equal to 1.09728000000439 kilometers per hour
};