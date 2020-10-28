const button = document.getElementById('button');
const audioElement = document.getElementById('audio');


function test(){
    VoiceRSS.speech({
        key: '065d884ddbf541c9a706704572d2c26b',
        src: 'Hello, world!',
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

test();