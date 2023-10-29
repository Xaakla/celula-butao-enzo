const audios= new Map()
audios.set('1','efeito-sonoro-cutuco-correndo.mp3')
audios.set('2','among.mp3')
audios.set('3','paysandu.mp3')
audios.set('4','iiihhhaaa.mp3')
audios.set('5','que-isso-meu-filho-calma_bAsYtD0.mp3')
audios.set('6','uepa-mp3cut_TjGioyM.mp3')
audios.set('7','whatsapp-audio-2017-12-19-at-15.mp3')
audios.set('8','xaropinho-rapaaaaz.mp3')
audios.set('9','y2mate-mp3cut_PBbiQap.mp3')



function handleButton(buttonCharacter) {
    const audio= new Audio(audios.get(buttonCharacter))
    audio.currentTime = 0
    audio.play()

    const input = document.querySelector('#user-input')
    if (buttonCharacter === '1') {
        buttonCharacter = ' '
    }
    if (buttonCharacter === '#') {
        handleTranslate(input.value)
    }
    input.value += buttonCharacter
}

function handleTranslate(e) {
    console.log(e)
    const result = document.querySelector('#result');

    const codes = e.split(' ')

    codes.forEach(code => {
        result.innerHTML += translateCode(code)
    })
}

function translateCode(code) {
    const mapCode = new Map();

    mapCode.set("2", "A");
    mapCode.set("22", "B");
    mapCode.set("222", "C");

    mapCode.set("3", "D");
    mapCode.set("33", "E");
    mapCode.set("333", "F");

    mapCode.set("4", "G");
    mapCode.set("44", "H");
    mapCode.set("444", "I");

    mapCode.set("5", "J");
    mapCode.set("55", "K");
    mapCode.set("555", "L");

    mapCode.set("6", "M");
    mapCode.set("66", "N");
    mapCode.set("666", "O");

    mapCode.set("7", "P");
    mapCode.set("77", "Q");
    mapCode.set("777", "R");
    mapCode.set("7777", "S");

    mapCode.set("8", "T");
    mapCode.set("88", "U");
    mapCode.set("888", "V");

    mapCode.set("9", "W");
    mapCode.set("99", "X");
    mapCode.set("999", "Y");
    mapCode.set("9999", "Z");

    mapCode.set("0", " ");

    return mapCode.get(code)
}
