import { GalacticCalculator } from './../js/galacticCalculator.js';

$(function() {
  $('#age-calculator').submit(function(event) {
    event.preventDefault();
    let calc = new GalacticCalculator($("#birthday").val());
    let gender = $("input:radio[name=gender]:checked").val();
    let race = $(".race-select").val();
    let exercise = $(".exercise-select").val();
    let smoking = $(".smoking-select").val();

    //Fun facts section
    $(".output-area ul").append(`<li> You are ${calc.dateDifferenceInSeconds(calc.birthdayDate)} seconds old!</li>`);

    //planet area output section

    $("#output").text();

    $(".mercury").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.mercuryYearLength));
    $(".mercury-life").text((calc.lifeExpectancy(gender, exercise, smoking, race) / calc.mercuryYearLength).toFixed(2));


    $(".venus").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.venusYearLength));
    $(".venus-life").text((calc.lifeExpectancy(gender, exercise, smoking, race) / calc.venusYearLength).toFixed(2));


    $(".earth").text(calc.ageBasedOnYearLength(calc.birthdayDate, 1));
    $(".earth-life").text(calc.lifeExpectancy(gender, exercise, smoking, race));


    $(".mars").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.marsYearLength));
    $(".mars-life").text((calc.lifeExpectancy(gender, exercise, smoking, race) / calc.marsYearLength).toFixed(2));


    $(".jupiter").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.jupiterYearLength));
    $(".ju[iter]-life").text((calc.lifeExpectancy(gender, exercise, smoking, race) / calc.jupiterYearLength).toFixed(2));




  });
});
