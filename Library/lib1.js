document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('bookForm');
    var table = document.getElementById('booksTable');
    var submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function () {
        var title = document.getElementById('title').value;
        var author = document.getElementById('author').value;
        var year = document.getElementById('year').value;
        var publisher = document.getElementById('publisher').value;
        var category = document.getElementById('category').value;
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${year}</td>
            <td>${publisher}</td>
            <td>${category}</td>
        `;
        table.appendChild(newRow);
        form.reset();
    });
});