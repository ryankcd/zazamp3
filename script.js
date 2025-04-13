var convertBtn = document.querySelector(".convert-button");
var URLinput = document.querySelector(".URL-input");

convertBtn.addEventListener("click", function() {
    var url = URLinput.value;
    if (verificarURL(url)) {
        sendURL(url);
    } else {
        alert("Por favor, insira uma URL válida!");
    }
})

function verificarURL(url) {

    var regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
}

function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}