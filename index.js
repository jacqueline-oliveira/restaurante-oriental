document.body.onload = contagem;

function contagem () {
    let contador = document.createElement("div")
    let oferta = document.createElement("div")
    contador.style.textAlign = "center"
    contador.style.position = "fixed";
    contador.style.fontSize = "50px";
    contador.style.right = "140px";
    contador.style.top = "338px";
    contador.style.fontFamily = "Hanken Grotesk"
    contador.style.textShadow = "1px 1px 1px white"
    contador.style.color = "rgb(70, 130, 180)"
    oferta.style.color = "rgb(70, 130, 180)"
    oferta.style.textShadow = "2px 2px 2px white"
    oferta.style.borderTop = "2px solid rgb(70, 130, 180)"
    oferta.style.textAlign = "center";
    oferta.style.position = "fixed";
    oferta.style.fontSize = "18px";
    oferta.style.top = "300px"
    oferta.style.right = "100px";
    oferta.style.fontFamily = "Hanken Grotesk"

    let meiaNoite = new Date();
    meiaNoite.setHours(24, 0, 0, 0);

    document.body.appendChild(contador)
    document.body.appendChild(oferta)
    setInterval(function() {
        let tempo = new Date();
        let restante = meiaNoite.getTime() - tempo.getTime();
        let hora = Math.floor(restante / (1000 * 60 * 60));
        let minuto = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
        let segundo = Math.floor((restante % (1000 * 60)) / 1000);
        contador.innerText = `${hora.toString().padStart(2, "0")}:${minuto.toString().padStart(2, "0")}:${segundo.toString().padStart(2, "0")}`;
        oferta.innerText = `As ofertas terminam em: ${hora.toString().padStart(2, "0")}:${minuto.toString().padStart(2, "0")}:${segundo.toString().padStart(2, "0")}`;
    }, 1000);
}
