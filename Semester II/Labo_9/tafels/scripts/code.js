
const clearChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

const createTable = (number) => {
    const table = document.createElement('div');
    table.className = 'table';

    const header = document.createElement('div');
    header.className = 'tableHeader';
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ":" +
                 now.getMinutes().toString().padStart(2, '0') + ":" +
                 now.getSeconds().toString().padStart(2, '0');
    header.textContent = `Tafel van ${number} (${time})`;
    table.appendChild(header);

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('div');
        row.className = 'tableRow';
        row.textContent = `${number} x ${i} = ${number * i}`;
        table.appendChild(row);
    }

    return table;
};

const generateTable = () => {
    const input = document.getElementById('numberInput');
    const value = input.value.trim();

    if (isNaN(value) || value === '') {
        alert('Gelieve een geldig getal in te geven.');
        return;
    }

    const output = document.getElementById('outputSection');
    clearChildren(output);

    const number = parseInt(value);
    const table = createTable(number);
    output.appendChild(table);

    input.value = '';
    input.focus();
};

window.addEventListener('load', () => {
    document.getElementById('generateButton').addEventListener('click', generateTable);
    document.getElementById('numberLabel').addEventListener('click', () => {
        document.getElementById('numberInput').focus();
    });
});
