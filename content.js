let div = $('div');
let pictures = ['https://www.bleedingcool.com/wp-content/uploads/2017/05/SouthpawCena-600x338.jpg',
 'https://media3.giphy.com/media/3oKHWmWYMWKLqihabm/giphy.gif',
  'https://media0.giphy.com/media/xUA7baCMQfFkvG5BdK/giphy.gif',
  'https://i.imgur.com/htHR7gD.jpg',
  'http://i3.kym-cdn.com/photos/images/newsfeed/000/920/778/f1b.jpg',
   'http://weknowmemes.com/wp-content/uploads/2013/03/what-do-you-mean-that-wasnt-president-obama.jpg',
    'http://ww3.foundshit.com/pictures/design/css-cup.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLWpTAWQZcB8QdaOdIacXExki3Rbzw-9-xySC537VcY6sb2Vx',
    'https://img.memecdn.com/recursion_o_170485.jpg', ]
let map = { 9: false, 77: false, 78: false, 90: false, 16: false}; // tab + m + z

$(document).on('keydown', (e) => {
  if (e.keyCode in map) {
      map[e.keyCode] = true;
      if (map[9] && map[77]) {
          memeGenerator();
        }
    }
}).keyup((e) => {
  if (e.keyCode in map) {
      map[e.keyCode] = false;
    }
});

$(document).on('keydown', (e) => {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[9] && map[90]) {
            memeRemover();
        }
    }
}).keyup((e) => {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});

$(document).on('keydown', (e) => {
  if (e.keyCode in map) {
    map[e.keyCode] = true;
    if (map[9] && map[78]) {
      memeOverload();
    }
  }
}).keyup((e) => {
  if (e.keyCode in map) {
    map[e.keyCode] = false;
  }
});

function memeOverload () {
    $('body').css({"background-image" :`url(${generateRandom(pictures)})`,
    "background-repeat" : "no-repeat",
    "background-attachment": "fixed",
    "margin" : "auto",
    "z-index" : "100"})

}


function memeGenerator () {
    let currentDiv = generateRandom(div)
    // .style.backgroundImage = `url(${generateRandom(pictures)})`
    currentDiv.style.backgroundImage = `url(${generateRandom(pictures)})`;
}

function memeRemover () {
  $('div').css("background-image", '')
  $('body').css("background-image", '')
}

function generateRandom (array) {
    return array[Math.floor(Math.random() * array.length)]
}
