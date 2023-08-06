import { Decimal } from 'decimal.js';

export enum AreaUnit {
    ACRE = 'acre',
    ARE = 'are',
    ARPENT = 'arpent',
    BARN = 'barn',
    CIRCULAR_INCH = 'circular_inch',
    CIRCULAR_MIL = 'circular_mil',
    CUERDA = 'cuerda',
    HECTARE = 'hectare',
    PLAZA = 'plaza',
    ROOD = 'rood',
    SECTION = 'section',
    SQUARE_CENTIMETER = 'square_centimeter',
    SQUARE_CHAIN = 'square_chain',
    SQUARE_DECAMETER = 'square_decameter',
    SQUARE_DECIMETER = 'square_decimeter',
    SQUARE_FOOT = 'square_foot',
    SQUARE_HECTOMETER = 'square_hectometer',
    SQUARE_INCH = 'square_inch',
    SQUARE_KILOMETER = 'square_kilometer',
    SQUARE_METER = 'square_meter',
    SQUARE_MICROMETER = 'square_micrometer',
    SQUARE_MILE = 'square_mile',
    SQUARE_MILLIMETER = 'square_millimeter',
    SQUARE_NANOMETER = 'square_nanometer',
    SQUARE_PERCH = 'square_perch',
    SQUARE_POLE = 'square_pole',
    SQUARE_ROD = 'square_rod',
    SQUARE_YARD = 'square_yard',
    STREMMA = 'stremma',
    TAHULLA = 'tahulla',
    TOWNSHIP = 'township',
    VARAS_CASTELLANAS_CUAD = 'varas_castellanas_cuad',
    VARAS_CONUQUERAS_CUAD = 'varas_conuqueras_cuad',
};

export const areaConversionRates: Record<AreaUnit, Decimal> = {
    [AreaUnit.ACRE]: new Decimal(4046.85611888692), // 1 Acre is equivalent to 4046.8561 Square Meters
    [AreaUnit.ARE]: new Decimal(100), // 1 Are is equivalent to 100 Square Meters
    [AreaUnit.ARPENT]: new Decimal(4041.28250908682), // 1 Arpent is equivalent to 4041.28250908682 Square Meter
    [AreaUnit.BARN]: new Decimal(1E-28), // 1 Barn is equivalent to 1E-28 Square Meter
    [AreaUnit.CIRCULAR_INCH]: new Decimal(0.000506707479094926), // 1 Circular Inch is equivalent to 0.0005 Square Meter
    [AreaUnit.CIRCULAR_MIL]: new Decimal(5.06707479094926E-10), // 1 Circular Mil is equivalent to 5.0671E-10 Square Meter
    [AreaUnit.CUERDA]: new Decimal(3930.395625), // 1 Cuerda is equivalent to 3930.3956 Square Meter
    [AreaUnit.HECTARE]: new Decimal(10000), // 1 Hectare is equivalent to 10000 Square Meters
    [AreaUnit.PLAZA]: new Decimal(6400), // 1 Plaza is equivalent to 6400 Square Meter 
    [AreaUnit.ROOD]: new Decimal(1011.71413207827), // 1 Rood is equivalent to 1011.7141 Square Meter
    [AreaUnit.SECTION]: new Decimal(2590000), // 1 Section is equivalent to 2590000 Square Meter
    [AreaUnit.SQUARE_CENTIMETER]: new Decimal(1).div(10000), // 1 Square Centimeter is equivalent to 0.0001 Square Meters
    [AreaUnit.SQUARE_CHAIN]: new Decimal(404.68564224), // 1 Square Chain is equivalent to 404.6856 Square Meter
    [AreaUnit.SQUARE_DECAMETER]: new Decimal(100), // 1 Square Decameter is equivalent to 100 Square Meter
    [AreaUnit.SQUARE_DECIMETER]: new Decimal(0.01), // 1 Square Decimeter is equivalent to 0.01 Square Meter
    [AreaUnit.SQUARE_FOOT]: new Decimal(0.0929030400007433), // 1 Square Foot is equivalent to 0.0929 Square Meters
    [AreaUnit.SQUARE_HECTOMETER]: new Decimal(10000), // 1 Square Hectometer is equivalent to 10000 Square Meter
    [AreaUnit.SQUARE_INCH]: new Decimal(0.000645160000005161), // 1 Square Inch is equivalent to 0.0006 Square Meters
    [AreaUnit.SQUARE_KILOMETER]: new Decimal(1000000), // 1 Square Kilometer is equivalent to 1000000 Square Meters
    [AreaUnit.SQUARE_METER]: new Decimal(1),
    [AreaUnit.SQUARE_MICROMETER]: new Decimal(1E-12), // 1 Square Micrometer is equivalent to 1E-12 Square Meter
    [AreaUnit.SQUARE_MILLIMETER]: new Decimal(1).div(1000000), // 1 Square Millimeter is equivalent to 1E-6 Square Meters
    [AreaUnit.SQUARE_MILE]: new Decimal(2589988.110336), // 1 Square Mile is equivalent to 2589988.1103 Square Meters
    [AreaUnit.SQUARE_NANOMETER]: new Decimal(1E-18), // 1 Square Nanometer is equivalent to 1E-18 Square Meter
    [AreaUnit.SQUARE_PERCH]: new Decimal(25.2927514688918), // 1 Square Perch is equivalent to 25.2928 Square Meter
    [AreaUnit.SQUARE_POLE]: new Decimal(25.292852644057), // 1 Square Pole is equivalent to 25.2929 Square Meter
    [AreaUnit.SQUARE_ROD]: new Decimal(25.292852644057), // 1 Square Rod is equivalent to 25.2929 Square Meter
    [AreaUnit.SQUARE_YARD]: new Decimal(0.836127359996498), // 1 Square Yard is equivalent to 0.8361 Square Meters
    [AreaUnit.STREMMA]: new Decimal(1000), // 1 Stremma is equivalent to 1000 Square Meter
    [AreaUnit.TAHULLA]: new Decimal(1118), // 1 Tahulla is equivalent to 1118 Square Meter
    [AreaUnit.TOWNSHIP]: new Decimal(93239572.054793), // 1 Township is equivalent to 93239572.0548 Square Meter
    [AreaUnit.VARAS_CASTELLANAS_CUAD]: new Decimal(0.698737000017854), // 1 Varas Castellanas Cuad is equivalent to 0.6987 Square Meter
    [AreaUnit.VARAS_CONUQUERAS_CUAD]: new Decimal(6.28863299840305), // 1 Varas Conuqueras Cuad is equivalent to 6.2886 Square Meter
};