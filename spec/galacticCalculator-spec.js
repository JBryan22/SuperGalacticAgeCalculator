import { GalacticCalculator } from './../js/galacticCalculator.js';
let calc = new GalacticCalculator("1989-05-14");

describe('GalacticCalculator', function() {

  it('should return the difference in seconds between two dates', function() {
    let dateOne = new Date("1989-05-14");
    let dateTwo = new Date("2005-01-01");

    let result = calc.dateDifferenceInSeconds(dateOne, dateTwo);
    expect(result).toEqual((493430400).toFixed(1));

  });

  it('should return the year age of someone given the year length passed as an argument', function() {
    let result = Math.floor(calc.ageBasedOnYearLength(calc.birthdayDate, 1));
    let expected = 28;

    expect(result).toEqual(Number(expected));
  });

  it('should return life expectancy based on certain criteria', function() {
    let result = calc.lifeExpectancy('male', '3+', 'still smoke', 'african-american');

    expect(result).toEqual(71);
  });

});
