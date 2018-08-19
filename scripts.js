const questions = [
  { qOneA: 1, 
    qOneB: 1, 
    qOneC: 5, 
    qOneD: 1,
    qTwoA: 1,
    qTwoB: 5,
    qTwoC: 1,
    qTwoD: 1,
    qThreeA: 1,
    qThreeB: 1,
    qThreeC: 1,
    qThreeD: 5,
    qFourA: 1,
    qFourB: 5,
    qFourC: 1,
    qFourD: 1,
    qFiveA: 1,
    qFiveB: 1,
    qFiveC: 5,
    qFiveD: 1,
    qSixA: 1,
    qSixB: 1,
    qSixC: 1,
    qSixD: 5,
    qSevenA: 5,
    qSevenB: 1,
    qSevenC: 1,
    qSevenD: 1,
    qEightA: 1,
    qEightB: 1,
    qEightC: 5,
    qEightD: 1,
  }
];
// quotes.quoteA.quote1.saying;
const scores = {
  low: [ 
    quote1 = {
      saying: `OMG You need to watch Mean Girls again!`,
      imgUrl: 'assets/youcant.gif'
    },
    quote2 = {
      saying: `You are not a fan..`,
      imgUrl: 'assets/doesnt.gif'
    },
  ],
  moderate: [
    quote1 = {
      saying: `Not bad but get in the car! We're watching the movie 5 more times..`,
      imgUrl: 'assets/a3.gif'
    },
    quote2 = {
      saying: `Not bad... but watch the movie again and you can try again.`,
      imgUrl: 'assets/try.gif',
    },
  ],
  high: [
    quote1 = {
      saying: `CONGRATS!! You're a super fan!`,
      imgUrl: 'assets/taco.gif',
    },
    quote2 = {
      saying: `CONGRATS!! You CAN sit with us!`,
      imgUrl: 'assets/lunch.gif',
    },
  ],
}

$(function(){
  $('form').on('submit', function(event) {
    event.preventDefault();
    

    const userQOneChoice = $('input[name=qOne]:checked').data('point');
    
    const userQTwoChoice = $('input[name=qTwo]:checked').data('point');
    
    const userQThreeChoice = $('input[name=qThree]:checked').data('point');
    
    const userQFourChoice = $('input[name=qFour]:checked').data('point');
    
    const userQFiveChoice = $('input[name=qFive]:checked').data('point');

    const userQSixChoice = $('input[name=qSix]:checked').data('point');

    const userQSevenChoice = $('input[name=qSeven]:checked').data('point');

    const userQEightChoice = $('input[name=qEight]:checked').data('point');
    
    console.log(userQOneChoice, userQTwoChoice, userQThreeChoice, userQFourChoice, userQFiveChoice, userQSixChoice, userQSevenChoice, userQEightChoice);
    
    let userChoiceTotal = userQOneChoice + userQTwoChoice + userQThreeChoice + userQFourChoice + userQFiveChoice + userQSixChoice + userQSevenChoice + userQEightChoice;
    
    console.log(userChoiceTotal);
      
    let result;
      if(userChoiceTotal <= 20) {
        result = scores.low;
        console.log(result);
      } else if (userChoiceTotal >=21 && userChoiceTotal <=33) {
        result = scores.moderate;
          console.log(result);
        } else {
          (userChoiceTotal >= 36);
          result = scores.high;
          console.log(result);
        }
      
      let randomResults = result[Math.floor(Math.random()*result.length)];

      console.log(randomResults.saying, randomResults.imgUrl);

      $('.yourQuote').html(`<h2 class="quoteAnswer">${randomResults.saying}</h2>`);
      const image = $('<img>').attr('src', randomResults.imgUrl);
      $('.yourImage').html(image);

      let answerOne;
        if(userQOneChoice === 1) {
          $('.answerOneResult').html(`<h2>Omg Wrong!!</h2> <img src="assets/shocked.gif">`);
        } else {
          $('.answerOneResult').html(`<h2>YOU'RE CORRECT!</h2> <img src="assets/b1.gif">`);
        };
      
      let answerTwo;
        if(userQTwoChoice === 1) {
          $('.answerTwoResult').html(`<h2>Omg Wrong!!</h2> <img src="assets/shocked2.gif">`);
        } else {
          $('.answerTwoResult').html(`<h2>YOU'RE CORRECT!</h2> <img src="assets/b2.gif">`);
        };

      let answerThree;
        if(userQThreeChoice === 1) {
          $('.answerThreeResult').html(`<h2>Omg Wrong!!</h2> <img src="assets/shocked.gif">`);
        } else {
          $('.answerThreeResult').html(`<h2>YOU'RE CORRECT!</h2> <img src="assets/c1.gif">`);
        };

      let answerFour;
        if(userQFourChoice === 1) {
          $('.answerFourResult').html(`<h2>Omg Wrong!!</h2> <img src="assets/shocked2.gif">`);
        } else {
          $('.answerFourResult').html(`<h2>YOU'RE CORRECT!</h2> <img src="assets/milkshake.gif">`);
        };

      let answerFive;
        if (userQFiveChoice === 1) {
          $('.answerFiveResult').html(`<h2>Omg Wrong!!</h2> <img src="assets/shocked.gif">`);
        } else {
          $('.answerFiveResult').html(`<h2>YOU'RE CORRECT!</h2> <img src="assets/mall.gif">`);
        }; 

      let answerSix;
        if (userQSixChoice === 1) {
          $('.answerSixResult').html(`<h2>Omg Wrong!!</h2> <img src="assets/shocked2.gif">`);
        } else {
          $('.answerSixResult').html(`<h2>YOU'RE CORRECT!</h2> <img src="assets/map.jpg">`);
        };

      let answerSeven;
        if (userQSevenChoice === 1) {
          $('.answerSevenResult').html(`<h2>Omg Wrong!!</h2> <img src="assets/shocked.gif">`);
        } else {
          $('.answerSevenResult').html(`<h2>YOU'RE CORRECT!</h2> <img src="assets/seth.gif">`);
        };

      let answerEight;
          if(userQEightChoice === 1) {
            $('.answerEightResult').html(`<h2>Omg Wrong!!</h2> <img src="assets/shocked2.gif">`);
          } else {
            $('.answerEightResult').html(`<h2>YOU'RE CORRECT!</h2> <img src="assets/eight.gif">`);
          };

    $('input[type=submit').click(function () {
      $('html, body').animate({
        scrollBottom: $('.yourQuote').offset().top
      }, 1000);
    });

  }); /* END of form submit! */

  $('.clearButton').on('click', function(){
    console.log("I AM FIRING")
    $('input[type=radio]').prop('checked', false);
    $('.yourQuote').empty();
    $('.yourImage').empty();
    $('.answerOneResult').empty();
    $('.answerTwoResult').empty();
    $('.answerThreeResult').empty();
    $('.answerFourResult').empty();
    $('.answerFiveResult').empty();
    $('.answerSixResult').empty();
    $('.answerSevenResult').empty();
    $('.answerEightResult').empty();
  });


}); /*End of document ready*/
