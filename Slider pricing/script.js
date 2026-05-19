const slider = document.getElementById("slider");
const tooltip = document.querySelector(".value-card__slider--tooltip");
const price = parseFloat(document.querySelector(".value-card__price").textContent);
const priceContent = document.querySelector(".value-card__price");
const basePrice = parseFloat(priceContent.textContent);
const maxBuyers = 20;
const maxDiscount = 30;
const salePercentage = document.querySelector('.value-card__saving-value');

function updateTooltip() {
  const percent = (slider.value - slider.min) / (slider.max - slider.min);
  const sliderWidth = slider.offsetWidth;
  const thumbWidth = 20; 
  const buyers = Number(slider.value);
  const discount = (buyers / maxBuyers) * maxDiscount;
  
  const offset = percent * (sliderWidth - thumbWidth) + thumbWidth / 2;
  tooltip.style.left = `calc(${offset}px + 1px)`;
  tooltip.textContent = slider.value;
  
  let newPrice;
  
  // tính giá mới (GIẢM giá)
  if(Number(slider.value) === 1){
    newPrice = 99.99;
  } else {
    newPrice = basePrice * (1 - discount / 100);
  }
  priceContent.textContent = newPrice.toFixed(2);
  salePercentage.textContent = discount;
}

slider.addEventListener("input", updateTooltip);
updateTooltip();