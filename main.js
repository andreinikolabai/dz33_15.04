const form = document.querySelector('#registration-form');
const tableBody = document.querySelector('#data-table tbody');
const saveBtn = document.querySelector('#save-btn');

saveBtn.addEventListener('click', () => {
    const firstName = form.querySelector('#first-name').value;
    const lastName = form.querySelector('#last-name').value;
    const birthday = form.querySelector('#birthday').value;
    const gender = form.querySelector('input[name="gender"]:checked').value;
    const city = form.querySelector('#city').value;
    const address = form.querySelector('#address').value;
    const languages = form.querySelectorAll('input[name="languages[]"]:checked');
    const languagesArr = [];
    languages.forEach(language => {
        languagesArr.push(language.value);
    });

// створюємо новий рядок в таблиці з отриманими даними
    const newRow = document.createElement('tr');
    newRow.innerHTML = <td>${firstName}</td> <td>${lastName}</td> <td>${birthday}</td> <td>${gender}</td> <td>${city}</td> <td>${address}</td> <td>${languagesArr.join(', ')}</td> ;

// додаємо новий рядок в таблицю
    tableBody.appendChild(newRow);

// очищуємо форму
    form.reset();
});