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

  let ansDisplay = document.getElementById('ans');
  
  if (!ansDisplay) {
    ansDisplay = document.createElement('div');
    ansDisplay.id = 'ans';
    document.body.appendChild(ansDisplay);
  }

  ansDisplay.textContent = total;
};

getSumBtn.addEventListener("click", getSum);