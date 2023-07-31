import { LengthUnit, WeightUnit, VolumeUnit, AreaUnit, SpeedUnit, TimeUnit, TemperatureUnit, convertUnits } from '../src/measurement-unit-converter'

describe('convert-units', () => {
    test('should convert meters to feets', () => {
        const meters = 10;
        const expectedFeets = 10*(1/0.304800000001219) // 32.808398950000026

        const actualFeets = convertUnits(meters, LengthUnit.METER, LengthUnit.FOOT);

        expect(actualFeets).toBeCloseTo(expectedFeets);
    });

    test('should convert pounds to grams', () => {
        const pounds = 10;
        const expectedGrams = 10*(0.453592370010035/0.001); // 4535.923700100349

        const actualGrams = convertUnits(pounds, WeightUnit.POUND, WeightUnit.GRAM);

        expect(actualGrams).toBeCloseTo(expectedGrams);
    });

    test('should convert cubic meters to gallons', () => {
        const cubicMeter = 10;
        const expectedGallons = 10*(1000/3.78541178397347); // 2641.720523599998

        const actualGallons = convertUnits(cubicMeter, VolumeUnit.CUBIC_METER, VolumeUnit.GALLON);

        expect(actualGallons).toBeCloseTo(expectedGallons);
    });

    test('should convert square inches to square millimeter', () => {
        const squareInches = 10;
        const expectedSquareMillimeters = 10*(0.000645160000005161/0.000001); // 6451.600000051611

        const actualSquareMillimeters = convertUnits(squareInches, AreaUnit.SQUARE_INCH, AreaUnit.SQUARE_MILLIMETER);

        expect(actualSquareMillimeters).toBeCloseTo(expectedSquareMillimeters);
    });

    test('should convert kilometers per hour to meters per second', () => {
        const kilometersPerHour = 10;
        const expectedMetersPerSecond = 10*(1/3.6); // 2.7777777777777777

        const actualMetersPerSecond = convertUnits(kilometersPerHour, SpeedUnit.KILOMETER_PER_HOUR, SpeedUnit.METER_PER_SECOND);

        expect(actualMetersPerSecond).toBeCloseTo(expectedMetersPerSecond);
    });

    test('should convert years to microseconds', () => {
        const years = 10;
        const expectedMicroseconds = 10*(31556952/1e-6); // 315569520000000

        const actualMicroseconds = convertUnits(years, TimeUnit.YEAR, TimeUnit.MICROSECOND);

        expect(actualMicroseconds).toBeCloseTo(expectedMicroseconds);
    });

    test('should convert fahrenheit to kelvin', () => {
        const fahrenheit = 10;
        const expectedKelvin = (10-32) / 1.8 + 273.15; // 260.92777777777775

        const actualKelvin = convertUnits(fahrenheit, TemperatureUnit.FAHRENHEIT, TemperatureUnit.KELVIN);
        
        expect(actualKelvin).toBeCloseTo(expectedKelvin);
    });

    test('should convert centimeters to meters', () => {
        const centimeters = 0.999999999999;
        const expectedMeters = 0.999999999999*(0.01/1) // 0.00999999999999

        const actualMeters = convertUnits(centimeters, LengthUnit.CENTIMETER, LengthUnit.METER);

        expect(actualMeters).toBeCloseTo(expectedMeters);
    });
});