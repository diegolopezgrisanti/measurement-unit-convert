import { Decimal } from 'decimal.js';

export enum AngleUnit {
    ARCMINUTE = 'arcminute',
    ARCSECOND = 'arcsecond',
    CIRCLE = 'circle',
    DEGREE = 'degree',
    GON = 'gon',
    GRADIAN = 'gradian',
    MILLIRADIAN = 'milliradian',
    MIL_NATO = 'mil_nato',
    MIL_USSR = 'mil_ussr',
    MIL_SWEDEN = 'mil_sweden',
    OCTANT = 'octant',
    QUADRANT = 'quadrant',
    RADIAN = 'radian',
    REVOLUTION = 'revolution',
    SEXTANT = 'sextant',
    SIGN = 'sign',
    TURN = 'turn',
};

export const angleConversionRates: Record<AngleUnit, Decimal> = {
    [AngleUnit.ARCMINUTE]: new Decimal(1).div(360).div(60), // 1 Arcminute is equivalent to 4.62962962986451E-05 Circle
    [AngleUnit.ARCSECOND]: new Decimal(1).div(360).div(3600), // 1 Arcminute is equivalent to 7.71604938310753E-07 Circle
    [AngleUnit.CIRCLE]: new Decimal(1),
    [AngleUnit.DEGREE]: new Decimal(1).div(360), // 1 Degreee is equivalent to 0.0027777778 Circle
    [AngleUnit.GON]: new Decimal(1).div(400), // 1 Gon is equivalent to 0.0025 Circle
    [AngleUnit.GRADIAN]: new Decimal(1).div(400), // 1 Gradian is equivalent to 0.0025 Circle
    [AngleUnit.MILLIRADIAN]: new Decimal(1).div(2).div(Math.PI).div(1000), // 1 Milliradian is equivalent to 0.0001591549431 Circle (1/(2*Math.PI*1000))
    [AngleUnit.MIL_NATO]: new Decimal(1).div(6400), // 1 Mil NATO is equivalent to 0.00015625 Circle
    [AngleUnit.MIL_USSR]: new Decimal(1).div(6000), // 1 Mil USSR is equivalent to 0.000166666667 Circle
    [AngleUnit.MIL_SWEDEN]: new Decimal(1).div(6300), // 1 Mil Sweden is equivalent to 0.00015873015 Circle
    [AngleUnit.OCTANT]: new Decimal(1).div(8), // 1 Octant is equivalent to 0.125 Circle
    [AngleUnit.QUADRANT]: new Decimal(1).div(4), // 1 Quadrant is equivalent to 0.25 Circle
    [AngleUnit.RADIAN]: new Decimal(1).div(2).div(Math.PI), // 1 Radian is equivalent to 0.1591549431 Circle (1/(2*Math.PI))
    [AngleUnit.REVOLUTION]: new Decimal(1), // 1 Revolution is equivalent to 1 Circle
    [AngleUnit.SEXTANT]: new Decimal(1).div(6), // 1 Sextant is equivalent to 0.1666666667 Circle
    [AngleUnit.SIGN]: new Decimal(1).div(12), // 1 Sign is equivalent to 0.0833333333 Circle
    [AngleUnit.TURN]: new Decimal(1), // 1 Turn is equivalent to 1 Circle
};