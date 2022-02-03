let ch1;
let ch2;

window.onload = function () {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'lightblue';
};

function refresh() {
  ch1 = document.getElementById('ch1').value;
  ch2 = document.getElementById('ch2').value;
  trame = document.getElementById('trame').value;
}

function nbCarCh1() {
  refresh();
  document.getElementById('nbCarCh1').value = ch1.length;
}

function nbCarCh2() {
  refresh();
  document.getElementById('nbCarCh2').value = ch2.length;
}

function supBlancCh2() {
  refresh();
  document.getElementById('supBlancCh2').value = ch2.trim();
}

function minusCh2() {
  refresh();
  document.getElementById('minusCh2').value = ch2.toLowerCase();
}

function premLetCh1() {
  refresh();
  document.getElementById('premLetCh1').value = ch1[0];
}

function ch1SansPremLet() {
  refresh();
  let result = '';
  for (let i = 1; i < ch1.length; i++) {
    result += ch1[i];
  }
  document.getElementById('ch1SansPremLet').value = result;
}

function ch2SansPremLet() {
  refresh();
  let result = '';
  for (let i = 1; i < ch2.length; i++) {
    result += ch2[i];
  }
  document.getElementById('ch2SansPremLet').value = result;
}

function premLetMajCh1() {
  refresh();
  let result = '';
  result += ch1[0].toUpperCase();
  for (let i = 1; i < ch1.length; i++) {
    result += ch1[i];
  }
  document.getElementById('premLetMajCh1').value = result;
}

function premLetMajCh2() {
  refresh();
  let c = ch2.trim();
  let result = '';
  for (let i = 0; i < c.length; i++) {
    if (i == 0) {
      result += c[0].toUpperCase();
    } else {
      result += c[i].toLowerCase();
    }
  }
  document.getElementById('premLetMajCh2').value = result;
}

function prenomCompo() {
  refresh();
  const mots = ch1.split(' ');
  const res = mots.map((chaine) => {
    let result = '';
    for (let i = 0; i < chaine.length; i++) {
      if (i == 0) {
        result += chaine[0].toUpperCase();
      } else {
        result += chaine[i].toLowerCase();
      }
    }
    return result;
  });

  document.getElementById('prenomCompo').value = res.join('-');
}

function nbInfoTrame() {
  refresh();
  const datas = trame.split(', ');
  document.getElementById('nbInfoTrame').value = datas.length;
}

function provTrame() {
  refresh();
  let result = '';
  const data = trame.split(', ')[0];
  const type = data[1] + data[2];
  if (type === 'GA') {
    result = 'Galiléo';
  } else if (type === 'GP') {
    result = 'GPS';
  } else {
    result = 'Non valide !';
  }
  document.getElementById('provTrame').value = result;
}

function heureRecep() {
  refresh();
  const data = trame.split(', ')[1];
  const hours = data[0] + data[1] + ':' + data[2] + data[3] + ':' + data[4] + data[5];
  document.getElementById('heureRecep').value = hours;
}

function latitude() {
  refresh();
  const data = trame.split(', ')[2].split('.');

  const degMinutes = data[0];
  const degSecondes = data[1];

  const degToMinutes = (value) => {
    return (value * 60) / 10000;
  };

  degToMinutes(degSecondes);

  if (degToMinutes(degSecondes) > 59) {
    document.getElementById('latitude').value = 'format invalide';
  } else {
    document.getElementById('latitude').value =
      String(degMinutes)[0] +
      String(degMinutes)[1] +
      ':' +
      String(degMinutes)[2] +
      String(degMinutes)[3] +
      ':' +
      Math.round(degToMinutes(degSecondes));
  }
}
