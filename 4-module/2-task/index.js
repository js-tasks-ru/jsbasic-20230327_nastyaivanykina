function makeDiagonalRed(table) {
  let rows = table.rows.length;
  for (let i = 0; i < rows; i++) {
    let cell = table.rows[i].cells[i];
    cell.style.backgroundColor = 'red';
  }
}
