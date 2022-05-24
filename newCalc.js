let a = '';
let b = '';
let sign = '';
let temp = 0
let finish = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const actions = ['/', '*', '+', '-', '%']

const out = document.querySelector('.num-display p')

function clearAll() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

function negativeNumber() {

  if (a !== '' && b === '') {
    a = '-' + a;
    out.textContent = a;
    return console.log(a);
  } else if (a !== '' && b !== '') {
    b = '-' + b;
    return out.textContent = b, console.log(b);
  }
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.plus-minus').onclick = negativeNumber;

document.querySelector('.buttons').onclick = (event) => {

  if (!event.target.classList.contains('item')) return;

  if (event.target.classList.contains('ac')) return;

  out.textContent = '';

  const key = event.target.textContent;

  if (finish) {
    finish = false;
  }
  //проверка кликнутого числа и его заполнение табло 
  if (digits.includes(key)) {
    // заполнение нового числа после расчета
    if (a === Number(a) && b === '' && sign === '') {
      a = '';
      a += key;
      out.textContent = a
    }
    // заполнение первого числа
    else if (b === '' && sign === '') {
      a += key;
      out.textContent = a
      console.log(a, b, sign);
    }
    // если удалить ничего не измениться, калькулятор работает (хз почему - разобраться!)
    else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
      console.log(a, b, sign, finish);
    }
    // заполнения второго числа
    else {
      b += key
      out.textContent = b;
      console.log(a, b, sign);
    }
  }
  // проверка кликнутого знака в калькуляторе
  if (actions.includes(key)) {
    // проверяем, чтобы знак не вносился когда ничего не было введено
    if (a === '' && b === '') {
      sign = '';
      out.textContent = 0;
      console.log(a, b, sign)
    } else {
      sign = key;
      out.textContent = sign
      console.log(a, b, sign)
    }
  }
  // вычисление при нажатии =
  if (key === '=') {
    switch (sign) {
      case '+':
        a = (+a) + (+b);
        break;
      case '-':
        a = a - b;
        break;
      case '*':
        a = a * b;
        break;
      case '/':
        a = a / b;
        break;
      // число в степени 2
      case '':
        a = +a + +a
        break;
      //процент от второго числа (пример: 12 это 40 процентов от числа 30)
      case '%':
        a = +a / +b * 100;
        console.log(a, b, sign)
        break;
    }
    //после нажатия на = обнуляем b и sign, чтобы потом их снова заполнять новыми числами + вывод результата на дисплей из переменной a
    finish = true;
    out.textContent = a;
    b = '';
    sign = '';
    console.log(a, b, sign);
  }
}