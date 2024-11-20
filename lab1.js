const books = [
    { title: 'Біблія', author: '-', genre: 'Релігійні', pages: 700, borrowedDate: new Date('2024-11-19') },
    { title: 'Тіні забутих предків', author: 'Михайло Коцюбинський', genre: 'Новела', pages: 150, borrowedDate: new Date('2024-10-25') },
    { title: 'Коран', author: '-', genre: 'Релігійні', pages: 400, borrowedDate: new Date('2024-10-20') }
];

function calculateDaysLeft(borrowedDate) {
    const returnDate = new Date(borrowedDate);
    returnDate.setDate(returnDate.getDate() + 10);
    return Math.ceil((returnDate - new Date()) / (1000 * 60 * 60 * 24));
}

function generateBooksTable() {
    const tbody = document.querySelector('#books-table tbody');
    tbody.innerHTML = books.map(book => {
        const daysLeft = calculateDaysLeft(book.borrowedDate);
        return `
            <tr style="background-color: ${daysLeft < 0 ? 'lightcoral' : 'white'};">
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>${book.pages}</td>
                <td>${daysLeft >= 0 ? daysLeft : 'Прострочено'}</td>
            </tr>`;
    }).join('');
}
generateBooksTable();
