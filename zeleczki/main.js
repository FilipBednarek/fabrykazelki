const BtnZamow = document.getElementById('BtnZamow');
const numKszt = document.getElementById('numKszt');
const BtnColor = document.getElementById('BtnColor');
const zamowienie = document.getElementById('zamowienie');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');

BtnZamow.addEventListener('click', function (fun) {
  fun.preventDefault();

  zamowienie.innerHTML = 'Zamówiłeś żelka: ';
  if (numKszt.value == '1') {
    zamowienie.innerHTML += 'miś';
  } else if (numKszt.value == '2') {
    zamowienie.innerHTML += 'żabka';
  } else if (numKszt.value == '3') {
    zamowienie.innerHTML += 'serce';
  } else {
    zamowienie.innerHTML += 'inny kształt';
  }

  BtnColor.style.backgroundColor =
    'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
});
