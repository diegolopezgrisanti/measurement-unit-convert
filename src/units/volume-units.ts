import { Decimal } from 'decimal.js';

export enum VolumeUnit {
    ACRE_FOOT = 'acre_foot',
    BARREL_OIL = 'barrel_oil',
    BARREL_UK = 'barrel_uk',
    BARREL_US = 'barrel_us',
    CENTILITER = 'centiliter',
    CUBIC_CENTIMETER = 'cubic_centimeter',
    CUBIC_DECAMETER = 'cubic_decameter',
    CUBIC_DECIMETER = 'cubic_decimeter',
    CUBIC_FOOT = 'cubic_foot',
    CUBIC_INCH = 'cubic_inch',
    CUBIC_KILOMETER = 'cubic_kilometer',
    CUBIC_METER = 'cubic_meter',
    CUBIC_MILE = 'cubic_mile',
    CUBIC_MILLIMETER = 'cubic_millimeter',
    CUBIC_YARD = 'cubic_yard',
    CUP_UK = 'cup_uk',
    CUP_US = 'cup_us',
    DECALITER = 'decaliter',
    DECILITER = 'deciliter',
    DRAM = 'dram',
    FLUID_OUNCE_UK = 'fluid_ounce_uk',
    FLUID_OUNCE_US = 'fluid_ounce_us',
    GALLON_UK = 'gallon_uk',
    GALLON_US = 'gallon_us',
    GIGALITER = 'gigaliter',
    GILL_UK = 'gill_uk',
    GILL_US = 'gill_us',
    KILOLITER = 'kiloliter',
    LITER = 'liter',
    MEGALITER = 'megaliter',
    MICROLITER = 'microliter',
    MILLILITER = 'milliliter',
    NANOLITER = 'nanoliter',
    PICOLITER = 'picoliter',
    PINT_UK = 'pint_uk',
    PINT_US = 'pint_us',
    QUART_UK = 'quart_uk',
    QUART_US = 'quart_us',
    TABLESPOON = 'tablespoon',
    TEASPOON = 'teaspoon'
};

