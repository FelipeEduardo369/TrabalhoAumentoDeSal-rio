function calculateAdjustment() {
  const salaryInput = document.getElementById('salary');
  const salary = parseFloat(salaryInput.value);

  if (isNaN(salary) || salary <= 0) {
    alert('Por favor, insira um valor válido para o salário.');
    return;
  }

  let percent = 0;

  if (salary <= 280) {
    percent = 20;
  } else if (salary > 280 && salary <= 700) {
    percent = 15;
  } else if (salary > 700 && salary <= 1500) {
    percent = 10;
  } else {
    percent = 5;
  }

  const increase = salary * (percent / 100);
  const newSalaryWithoutDiscount = salary + increase;
  const discount = newSalaryWithoutDiscount * 0.038; // 3,8% sobre o total
  const newSalary = newSalaryWithoutDiscount - discount;

  // Atualiza os resultados na página
  document.getElementById('old-salary').textContent = salary.toFixed(2);
  document.getElementById('percent').textContent = percent;
  document.getElementById('increase').textContent = increase.toFixed(2);
  document.getElementById('real-increase').textContent = (increase - discount).toFixed(2);
  document.getElementById('new-salary').textContent = newSalary.toFixed(2);

  document.getElementById('result').classList.remove('hidden');
}
