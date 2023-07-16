export enum TimeUnit {
    NANOSECOND = 'nanosecond',
    MICROSECOND = 'microsecond',
    MILLISECOND = 'millisecond',
    SECOND = 'second',
    MINUTE = 'minute',
    HOUR = 'hour',
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month',
    YEAR = 'year',
    DECADE = 'decade',
    CENTURY = 'century',
};

export const timeConversionRates: Record<TimeUnit, number> = {
    [TimeUnit.NANOSECOND]: 1e-9, // 1 Nanosecond is equivalent to 1e-9 Seconds
    [TimeUnit.MICROSECOND]: 1e-6, // 1 Microsecond is equivalent to 1e-6 Seconds
    [TimeUnit.MILLISECOND]: 0.001, // 1 Millisecond is equivalent to 0.001 Seconds
    [TimeUnit.SECOND]: 1,
    [TimeUnit.MINUTE]: 60, // 1 Minute is equivalent to 60 Seconds
    [TimeUnit.HOUR]: 3600, // 1 Hour is equivalent to 3600 Seconds
    [TimeUnit.DAY]: 86400, // 1 Day is equivalent to 86400 Seconds
    [TimeUnit.WEEK]: 604800, // 1 Week is equivalent to 604800 Seconds
    [TimeUnit.MONTH]: 2629746, // 1 Month is equivalent to 2629746 Seconds
    [TimeUnit.YEAR]: 31556952, // 1 Year is equivalent to 31556952 Seconds
    [TimeUnit.DECADE]: 315569520, // 1 Decade is equivalent to 315569520 Seconds
    [TimeUnit.CENTURY]: 3154000000, // 1 Century is equivalent to 3154000000 Seconds
};