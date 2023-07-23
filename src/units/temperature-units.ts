export enum TemperatureUnit {
    CELSIUS = 'celsius',
    FAHRENHEIT = 'fahrenheit',
    KELVIN = 'kelvin',
    RANKINE = 'rankine',
    REAUMUR = 'reaumur',
};

export const temperatureConversionRates: Record<TemperatureUnit, number> = {
    [TemperatureUnit.CELSIUS]: 1,
    [TemperatureUnit.FAHRENHEIT]: 1.8,
    [TemperatureUnit.KELVIN]: 1,
    [TemperatureUnit.RANKINE]: 1.8,
    [TemperatureUnit.REAUMUR]: 0.8,
};

export function convertTemperature(value: number, fromUnit: TemperatureUnit, toUnit:TemperatureUnit): number {
    if (fromUnit === toUnit) {
        return value; // No conversion needed if both units are the same
    }

    // Convert to celsius as the intermediate unit
    let celsiusValue: number;
    if (fromUnit === 'fahrenheit') {
        celsiusValue = (value - 32) / 1.8;
    } else if (fromUnit === 'kelvin') {
        celsiusValue = value - 273.15;
    } else if (fromUnit === 'rankine') {
        celsiusValue = (value - 491.67) / 1.8;
    } else if (fromUnit === 'reaumur') {
        celsiusValue = value / 0.8;
    } else {
        celsiusValue = value;
    }

    // Convert from Celsius to the target unit
    let resultValue: number;
    if (toUnit === 'fahrenheit') {
        resultValue = celsiusValue * 1.8 + 32;
    } else if (toUnit === 'kelvin') {
        resultValue = celsiusValue + 273.15;
    } else if (toUnit === 'rankine') {
        resultValue = celsiusValue * 1.8 + 491.67;
    } else if (toUnit === 'reaumur') {
        resultValue = celsiusValue * 0.8;
    } else {
        resultValue = celsiusValue;
    }

    return resultValue;
}