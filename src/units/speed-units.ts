import { Decimal } from 'decimal.js';

export enum SpeedUnit {
    CENTIMETER_PER_HOUR = 'centimeter_per_hour',
    CENTIMETER_PER_MINUTE = 'centimeter_per_minute',
    CENTIMETER_PER_SECOND = 'centimeter_per_second',
    EARTHS_VELOCITY = 'earths_velocity',
    FOOT_PER_HOUR = 'foot_per_hour',
    FOOT_PER_MINUTE = 'foot_per_minute',
    FOOT_PER_SECOND = 'foot_per_second',
    KILOMETER_PER_HOUR = 'kilometer_per_hour',
    KILOMETER_PER_MINUTE = 'kilometer_per_minute',
    KILOMETER_PER_SECOND = 'kilometer_per_second',
    KNOT = 'knot',
    MACH = 'mach',
    METER_PER_HOUR = 'meter_per_hour',
    METER_PER_MINUTE = 'meter_per_minute',
    METER_PER_SECOND = 'meter_per_second',
    MILE_PER_HOUR = 'mile_per_hour',
    MILE_PER_MINUTE = 'mile_per_minute',
    MILE_PER_SECOND = 'mile_per_second',
    MILLIMETER_PER_HOUR = 'millimeter_per_hour',
    MILLIMETER_PER_MINUTE = 'millimeter_per_minute',
    MILLIMETER_PER_SECOND = 'millimeter_per_second',
    NAUTICAL_MILE_PER_DAY = 'nautical_mile_per_day',
    NAUTICAL_MILE_PER_HOUR = 'nautical_mile_per_hour',
    YARD_PER_HOUR = 'yard_per_hour',
    YARD_PER_MINUTE = 'yard_per_minute',
    YARD_PER_SECOND = 'yard_per_second',
};

export const speedConversionRates: Record<SpeedUnit, Decimal> = {
    [SpeedUnit.CENTIMETER_PER_HOUR]: new Decimal(1E-05), // 1 Centimeter per Hour is equal to 1E-05 Kilometers per Hour
    [SpeedUnit.CENTIMETER_PER_MINUTE]: new Decimal(0.0006), // 1 Centimeter per Minute is equal to 0.0006 Kilometers per Hour
    [SpeedUnit.CENTIMETER_PER_SECOND]: new Decimal(0.036), // 1 Centimeter per Second is equal to 0.036 Kilometers per Hour
    [SpeedUnit.EARTHS_VELOCITY]: new Decimal(0.000120947421468167), // 1 Earth's Velocity is equal to 0.000120947421468167 Kilometers per Hour
    [SpeedUnit.FOOT_PER_HOUR]: new Decimal(0.000304800000001219), // 1 Foot per Hour is equal to 0.000304800000001219 Kilometers per Hour
    [SpeedUnit.FOOT_PER_MINUTE]: new Decimal(0.0182880000000732), // 1 Foot per Minute is equal to 0.0182880000000732 Kilometers per Hour
    [SpeedUnit.FOOT_PER_SECOND]: new Decimal(1).div(1.09728000000439), // 1 Foot per Second is equal to 1.09728000000439 Kilometers per Hour
    [SpeedUnit.KILOMETER_PER_HOUR]: new Decimal(1),
    [SpeedUnit.KILOMETER_PER_MINUTE]: new Decimal(60), // 1 Kilometer per Minute is equal to 60 Kilometers per Hour
    [SpeedUnit.KILOMETER_PER_SECOND]: new Decimal(3600), // 1 Kilometer per Second is equal to 3600 Kilometers per Hour
    [SpeedUnit.KNOT]: new Decimal(1.852), // 1 Knot is equivalent to 1.852 Kilometers per Hour
    [SpeedUnit.MACH]: new Decimal(1225.044), // 1 Mach is equivalent to 1225.044 Kilometers per Hour
    [SpeedUnit.METER_PER_HOUR]: new Decimal(0.001), // 1 Meter per Hour is equivalent to 0.001 Kilometers per Hour
    [SpeedUnit.METER_PER_MINUTE]: new Decimal(0.06), // 1 Meter per Minute is equivalent to 0.06 Kilometers per Hour
    [SpeedUnit.METER_PER_SECOND]: new Decimal(3.6), // 1 Meter per Second is equivalent to 3.6 Kilometers per Hour
    [SpeedUnit.MILE_PER_HOUR]: new Decimal(1.609344), // 1 Mile per Hour is equivalent to 1.6093 Kilometers per Hour
    [SpeedUnit.MILE_PER_MINUTE]: new Decimal(96.56064), // 1 Mile per Minute is equivalent to 96.56064 Kilometers per Hour
    [SpeedUnit.MILE_PER_SECOND]: new Decimal(5793.6384), // 1 Mile per Second is equivalent to 5793.6384 Kilometers per Hour
    [SpeedUnit.MILLIMETER_PER_HOUR]: new Decimal(1E-06), // 1 Millimeter per Hour is equivalent to 1E-06 Kilometers per Hour
    [SpeedUnit.MILLIMETER_PER_MINUTE]: new Decimal(6E-05), // 1 Millimeter per Minute is equivalent to 6E-05 Kilometers per Hour
    [SpeedUnit.MILLIMETER_PER_SECOND]: new Decimal(0.0036), // 1 Millimeter per Second is equivalent to 0.0036 Kilometers per Hour
    [SpeedUnit.NAUTICAL_MILE_PER_DAY]: new Decimal(0.0771666666666667), // 1 Nautical Mile per Day is equivalent to 0.0771666666666667 Kilometers per Hour
    [SpeedUnit.NAUTICAL_MILE_PER_HOUR]: new Decimal(1.852), // 1 Nautical Mile per Hour is equivalent to 1.852 Kilometers per Hour
    [SpeedUnit.YARD_PER_HOUR]: new Decimal(0.000914399999998083), // 1 Yard per Hour is equivalent to 0.000914399999998083 Kilometers per Hour
    [SpeedUnit.YARD_PER_MINUTE]: new Decimal(0.054863999999885), // 1 Yard per Minute is equivalent to 0.054863999999885 Kilometers per Hour
    [SpeedUnit.YARD_PER_SECOND]: new Decimal(3.2918399999931), // 1 Yard per Second is equivalent to 3.2918399999931 Kilometers per Hour
};