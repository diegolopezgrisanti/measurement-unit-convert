import { LengthUnit, WeightUnit, VolumeUnit, convertUnits } from '../src/measurement-unit-converter'

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
});