const btn = document.querySelector(".btn");
const bill = document.querySelector(".bill-amount");
const tip = document.querySelector(".Tip-percentage");
const total = document.querySelector(".total");
function calculateBill() {
  const billValue = Number(bill.value);
  const tipValue = Number(tip.value);
  const totalValue = billValue * (1 + tipValue / 100);
  total.textContent = totalValue;
}
btn.addEventListener("click", calculateBill);
