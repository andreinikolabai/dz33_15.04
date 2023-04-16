const form = document.getElementById("registration-form");
const table = document.getElementById("table");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = form.elements["first-name"].value;
    const lastName = form.elements["last-name"].value;
    const birthdate = form.elements["birthdate"].value;
    const gender = form.elements["gender"].value;
    const city = form.elements["city"].value;
    const address = form.elements["address"].value;
    const languages = [];
    const languageCheckboxes = form.elements["language"];
    for (let i = 0; i < languageCheckboxes.length; i++) {
        if (languageCheckboxes[i].checked) {
            languages.push(languageCheckboxes[i].value);
        }
    }
    table.innerHTML = `
    <table>
      <tr>
        <th>Ім'я</th>
        <th>Прізвище</th>
        <th>Дата народження</th>
        <th>Стать</th>
        <th>Місто</th>
        <th>Адреса</th>
        <th>Мови, якими володіє</th>
        </tr>
        <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${birthdate}</td>
        <td>${gender}</td>
        <td>${city}</td>
        <td>${address}</td>
        <td>${languages.join(", ")}</td>
        </tr>
    </table>`;
});
