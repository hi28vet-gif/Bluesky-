const form = document.forms[0];

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Данные формы:', data);

    const name = (formData.get('name') || '').trim();
    const email = (formData.get('email') || '').trim();
    const message = (formData.get('message') || '').trim();

    if (name.length < 2) {
      Swal.fire({
        icon: 'error',
        title: 'Ошибка ввода',
        text: 'Введите имя — минимум 2 символа.'
      });
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      Swal.fire({
        icon: 'error',
        title: 'Некорректный email',
        text: 'Укажите действующий адрес электронной почты.'
      });
      return;
    }

    if (message.length < 5) {
      Swal.fire({
        icon: 'error',
        title: 'Слишком короткое сообщение',
        text: 'Напишите вопрос длиной не менее 5 символов.'
      });
      return;
    }


    Swal.fire({
      icon: 'success',
      title: 'Заявка отправлена',
      text: 'Спасибо, ' + name + '! Мы получили ваше сообщение.'
    });

    form.reset();
  });
}