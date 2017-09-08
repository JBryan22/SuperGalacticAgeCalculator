export class GalacticCalculator {
  constructor (birthday) {
    this.mercuryYearLength = 0.24;
    this.venusYearLength = 0.62;
    this.marsYearLength = 1.88;
    this.jupiterYearLength = 11.86;
    this.birthdayDate = new Date(birthday);
    this.birthdayDate.setDate(this.birthdayDate.getDate() + 1);
    //maybe increment day by one
  }

  dateDifferenceInSeconds(givenDate, givenDate2) {
    givenDate2 = givenDate2 || Date.now();
    return ((givenDate2 - givenDate.getTime()) / 1000).toFixed(1);
  }

  ageBasedOnYearLength(birthday, yearLength) {
    let secondsOld = this.dateDifferenceInSeconds(birthday);

    return (secondsOld / 60 / 60 / 24 / 365.25 / yearLength).toFixed(2);
  }

  lifeExpectancy(gender, exercise, smoking, race) {
    let yourExpectancy = 79;
    debugger;

    gender == 'male' ? yourExpectancy -= 2.5 : yourExpectancy += 2.5;

    if (exercise == '3+') {
      yourExpectancy += 2;
    } else if (exercise == '1-2') {
      yourExpectancy += 1;
    } else if (exercise == 'rarely') {
      yourExpectancy -= 1;
    } else {
      yourExpectancy -= 2;
    }

    if (smoking == 'quit') {
      yourExpectancy -= 2;
    } else if (smoking == 'still smoke') {
      yourExpectancy -= 4;
    }

    if (race == 'african-american') {
      yourExpectancy -= 3.5;
    } else if (race == 'asian-american') {
      yourExpectancy += 6;
    } else if (race == 'hispanic') {
      yourExpectancy += 2.5
    } else if (race == 'native-american') {
      yourExpectancy += 2;
    }

    return yourExpectancy;

  }

};
