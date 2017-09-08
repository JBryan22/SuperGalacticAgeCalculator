import { GalacticCalculator } from './../js/galacticCalculator.js';

$(function() {
  $('#age-calculator').submit(function(event) {
    event.preventDefault();
    let calc = new GalacticCalculator($("#birthday").val());
    $("#output").text(`You are ${calc.dateDifferenceInSeconds(calc.birthdayDate)} seconds old!`);

    $(".mercury").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.mercuryYearLength));

    $(".venus").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.venusYearLength));

    $(".earth").text(calc.ageBasedOnYearLength(calc.birthdayDate, 1));

    $(".mars").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.marsYearLength));

    $(".jupiter").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.jupiterYearLength));

  });
});
