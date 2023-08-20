import { Decimal } from 'decimal.js';

export enum LengthUnit {
    ANGSTROM = 'angstrom',
    ASTRONOMICAL_UNIT = 'astronomical_unit',
    BARLEYCORN = 'barleycorn',
    CABLE = 'cable',
    CENTIMETER = 'centimeter',
    CHAIN = 'chain',
    DECIMETER = 'decimeter',
    ELL = 'ell',
    FATHOM = 'fathom',
    FOOT = 'foot',
    FOOT_US_SURVEY = 'foot_us_survey',
    FURLONG = 'furlong',
    HAND = 'hand',
    HECTOMETER = 'hectometer',
    INCH = 'inch',
    KILOMETER = 'kilometer',
    LIGHT_YEAR = 'light_year',
    METER = 'meter',
    MICROMETER = 'micrometer',
    MIL = 'mil',
    MILE = 'mile',
    MILLIMETER = 'millimeter',
    NANOMETER = 'nanometer',
    NAUTICAL_MILE = 'nautical_mile',
    PARSEC = 'parsec',
    PICA = 'pica',
    PICOMETER = 'picometer',
    VARA_CASTELLANA = 'vara_castellana',
    VARA_CONUQUERA = 'vara_conuquera',
    YARD = 'yard',
};

export const lengthConversionRates: Record<LengthUnit, Decimal> = {
    [LengthUnit.ANGSTROM]: new Decimal(1E-10), // 1 Angstrom is equivalent to 1E-10 Meters
    [LengthUnit.ASTRONOMICAL_UNIT]: new Decimal(149597870691), // 1 Astronomical Unit is equivalent to 149597870691 Meters
    [LengthUnit.BARLEYCORN]: new Decimal(0.00846666666670053), // 1 Barleycorn is equivalent to 0.00846666666670053 Meters
    [LengthUnit.CABLE]: new Decimal(185.2), // 1 Cable is equivalent to 185.2 Meters
    [LengthUnit.CENTIMETER]: new Decimal(1).div(100), // 1 Centimeter is equivalent to 0.01 Meters
    [LengthUnit.CHAIN]: new Decimal(20.1168), // 1 Chain is equivalent to 20.1168 Meters
    [LengthUnit.DECIMETER]: new Decimal(1).div(10), // 1 Decimeter is equivalent to 0.1 Meters
    [LengthUnit.ELL]: new Decimal(1.143), // 1 Ell is equivalent to 1.143 Meters
    [LengthUnit.FATHOM]: new Decimal(1.8288), // 1 Fathom is equivalent to 1.8288 Meters
    [LengthUnit.FOOT]: new Decimal(0.304800000001219), // 1 Foot is equivalent to 0.304800000001219 Meters
    [LengthUnit.FOOT_US_SURVEY]: new Decimal(0.304800609604316), // 1 Foot US Survey is equivalent to 0.304800609604316 Meters
    [LengthUnit.FURLONG]: new Decimal(201.168), // 1 Furlong is equivalent to 201.168 Meters
    [LengthUnit.HAND]: new Decimal(0.101600000000406), // 1 Hand is equivalent to 0.101600000000406 Meters
    [LengthUnit.HECTOMETER]: new Decimal(100), // 1 Hectometer is equivalent to 100 Meters
    [LengthUnit.INCH]: new Decimal(0.0254000000001016), // 1 Inch is equivalent to 0.0254000000001016 Meters
    [LengthUnit.KILOMETER]: new Decimal(1000), // 1 Kilometer is equivalent to 1000 Meters
    [LengthUnit.LIGHT_YEAR]: new Decimal(9.4607304725808E+15), // 1 Light Year is equivalent to 9.4607304725808E+15 Meters
    [LengthUnit.METER]: new Decimal(1),
    [LengthUnit.MICROMETER]: new Decimal(1).div(1000000), // 1 Micrometer is equivalent to 0.000001 Meters
    [LengthUnit.MIL]: new Decimal(2.54000000001016E-05), // 1 Mil is equivalent to 2.54000000001016E-05 Meters
    [LengthUnit.MILE]: new Decimal(1609.344), // 1 Mile is equivalent to 1609.344 Meters
    [LengthUnit.MILLIMETER]: new Decimal(1).div(1000), // 1 Millimeter is equivalent to 0.001 Meters
    [LengthUnit.NANOMETER]: new Decimal(1).div(1000000000), // 1 Nanometer is equivalent to 0.000000001 Meters
    [LengthUnit.NAUTICAL_MILE]: new Decimal(1852), // 1 Nautical Mile is equivalent to 1852 Meters
    [LengthUnit.PARSEC]: new Decimal(3.08567758149137E+16), // 1 Parsec is equivalent to 3.08567758149137E+16 Meters
    [LengthUnit.PICA]: new Decimal(0.00423333333335027), // 1 Pica is equivalent to 0.00423333333335027 Meters
    [LengthUnit.PICOMETER]: new Decimal(1E-12), // 1 Picometer is equivalent to 1E-12 Meters
    [LengthUnit.VARA_CASTELLANA]: new Decimal(0.83515199999825), // 1 Vara Castellana is equivalent to 0.83515199999825 Meters
    [LengthUnit.VARA_CONUQUERA]: new Decimal(2.505456), // 1 Vara Conuquera is equivalent to 2.505456 Meters
    [LengthUnit.YARD]: new Decimal(0.914399999998083), // 1 Yard is equivalent to 0.914399999998083 Meters
};