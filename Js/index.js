const inPut = document.querySelector(`#input`),
      btn = document.querySelector(`#result`),
      outPut = document.querySelector(`#output`);

btn.addEventListener(`click`, function() {
  var value = inPut.value;
  var letter = value.length;
  var words = value.split(` `).length;
  outPut.innerHTML = `To Words : ${words} To Letters ${letter}`
});