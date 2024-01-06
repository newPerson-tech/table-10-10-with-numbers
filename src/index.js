let table = document.querySelector('table');

function createTable() {
    for (let i = 1; i <= 10; i++) {
        let row = table.insertRow();
        for (let j = 1; j <= 10; j++) {
            let cell = row.insertCell();
            cell.innerHTML = (i - 1) * 10 + j;
        }
    }
}

createTable();


