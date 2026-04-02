const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll('.prices');
  let total = 0;

  priceElements.forEach(element => {
    const priceValue = parseFloat(element.textContent);
    if (!isNaN(priceValue)) {
      total += priceValue;
    }
  });

  const table = document.querySelector("table");
  let ansRow = document.getElementById('ans-row');

  if (!ansRow) {
    ansRow = document.createElement('tr');
    ansRow.id = 'ans-row';
    
    const itemCell = document.createElement('td');
    itemCell.textContent = 'Total';
    
    const ansCell = document.createElement('td');
    ansCell.id = 'ans';
    
    ansRow.appendChild(itemCell);
    ansRow.appendChild(ansCell);
    table.appendChild(ansRow);
  }

  document.getElementById('ans').textContent = total;
};

getSumBtn.addEventListener("click", getSum);