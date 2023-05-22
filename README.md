# Measurement Unit Converter
---
It is a npm package for converting units, including: Length, Mass, and Volume.
## Install
---
```
npm install measurement-unit-converter
```
## How to use
---
#### Import
This line of code should be added at the begin of the code. In this example we import the enum LengthUnit and the function convertUnits.
```typescript
import { LengthUnit, convertUnits } from './measurement-unit-converter';
```
---
#### Length
```typescript
const meters = 10;
const feets = convertUnits(meters, LengthUnit.METER, LengthUnit.FEET);
console.log(`${meters} meters are ${feets} feets`); // Output: "10 meters are 32.8084 feets"
```
| Enum LengthUnit |
| --- |
| KILOMETER |
| METER |
| CENTIMETER |
| MILLIMETER |
| MICROMETER |
| NANOMETER |
| MILE |
| YARD |
| FEET |
| INCH |
| NAUTICAL_MILE |
---
#### Mass
```typescript
const pounds = 10;
const kilograms = convertUnits(pounds, WeightUnit.POUND, WeightUnit.KILOGRAM);
console.log(`${pounds} pounds are ${kilograms} kilograms`); // Output: "10 pounds are 4.53592 kilograms"
```
| Enum WeightUnit |
| --- |
| TONNE |
| KILOGRAM |
| GRAM |
| MILLIGRAM |
| MICROGRAM |
| LONG_TON |
| SHORT_TON |
| STONE |
| POUND |
| OUNCE |
---
#### Volume
```typescript
const pints = 10;
const cubicCentimeters = convertUnits(pints, VolumeUnit.PINT, VolumeUnit.CUBIC_CENTIMETER);
console.log(`${pints} pints are ${cubicCentimeters} cubic centimeters`); // Output: "10 pints are 5682.61 cubic centimeters"
```
| Enum VolumeUnit |
| --- |
| CUBIC_METER |
| LITER |
| GALLON |
| PINT |
| CUBIC_CENTIMETER |
| CUBIC_FEET |
| CUBIC_INCH |