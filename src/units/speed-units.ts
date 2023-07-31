import { Decimal } from 'decimal.js';

export enum SpeedUnit {
    KILOMETER_PER_HOUR = 'kilometer_per_hour',
    METER_PER_SECOND = 'meter_per_second',
    MILE_PER_HOUR = 'mile_per_hour',
    KNOT = 'knot',
    FOOT_PER_SECOND = 'foot_per_second',
};

export const speedConversionRates: Record<SpeedUnit, Decimal> = {
    [SpeedUnit.KILOMETER_PER_HOUR]: new Decimal(1),
    [SpeedUnit.METER_PER_SECOND]: new Decimal(3.6), // 1 Meter per Second is equivalent to 3.6 Kilometers per Hour
    [SpeedUnit.MILE_PER_HOUR]: new Decimal(1.609344), // 1 Mile per Hour is equivalent to 1.6093 Kilometers per Hour
    [SpeedUnit.KNOT]: new Decimal(1.852), // 1 Nautical Mile Per Hour is equivalent to 1.852 Kilometers per Hour
    [SpeedUnit.FOOT_PER_SECOND]: new Decimal(1).div(1.09728000000439), // 1 foot per second is equal to 1.09728000000439 kilometers per hour
};