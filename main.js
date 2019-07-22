var input = prompt("Введите JavaScript код", "");
var jsCode = '"use strict"; ' + input;

function runUserCode() {
  var i = eval(jsCode);
  console.log(i);
};

try {
  runUserCode();
} catch (err) {
  console.error('В вашем коде семантическая ошибка! '+ err.name + ' ' + err.message);
};
