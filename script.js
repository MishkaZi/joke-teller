const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// function test(){
//     VoiceRSS.speech({
//         key: '065d884ddbf541c9a706704572d2c26b',
//         src: 'Hello, world!',
//         hl: 'en-us',
//         v: 'Linda',
//         r: 0,
//         c: 'mp3',
//         f: '44khz_16bit_stereo',
//         ssml: false
//     });
// }
// test();

async function getJokes() {
  const apiUrl =
    'https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Dark?blacklistFlags=nsfw,religious,political,racist,sexist';
  const response = await fetch(apiUrl);
  const data = await response.json();
  if (data.setup) {
    joke = `${data.setup}...${data.delivery}`;
  } else {
    joke = data.joke;
  }

  try {
  } catch (error) {
    console.log('Woops' + error);
  }
}
