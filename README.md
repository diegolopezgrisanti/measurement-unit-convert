# Measurement Unit Converter
[![npm version](https://badge.fury.io/js/measurement-unit-converter.svg)](https://badge.fury.io/js/measurement-unit-converter)

It is a npm package for converting units, including: Area, Length, Mass, Speed, Temperature, Time, and Volume.
> Adding the following function:
> - Solve the problem of floating-point precision after unit conversion
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
#### Area
```typescript
const squareInches = 10;
const squareMillimeters = convertUnits(squareInches, AreaUnit.SQUARE_INCH, AreaUnit.SQUARE_MILLIMETER);
console.log(`${squareInches} square inches are ${squareMillimeters} square millimeters`); // Output: "10 square inches are 6451.6 square millimeters"
```
| Enum AreaUnit |
| --- |
| SQUARE_KILOMETER |
| HECTARE |
| SQUARE_METER |
| SQUARE_CENTIMETER |
| SQUARE_MILLIMETER |
| SQUARE_MILE |
| ACRE |
| SQUARE_YARD |
| SQUARE_FOOT |
| SQUARE_INCH |
---
#### Length
```typescript
const meters = 10;
const feets = convertUnits(meters, LengthUnit.METER, LengthUnit.FOOT);
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
| FOOT |
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
#### Speed
```typescript
const kilometersPerHour = 10;
const metersPerSecond = convertUnits(pints, SpeedUnit.KILOMETER_PER_HOUR, SpeedUnit.METER_PER_SECOND);
console.log(`${kilometersPerHour} kilometers per hour are ${metersPerSecond} meters per second`); // Output: "10 kilometers per hour are 2.7778 meters per second"
```
| Enum SpeedUnit |
| --- |
| KILOMETER_PER_HOUR |
| METER_PER_SECOND |
| MILE_PER_HOUR |
| KNOT |
| FOOT_PER_SECOND |
---
#### Temperature
```typescript
const fahrenheit = 10;
const kelvin = convertUnits(fahrenheit, TemperatureUnit.FAHRENHEIT, TemperatureUnit.KELVIN);
console.log(`${fahrenheit} fahrenheit are ${kelvin} kelvin`); // Output: "10 fahrenheit are 260.92777777777775 kelvin"
```
| Enum TemperatureUnit |
| --- |
| CELSIUS |
| FAHRENHEIT |
| KELVIN |
| RANKINE |
| REAUMUR |
---
#### Time
```typescript
const years = 10;
const microseconds = convertUnits(years, TimeUnit.YEAR, TimeUnit.MICROSECOND);
console.log(`${years} years are ${microseconds} microseconds`); // Output: "10 years are 315569520000000 microseconds"
```
| Enum TimeUnit |
| --- |
| NANOSECOND |
| MICROSECOND |
| MILLISECOND |
| SECOND |
| MINUTE |
| HOUR |
| DAY |
| WEEK |
| MONTH |
| YEAR |
| DECADE |
| CENTURY |
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
| CUBIC_FOOT |
| CUBIC_INCH |