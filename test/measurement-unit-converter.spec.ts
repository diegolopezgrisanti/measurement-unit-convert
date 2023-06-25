import { LengthUnit, WeightUnit, VolumeUnit, AreaUnit, SpeedUnit, convertUnits } from '../src/measurement-unit-converter'

describe('convert-units', () => {
    test('should convert meters to feets', () => {
        const meters = 10;
        const expectedFeets = 10*(1/0.3048) // 32.8084

        const actualFeets = convertUnits(meters, LengthUnit.METER, LengthUnit.FEET);

        expect(actualFeets).toBeCloseTo(expectedFeets);
    });

    test('should convert pounds to grams', () => {
        const pounds = 10;
        const expectedGrams = 10*(0.453592/0.001); // 4535.92

        const actualGrams = convertUnits(pounds, WeightUnit.POUND, WeightUnit.GRAM);

        expect(actualGrams).toBeCloseTo(expectedGrams);
    });

    test('should convert cubic meters to gallons', () => {
        const cubicMeter = 10;
        const expectedGallons = 10*(1000/3.78541); // 2641.7217

        const actualGallons = convertUnits(cubicMeter, VolumeUnit.CUBIC_METER, VolumeUnit.GALLON);

        expect(actualGallons).toBeCloseTo(expectedGallons);
    });

        test('should convert square inches to square millimeter', () => {
        const squareInches = 10;
        const expectedSquareMillimeters = 10*(0.000645160000005161/0.000001); // 6451.60000005161

        const actualSquareMillimeters = convertUnits(squareInches, AreaUnit.SQUARE_INCH, AreaUnit.SQUARE_MILLIMETER);

        expect(actualSquareMillimeters).toBeCloseTo(expectedSquareMillimeters);
    });

    test('should convert kilometers per hour to meters per second', () => {
        const kilometersPerHour = 10;
        const expectedMetersPerSecond = 10*(1/3.6); // 2.77777777777778

        const actualMetersPerSecond = convertUnits(kilometersPerHour, SpeedUnit.KILOMETER_PER_HOUR, SpeedUnit.METER_PER_SECOND);

        expect(actualMetersPerSecond).toBeCloseTo(expectedMetersPerSecond);
    });

});