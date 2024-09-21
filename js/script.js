// Getting all the value

//add event listener for Calculate Button
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

    document.getElementById("result-div").classList.remove("hidden");
});

//add event listener for Saving Button
document.getElementById("saving-btn").addEventListener("click", function () {
    const savingValue = parseFloat(
        document.getElementById("saving-input").value
    );
    console.log(savingValue);
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;

    const savingAmount = (savingValue * balance) / 100;
    console.log(savingAmount);

    const remainingBalance = balance - savingAmount;
    document.getElementById("remainingBalance").innerText =
        remainingBalance.toFixed(2);

    document.getElementById("savingAmount").innerText = savingAmount.toFixed(2);
});
