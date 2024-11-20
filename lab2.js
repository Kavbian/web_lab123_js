document.getElementById('convert-button').addEventListener('click', () => {
    const countries = Array.from(document.querySelectorAll('#countries-list li')).map(li => li.textContent);
    document.getElementById('result').textContent = countries.join(', ');
});

document.getElementById('numbers-table').addEventListener('click', (e) => {
    if (e.target.tagName === 'TD') {
        const cell = e.target;
        const value = parseFloat(cell.textContent);
        if (value < 0) {
            const input = document.createElement('input');
            input.type = 'number';
            input.value = value;
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Зберегти';
            cell.innerHTML = '';
            cell.append(input, saveButton);

            saveButton.addEventListener('click', () => {
                const newValue = parseFloat(input.value);
                if (newValue >= 0) cell.textContent = newValue;
                else alert('Значення має бути додатним!');
            });
        }
    }
});
