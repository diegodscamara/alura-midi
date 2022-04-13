function tocaSom(audioSelector) {
  const element = document.querySelector(audioSelector);

  if (element && element.localName === 'audio') {
    element.play();
  } else {
    console.log('Element not found');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio)
  };

  tecla.onkeydown = function (event) {
    if (event.code === 'Space' || event.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
};
