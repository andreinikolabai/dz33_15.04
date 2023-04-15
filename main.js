const form = document.querySelector('form');
const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.appendChild(tbody);

form.addEventListener('submit', function(event) {
    event.preventDefault(); // запобігаємо перезавантаженню сторінки

    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const birthday = form.elements.birthday.value;
    const gender = form.elements.gender.value;
    const city = form.elements.city.value;
    const address = form.elements.address.value;
    const language = [];

    const languageInputs = form.querySelectorAll('input[name="language"]:checked');
    languageInputs.forEach(function(input) {
        language.push(input.value);
    });

    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = firstName;
    const cell2 = row.insertCell();
    cell2.textContent = lastName;
    const cell3 = row.insertCell();
    cell3.textContent = birthday;
    const cell4 = row.insertCell();
    cell4.textContent = gender;
    const cell5 = row.insertCell();
    cell5.textContent = city;
    const cell6 = row.insertCell();
    cell6.textContent = address;
    const cell7 = row.insertCell();
    cell7.textContent = language.join(', ');

    form.reset();
    document.body.appendChild(table);
});