const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 const priceElements = document.querySelectorAll('.price');
  
  let total = 0;

 priceElements.forEach(element => {
    const priceValue = parseFloat(element.textContent);
    
   if (!isNaN(priceValue)) {
      total += priceValue;
    }
  });

 let totalDisplay = document.getElementById('total-display');
  
  if (!totalDisplay) {
    totalDisplay = document.createElement('div');
    totalDisplay.id = 'total-display';
    document.body.appendChild(totalDisplay);
  }

  totalDisplay.textContent = `Total Price: $${total.toFixed(2)}`;
};

getSumBtn.addEventListener("click", getSum);