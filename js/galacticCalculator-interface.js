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
    let outlived = false;


    //Fun facts section
    $(".output-area ul").text('');
    $(".output-area ul").append(`<li> You are ${calc.dateDifferenceInSeconds(calc.birthdayDate)} seconds old.</li>`);
    $(".output-area ul").append(`<li> You are ${calc.ageBasedOnYearLength(calc.birthdayDate, calc.dogYearLength)} years old in dog years.</li>`);
    if (lifeExpectancy < currentAge) {
      $(".years-p").hide();
      $(".output-area ul").append("<li>You outlived your life exepectancy! Good job staying healthy! Keep on truckin'!");
      outlived = true;
    }

    //planet area output section

    $(".mercury").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.mercuryYearLength));
    $(".mercury-life").text((lifeExpectancy / calc.mercuryYearLength).toFixed(2));
    if (!outlived) {
      $(".years-p").show();
      $(".mercury-left").text("Years left to live on this planet: " + ((lifeExpectancy / calc.mercuryYearLength).toFixed(2) - (currentAge / calc.mercuryYearLength)).toFixed(2));
    }


    $(".venus").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.venusYearLength));
    $(".venus-life").text((lifeExpectancy / calc.venusYearLength).toFixed(2));
    if (!outlived) {
      $(".years-p").show();
      $(".venus-left").text("Years left to live on this planet: " + ((lifeExpectancy / calc.venusYearLength).toFixed(2) - (currentAge / calc.venusYearLength)).toFixed(2));
    }

    $(".earth").text(currentAge);
    $(".earth-life").text(lifeExpectancy);
    if (!outlived) {
      $(".years-p").show();
      $(".earth-left").text("Years left to live on this planet: " + lifeExpectancy - currentAge);
    }

    $(".mars").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.marsYearLength));
    $(".mars-life").text((lifeExpectancy / calc.marsYearLength).toFixed(2));
    if (!outlived) {
      $(".years-p").show();
      $(".mars-left").text("Years left to live on this planet: " + ((lifeExpectancy / calc.marsYearLength).toFixed(2) - (currentAge / calc.marsYearLength)).toFixed(2));
    }

    $(".jupiter").text(calc.ageBasedOnYearLength(calc.birthdayDate, calc.jupiterYearLength));
    $(".jupiter-life").text((lifeExpectancy / calc.jupiterYearLength).toFixed(2));
    if (!outlived) {
      $(".years-p").show();
      $(".jupiter-left").text("Years left to live on this planet: " + ((lifeExpectancy / calc.jupiterYearLength).toFixed(2) - (currentAge / calc.jupiterYearLength)).toFixed(2));
    }




  });
});
