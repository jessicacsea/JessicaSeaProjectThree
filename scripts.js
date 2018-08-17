const questions = [
  { qOneA: 1, 
    qOneB: 2, 
    qOneC: 3, 
    qTwoA: 3,
    qTwoB: 2,
    qTwoC: 1,
    qThreeA: 1,
    qThreeB: 3,
    qThreeC: 2,
    qFourA: 2,
    qFourB: 3,
    qFourC: 1,
    qFiveA: 3,
    qFiveB: 2,
    qFiveC: 1,
  }
];
// quotes.quoteA.quote1.saying;
const quotes = {
  quoteA: [
    quote1 = {
      saying: `"That is so fetch!"`,
      imgUrl: 'assets/a1.gif'
    },
    quote2 = {
      saying: `"I'm not a regular mom, I'm a cool mom.”`,
      imgUrl: 'assets/a2.gif'
    },
    quote3 = {
      saying: `"Get in loser, we're going shopping."`,
      imgUrl: 'assets/a3.gif'
    },
  ],
  quoteB: [
    quote1 = {
      saying: `"Four for you Glen Coco, you go Glen Coco! And none for Gretchen Weiners. Bye."`,
      imgUrl: 'assets/b1.gif',
    },
    quote2 = {
      saying: `“Don’t have sex. Because you will get pregnant, and die."`,
      imgUrl: 'assets/b2.gif',
    },
    quote3 = {
      saying: `“But you’re, like, really pretty… So you agree? You think you’re really pretty?"`,
      imgUrl: 'assets/b3.gif',
    },
  ],
  quoteC: [
    quote1 = {
      saying: `“Gretchen, I’m sorry I laughed at you that time you got diarrhea at Barnes & Noble. And I’m sorry for telling everyone about it. And I’m sorry for repeating it now.”`,
      imgUrl: 'assets/c1.gif',
    },
    quote2 = {
      saying: `"I saw Cady Heron wearing army pants and flip flops, so I bought army pants and flip flops."`,
      imgUrl: 'assets/c2.gif',
    },
    quote3 = {
      saying: `“I'm sorry that people are so jealous of me... but I can't help it that I'm so popular.”`,
      imgUrl: 'assets/c3.gif',
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
    
    console.log(userQOneChoice, userQTwoChoice, userQThreeChoice, userQFourChoice, userQFiveChoice);
    
    let userChoiceTotal = userQOneChoice + userQTwoChoice + userQThreeChoice + userQFourChoice + userQFiveChoice;
    
    console.log(userChoiceTotal);
      
    let result;
      if(userChoiceTotal <= 7) {
        result = quotes.quoteA;
        console.log(result);
      } else if (userChoiceTotal >=8 && userChoiceTotal <=12) {
        result = quotes.quoteB;
          console.log(result);
        } else {
          (userChoiceTotal >= 15);
          result = quotes.quoteC;
          console.log(result);
        }
      
      let randomQuote = result[Math.floor(Math.random()*result.length)];

      console.log(randomQuote.saying, randomQuote.imgUrl);

      $('.yourQuote').html(`<h2 class="quoteAnswer">${randomQuote.saying}</h2>`);
      const image = $('<img>').attr('src', randomQuote.imgUrl);
      $('.yourImage').html(image);

  }); /* END of form submit! */

  $('.clearButton').on('click', function(){
    console.log("I AM FIRING")
    $('input[type=radio]').prop('checked', false);
    $('.yourQuote').empty();
    $('.yourImage').empty();
  });
}); /*End of document ready*/
