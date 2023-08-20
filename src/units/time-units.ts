import { Decimal } from 'decimal.js';

export enum TimeUnit {
    CENTURY = 'century',
    DAY = 'day',
    DECADE = 'decade',
    FEMTOSECOND = 'femtosecond',
    FORTNIGHT = 'fortnight',
    HOUR = 'hour',
    MICROSECOND = 'microsecond',
    MILLENNIUM = 'millennium',
    MILLISECOND = 'millisecond',
    MINUTE = 'minute',
    MONTH = 'month',
    MONTH_SYNODIC = 'month_synodic',
    NANOSECOND = 'nanosecond',
    PICOSECOND = 'picosecond',
    SECOND = 'second',
    SHAKE = 'shake',
    WEEK = 'week',
    YEAR = 'year',
    YEAR_GREGORIAN = 'year_gregorian',
    YEAR_JULIAN = 'year_julian',
    YEAR_LEAP = 'year_leap',
    YEAR_TROPICAL = 'year_tropical',
};

export const timeConversionRates: Record<TimeUnit, Decimal> = {
    [TimeUnit.CENTURY]: new Decimal(3154000000), // 1 Century is equivalent to 3154000000 Seconds
    [TimeUnit.DAY]: new Decimal(86400), // 1 Day is equivalent to 86400 Seconds
    [TimeUnit.DECADE]: new Decimal(315569520), // 1 Decade is equivalent to 315569520 Seconds
    [TimeUnit.FEMTOSECOND]: new Decimal(1e-15), // 1 Femtosecond is equivalent to 1e-15 Seconds
    [TimeUnit.FORTNIGHT]: new Decimal(1209600), // 1 Fortnight is equivalent to 1209600 Seconds
    [TimeUnit.HOUR]: new Decimal(3600), // 1 Hour is equivalent to 3600 Seconds
    [TimeUnit.MICROSECOND]: new Decimal(1e-6), // 1 Microsecond is equivalent to 1e-6 Seconds
    [TimeUnit.MILLENNIUM]: new Decimal(31536000000), // 1 Millennium is equivalent to 31536000000 Seconds
    [TimeUnit.MILLISECOND]: new Decimal(0.001), // 1 Millisecond is equivalent to 0.001 Seconds
    [TimeUnit.MINUTE]: new Decimal(60), // 1 Minute is equivalent to 60 Seconds
    [TimeUnit.MONTH]: new Decimal(2628000), // 1 Month is equivalent to 2628000 Seconds
    [TimeUnit.MONTH_SYNODIC]: new Decimal(2551443.84), // 1 Month Synodic is equivalent to 2551443.84 Seconds
    [TimeUnit.NANOSECOND]: new Decimal(1e-9), // 1 Nanosecond is equivalent to 1e-9 Seconds
    [TimeUnit.PICOSECOND]: new Decimal(1e-12), // 1 Picosecond is equivalent to 1e-12 Seconds
    [TimeUnit.SECOND]: new Decimal(1),
    [TimeUnit.SHAKE]: new Decimal(1e-8), // 1 Shake is equivalent to 1e-8 Seconds
    [TimeUnit.WEEK]: new Decimal(604800), // 1 Week is equivalent to 604800 Seconds
    [TimeUnit.YEAR]: new Decimal(31536000), // 1 Year is equivalent to 31536000 Seconds
    [TimeUnit.YEAR_GREGORIAN]: new Decimal(31556952), // 1 Year Gregorian is equivalent to 31556952 Seconds
    [TimeUnit.YEAR_JULIAN]: new Decimal(31557600), // 1 Year Julian is equivalent to 31557600 Seconds
    [TimeUnit.YEAR_LEAP]: new Decimal(31622400), // 1 Year Leap is equivalent to 31622400 Seconds
    [TimeUnit.YEAR_TROPICAL]: new Decimal(31556930), // 1 Year Tropical is equivalent to 31556930 Seconds
};