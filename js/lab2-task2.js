document.getElementById('task2Btn').addEventListener('click', () => {
    const table = document.getElementById('numberTable');
    const rows = table.rows;
    const cols = rows[0].cells.length;

    if (rows.length > 4) table.deleteRow(-1);

    const sumRow = table.insertRow();
    for (let j = 0; j < cols; j++) {
        let sum = 0;
        for (let i = 0; i < 4; i++) {
            sum += parseInt(rows[i].cells[j].textContent);
        }
        const cell = sumRow.insertCell();
        cell.textContent = sum;
        cell.style.cssText = 'background:#27ae60; color:white; font-weight:bold;';
    }
});