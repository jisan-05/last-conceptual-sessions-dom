const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", function (event) {
    event.preventDefault();
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;

    const addtotalExpense = document.getElementById("totalExpenses");
    addtotalExpense.innerText = totalExpense.toFixed(2);

    const addbalance = document.getElementById("newBalance");
    addbalance.innerText = balance.toFixed(2);

    document.getElementById('result-div').classList.remove('hidden')

});