export const volumeConversionRates: Record<VolumeUnit, Decimal> = {
    [VolumeUnit.ACRE_FOOT]: new Decimal(1233481.837548), // 1 Acre Foot is equivalent to 1233481.837548 Liters
    [VolumeUnit.BARREL_OIL]: new Decimal(158.987294928), // 1 Barrel (Oil) is equivalent to 158.987294928 Liters
    [VolumeUnit.BARREL_UK]: new Decimal(163.659239999917), // 1 Barrel (UK) is equivalent to 163.659239999917 Liters
    [VolumeUnit.BARREL_US]: new Decimal(119.240471195661), // 1 Barrel (US) is equivalent to 119.240471195661 Liter
    [VolumeUnit.CENTILITER]: new Decimal(0.01), // 1 Centiliter is equivalent to 0.01 Liters
    [VolumeUnit.CUBIC_CENTIMETER]: new Decimal(1).div(1000), // 1 Cubic Centimeter is equivalent to 0.001 Liters
    [VolumeUnit.CUBIC_DECAMETER]: new Decimal(1E6), // 1 Cubic Decameter is equivalent to 1E6 Liters
    [VolumeUnit.CUBIC_DECIMETER]: new Decimal(1), // 1 Cubic Decimeter is equivalent to 1 Liter
    [VolumeUnit.CUBIC_FOOT]: new Decimal(28.3168465923398), // 1 Cubic Foot is equivalent to 28.3168465923398 Liters
    [VolumeUnit.CUBIC_INCH]: new Decimal(0.0163870640001966), // 1 Cubic Inch is equivalent to 0.0163870640001966 Liters
    [VolumeUnit.CUBIC_KILOMETER]: new Decimal(1000000000000), // 1 Cubic Kilometer is equivalent to 1000000000000 Liters
    [VolumeUnit.CUBIC_METER]: new Decimal(1000), // 1 Cubic Meter is equivalent to 1000 Liters
    [VolumeUnit.CUBIC_MILE]: new Decimal(4168181825440.58), // 1 Cubic Mile is equivalent to 4168181825440.58 Liters
    [VolumeUnit.CUBIC_MILLIMETER]: new Decimal(1E-06), // 1 Cubic Millimeter is equivalent to 1E-6 Liters
    [VolumeUnit.CUBIC_YARD]: new Decimal(764.554857979191), // 1 Cubic Yard is equivalent to 764.554857979191 Liters
    [VolumeUnit.CUP_UK]: new Decimal(0.284130624998822), // 1 Cup (UK) is equivalent to 0.284130624998822 Liters
    [VolumeUnit.CUP_US]: new Decimal(0.2365882365017), // 1 Cup (US) is equivalent to 0.2365882365017 Liters
    [VolumeUnit.DECALITER]: new Decimal(10), // 1 Decaliter is equivalent to 10 Lites
    [VolumeUnit.DECILITER]: new Decimal(0.1), // 1 Deciliter is equivalent to 0.1 Liters
    [VolumeUnit.DRAM]: new Decimal(0.00369669119537733), // 1 Dram is equivalent to 0.00369669119537733 Liters
    [VolumeUnit.FLUID_OUNCE_UK]: new Decimal(0.0284130624998822), // 1 Fluid Ounce (UK) is equivalent to 0.0284130624998822 Liters
    [VolumeUnit.FLUID_OUNCE_US]: new Decimal(0.0295735295623627), // 1 Fluid Ounce (US) is equivalent to 0.0295735295623627 Liters
    [VolumeUnit.GALLON_UK]: new Decimal(4.54608999998115), // 1 Gallon (UK) is equivalent to 4.54608999998115 Liters
    [VolumeUnit.GALLON_US]: new Decimal(3.78541178397347), // 1 Gallon (US) is equivalent to 3.78541178397347 Liters
    [VolumeUnit.GIGALITER]: new Decimal(1000000000), // 1 Gigaliter is equivalent to 1000000000 Liters
    [VolumeUnit.GILL_UK]: new Decimal(0.142065312499411), // 1 Gill (UK) is equivalent to 0.142065312499411 Liters
    [VolumeUnit.GILL_US]: new Decimal(0.118294118249451), // 1 Gill (US) is equivalent to 0.118294118249451 Liters
    [VolumeUnit.KILOLITER]: new Decimal(1000), // 1 Kiloliter is equivalent to 1000 Liters
    [VolumeUnit.LITER]: new Decimal(1),
    [VolumeUnit.MEGALITER]: new Decimal(1000000), // 1 Megaliter is equivalent to 1000000 Liters
    [VolumeUnit.MICROLITER]: new Decimal(1E-6), // 1 Microliter is equivalent to 1E-6 Liters
    [VolumeUnit.MILLILITER]: new Decimal(0.001), // 1 Milliliter is equivalent to 0.001 Liters
    [VolumeUnit.NANOLITER]: new Decimal(1E-9), // 1 Nanoliter is equivalent to 1E-9 Liters
    [VolumeUnit.PICOLITER]: new Decimal(1E-12), // 1 Picoliter is equivalent to 1E-12 Liters
    [VolumeUnit.PINT_UK]: new Decimal(0.568261249997643), // 1 Pint (UK) is equivalent to 0.568261249997643 Liters
    [VolumeUnit.PINT_US]: new Decimal(0.473176472992206), // 1 Pint (US) is equivalent to 0.473176472992206 Liters
    [VolumeUnit.QUART_UK]: new Decimal(1.13652249999529), // 1 Quart (UK) is equivalent to 1.13652249999529 Liters
    [VolumeUnit.QUART_US]: new Decimal(0.94635294602919), // 1 Quart (US) is equivalent to 0.94635294602919 Liters
    [VolumeUnit.TABLESPOON]: new Decimal(0.0147867647811813), // 1 Tablespoon is equivalent to 0.0147867647811813 Liters
    [VolumeUnit.TEASPOON]: new Decimal(0.0049289215937757), // 1 Teaspoon  is equivalent to 0.0049289215937757 Liters
};