const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.getAttribute('data-action');

    if (action === 'clear') {
      currentInput = '';
      display.innerText = '0';
    } else if (action === 'delete') {
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput || '0';
    } else if (action === '=') {
      try {
        // Thực thi phép tính
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
      } catch (e) {
        display.innerText = 'Lỗi';
        currentInput = '';
      }
    } else {
      // Thêm ký tự vào biểu thức
      currentInput += action;
      display.innerText = currentInput;
    }
  });
});