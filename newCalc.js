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
  } else if (a !== '' && b !== '') {
    b = '-' + b;
    return out.textContent = b;
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
  
  if (digits.includes(key)) {
    if (a === Number(a) && b === '' && sign === '') {
      a = '';
      a += key;
      out.textContent = a
    } else if (b === '' && sign === '') {
      a += key;
      out.textContent = a
    } else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
  }

  if (actions.includes(key)) {
    if (a === '' && b === '') {
      sign = '';
      out.textContent = 0;
    } else {
      sign = key;
      out.textContent = sign;
    }
  }
  
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
      case '':
        a = +a + +a
        break;
      case '%':
        a = +a / +b * 100;
        break;
    }
    finish = true;
    out.textContent = a;
    b = '';
    sign = '';
  }
}
