$.getJSON('/assets/json/text.json', readData);

// DEFAULT LANGUAGE
let selectedLanguage = 'sv';

function readData(objects) {
  // NAV
  let navLinks = objects.links[selectedLanguage];
  let ulNav = $('<ul/>');
  for (let link of navLinks) {
    let li = $('<li/>');
    li.append('<a href="' + link['url'] + '">' + link['title'] + '</a>');
    ulNav.append(li);
  }
  $('.navigation').append(ulNav);

  // HOME
  let homeHeading = '<h2>' + objects.home[selectedLanguage].heading + '</h2>';
  $('.home-heading').append(homeHeading);
  let homeLinks = objects.home[selectedLanguage].links;
  let ulHomeLinks = $('<ul/>');
  for (let link of homeLinks) {
    let li = $('<li/>');
    li.append('<a href="' + link['url'] + '" target="_blank"><h3>' + link['title'] + '</h3></a>');
    ulHomeLinks.append(li);
  }
  $('.breakout-links').append(ulHomeLinks);

  // HISTORY
  let historyHeading = '<h2 class="mb-5">' + objects.history[selectedLanguage].heading + '</h2>';
  $('.history-text').append(historyHeading);
  let historyParagraphs = objects.history[selectedLanguage].paragraphs;
  for (let paragraph of historyParagraphs) {
    let p = $('<p class="my-4"/>');
    p.append(paragraph);
    $('.history-text').append(p);
  }
  
  /* $('.history').append(historyHeading + historyParagraphs); */

  // PLAY
  let playHeading = '<h2>' + objects.play[selectedLanguage].heading + '</h2>';
  $('.play').append(playHeading);

  // HIGH-SCORE
  let highScoreHeading = '<h2>' + objects['high-score'][selectedLanguage].heading + '</h2>';
  $('.high-score').append(highScoreHeading);
}

// SELECT LANGUAGE
$('.choose-sv').click(function() {
  $('.navigation').empty();
  $('.home-heading').empty();
  $('.breakout-links').empty();
  $('.history-text').empty();
  $('.play').empty();
  $('.high-score').empty();
  selectedLanguage = 'sv';
  $.getJSON('/assets/json/text.json', readData);
})
$('.choose-en').click(function() {
  $('.navigation').empty();
  $('.home-heading').empty();
  $('.breakout-links').empty();
  $('.history-text').empty();
  $('.play').empty();
  $('.high-score').empty();
  selectedLanguage = 'en';
  $.getJSON('/assets/json/text.json', readData);
})