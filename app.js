var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationUrl(text){
    return serverUrl + "?text=" + text;

}


function clickHandler(){

    var inputText = textInput.value;
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })

}

btnTranslate.addEventListener("click",clickHandler)