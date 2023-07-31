import { Decimal } from 'decimal.js';

export enum TemperatureUnit {
    CELSIUS = 'celsius',
    FAHRENHEIT = 'fahrenheit',
    KELVIN = 'kelvin',
    RANKINE = 'rankine',
    REAUMUR = 'reaumur',
};

export const temperatureConversionRates: Record<TemperatureUnit, Decimal> = {
    [TemperatureUnit.CELSIUS]: new Decimal(1),
    [TemperatureUnit.FAHRENHEIT]: new Decimal(1.8),
    [TemperatureUnit.KELVIN]: new Decimal(1),
    [TemperatureUnit.RANKINE]: new Decimal(1.8),
    [TemperatureUnit.REAUMUR]: new Decimal(0.8),
};

export function convertTemperature(value: number, fromUnit: TemperatureUnit, toUnit:TemperatureUnit): number {
    if (fromUnit === toUnit) {
        return value; // No conversion needed if both units are the same
    }

    // Convert to celsius as the intermediate unit
    let celsiusValue: Decimal;
    if (fromUnit === 'fahrenheit') {
        celsiusValue = new Decimal(value).minus(32).div(1.8);
    } else if (fromUnit === 'kelvin') {
        celsiusValue = new Decimal(value).minus(273.15);
    } else if (fromUnit === 'rankine') {
        celsiusValue = new Decimal(value).minus(491.67).div(1.8);
    } else if (fromUnit === 'reaumur') {
        celsiusValue = new Decimal(value).div(0.8);
    } else {
        celsiusValue = new Decimal(value);
    }

    // Convert from Celsius to the target unit
    let resultValue: Decimal;
    if (toUnit === 'fahrenheit') {
        resultValue = celsiusValue.times(1.8).plus(32);
    } else if (toUnit === 'kelvin') {
        resultValue = celsiusValue.plus(273.15);
    } else if (toUnit === 'rankine') {
        resultValue = celsiusValue.times(1.8).plus(491.67);
    } else if (toUnit === 'reaumur') {
        resultValue = celsiusValue.times(0.8);
    } else {
        resultValue = celsiusValue;
    }

    return Number(resultValue.toString()); // Convert back to regular number
}