import { GalacticCalculator } from './../js/galacticCalculator.js';

$(function() {
  $('#age-calculator').submit(function(event) {
    event.preventDefault();
    let calc = new GalacticCalculator($("#birthday").val());
    let gender = $("input:radio[name=gender]:checked").val();
    let race = $(".race-select").val();
    let exercise = $(".exercise-select").val();
    let smoking = $(".smoking-select").val();
    let lifeExpectancy = calc.lifeExpectancy(gender, exercise, smoking, race);
    let currentAge = calc.ageBasedOnYearLength(calc.birthdayDate, 1);


    //Fun facts section
    $(".output-area ul").text('');
    $(".output-area ul").append(`<li> You are ${calc.dateDifferenceInSeconds(calc.birthdayDate)} seconds old.</li>`);
    $(".output-area ul").append(`<li> You are ${calc.ageBasedOnYearLength(calc.birthdayDate, calc.dogYearLength)} years old in dog years.</li>`);

    //planet area output section

    $(".mercury").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.mercuryYearLength));
    $(".mercury-life").text((lifeExpectancy / calc.mercuryYearLength).toFixed(2));
    $(".mercury-left").text(((lifeExpectancy / calc.mercuryYearLength).toFixed(2) - (currentAge / calc.mercuryYearLength)).toFixed(2));

    $(".venus").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.venusYearLength));
    $(".venus-life").text((lifeExpectancy / calc.venusYearLength).toFixed(2));
    $(".venus-left").text(((lifeExpectancy / calc.venusYearLength).toFixed(2) - (currentAge / calc.venusYearLength)).toFixed(2));

    $(".earth").text(currentAge);
    $(".earth-life").text(lifeExpectancy);
    $(".earth-left").text(lifeExpectancy - currentAge);

    $(".mars").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.marsYearLength));
    $(".mars-life").text((lifeExpectancy / calc.marsYearLength).toFixed(2));
    $(".mars-left").text(((lifeExpectancy / calc.marsYearLength).toFixed(2) - (currentAge / calc.marsYearLength)).toFixed(2));

    $(".jupiter").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.jupiterYearLength));
    $(".jupiter-life").text((lifeExpectancy / calc.jupiterYearLength).toFixed(2));
    $(".jupiter-left").text(((lifeExpectancy / calc.jupiterYearLength).toFixed(2) - (currentAge / calc.jupiterYearLength)).toFixed(2));




  });
});
