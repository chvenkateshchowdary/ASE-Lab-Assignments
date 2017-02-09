function convertToSpeech(){
    var text=document.getElementById("text").value;
    var textToSpeechUrl='https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=f62a9fa9-87c0-4e07-8d24-b558003243e4&password=5ePJHXTGIIcK&text='+text;


    document.getElementById("playAudio").innerHTML= "<video controls='' autoplay='' name='media'><source src='"+textToSpeechUrl+"' type='audio/ogg'></video>";
}