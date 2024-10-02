function formattedPhone() {
  // Отримуємо телефонний номер через prompt
  const phone = prompt("Type phone in format +80971234567, 80631234567, 0631234567 or +380971234567:");

  if (!phone) {
      alert("You dont write the phone number.");
      return;
  }

  // Видаляємо все, крім цифр і '+'
  const cleaned = phone.replace(/[^\d+]/g, '');

  let prefix = '';
  let number = '';

  // Визначаємо префікс та delete його
  if (cleaned.startsWith('+380')) {
      prefix = '+38';
      number = cleaned.slice(4);
  } else if (cleaned.startsWith('380')) {
      prefix = '+38';
      number = cleaned.slice(3);
  } else if (cleaned.startsWith('+80')) {
      prefix = '+8';
      number = cleaned.slice(3);
  } else if (cleaned.startsWith('80')) {
      prefix = '+8';
      number = cleaned.slice(2);
  } else if (cleaned.startsWith('0')) {
      prefix = '+38';
      number = cleaned.slice(1);
  } else {
      alert("Incorrect phone format");
      return;
  }

  // Після delete префіксу залишилося 9 цифр
  if (!/^\d{9}$/.test(number)) {
      alert("Incorrect phone format. Check the number of numbers.");
      return;
  }

  // Визначаємо код оператора та частини номера
  const operatorCode = '0' + number.slice(0, 2); // '0' + 2 цифри
  const firstPart = number.slice(2, 5); // 3 цифри
  const secondPart = number.slice(5, 7); // 2 цифри
  const thirdPart = number.slice(7, 9); // 2 цифри

  // Форматуємо номер згідно з вимогами
  const formatted = `${prefix} (${operatorCode}) ${firstPart}-${secondPart}-${thirdPart}`;

  // Виводимо відформатований номер через alert
  alert("Your formatted phone: " + formatted);
}

formattedPhone();