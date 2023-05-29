function highlight(table) {
  let rows = table.tBodies[0].rows;
  for (let row of rows) {
    let statusCell = row.cells[3];
    let genderCell = row.cells[2];
    let ageCell = row.cells[1];
    let available = statusCell.getAttribute('data-available');
    switch (available) {
    case 'true':
      row.classList.add('available');
      break;
    case 'false':
      row.classList.add('unavailable');
      break;
    default:
      if (!statusCell.hasAttribute('data-available')) {
        row.hidden = true;
      }
    }
    let gender = genderCell.innerText;
    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }
    let age = Number(ageCell.innerText);
    if (age < 18) {
      row.setAttribute('style', 'text-decoration: line-through');
    }
  }
}
