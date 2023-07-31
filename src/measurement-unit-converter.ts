import { LengthUnit, lengthConversionRates } from './units/length-units';
import { WeightUnit, weightConversionRates } from './units/weight-units';
import { VolumeUnit, volumeConversionRates } from './units/volume-units';
import { AreaUnit, areaConversionRates } from './units/area-units';
import { SpeedUnit, speedConversionRates } from './units/speed-units';
import { TimeUnit, timeConversionRates } from './units/time-units';
import { TemperatureUnit, temperatureConversionRates, convertTemperature } from './units/temperature-units';
import { Decimal } from 'decimal.js';

type ConversionRate = {
    [unit: string]: Decimal;
};

const conversionRates: Record<string, ConversionRate> = {
    length: lengthConversionRates,
    weight: weightConversionRates,
    volume: volumeConversionRates,
    area: areaConversionRates,
    speed: speedConversionRates,
    time: timeConversionRates,
    temperature: temperatureConversionRates,
};

type Unit = LengthUnit | WeightUnit | VolumeUnit | AreaUnit | SpeedUnit | TimeUnit | TemperatureUnit;

export function convertUnits(value: number, fromUnit: Unit, toUnit: Unit): number {
    const fromCategory = getCategoryFromUnit(fromUnit);
    const toCategory = getCategoryFromUnit(toUnit);

    if (fromCategory !== toCategory) {
        throw new Error('Cannot convert between different unit categories');
    }

    if (fromCategory === 'temperature') {
        return convertTemperature(value, fromUnit as TemperatureUnit, toUnit as TemperatureUnit);
    }

    const conversionRate = getConversionRate(fromCategory, fromUnit, toUnit);

    if (conversionRate === null) {
        throw new Error('Invalid conversion rate');
    }

    return new Decimal(value).times(conversionRate).toNumber();
}

function getCategoryFromUnit(unit: Unit): string {
    for (const category in conversionRates) {
        if (unit in conversionRates[category as keyof typeof conversionRates]) {
        return category;
        }
    }
    throw new Error('Invalid unit');
}

function getConversionRate(category: string, fromUnit: Unit, toUnit: Unit): Decimal | null {
    const categoryConversionRates = conversionRates[category as keyof typeof conversionRates];

    if (fromUnit in categoryConversionRates && toUnit in categoryConversionRates) {
        return categoryConversionRates[fromUnit].div(categoryConversionRates[toUnit]);
    }

    return null;
}

export { LengthUnit, WeightUnit, VolumeUnit, AreaUnit, SpeedUnit, TimeUnit, TemperatureUnit };