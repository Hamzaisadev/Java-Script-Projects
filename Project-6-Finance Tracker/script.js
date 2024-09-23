// LETS SELECT ALL THE INPUT FIELDS

var getTotalAmount = document.querySelector("#total-amount")
var getProductTitle = document.querySelector("#Product-title")
var getUserAmount = document.querySelector("#user-amount")

// LETS GET ALL THE BUTTONS

var budgetButton = document.querySelector("#budget-add-btn")
var checkButton = document.querySelector("#check-amount")



// LETS GET ALL THE SPANSSSSSSS


var getitem = document.querySelector("#items") 
var getExpense = document.querySelector("#expanditure-value") 
var getBalance = document.querySelector("#balance-amount") 



// LETS FET ALL THE ERRORSSSSS

var getBalanceError = document.querySelector("#budget-error") 
var getPTError = document.querySelector("#product-title-error") 
var list = document.querySelector("#list") 

var tempAccount = 0
var itemAmount = 0



// LETS MAKE ADD BUDGET FUNCTION 

budgetButton.addEventListener("click", ()=>{
    let salary = getTotalAmount.value;
    if (salary === "" || salary < 0) {
        getBalanceError.classList.remove("hide");    
    } else {
        getBalanceError.classList.add("hide");    
        let currentBalance = parseInt(getBalance.innerText);
        let newBalance = currentBalance + parseInt(salary);
        getBalance.innerText = newBalance;
        getTotalAmount.value = "";

        // Show a success message for 2 seconds
        let successMessage = document.getElementById("success-message");
        getBalanceError.innerText = "Ane de Paisa Ane de!";
        getBalanceError.classList.remove("hide");
        setTimeout(() => {
            getBalanceError.classList.add("hide");
        }, 1000); // hide the message after 2 seconds
    }
});

const disableButton = (bool) => {
    let editButtons = document.getElementsByClassName("edit")
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool
    })
}


const modifyElement = (element, edit) =>{
    let parentDiv = element.parentElement
    let currentBalance = getBalance.innerText
    let currentExpense = getExpense.innerText
    let parentAmount = parentDiv.querySelector(".amount").innerText
    if (edit) {
        let parentText =parentDiv.querySelector(".product").innerText
        getProductTitle.value =parentText
        getUserAmount.value =parentAmount
        disableButton(true)
        
    }
    getBalance.innerText = parseInt(currentBalance) + parseInt(parentAmount)
    getExpense.innerText = parseInt(currentExpense) - parseInt(parentAmount)
    parentDiv.remove()
    itemAmount--;
    getitem.innerText = `${itemAmount}`;
}

const listCreator =(expenseName, expenseValue)=>{
    let subListContent=document.createElement("div")
    subListContent.classList.add("sublist-content","flex-space")
    list.appendChild(subListContent)
    subListContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`
    let editButton =document.createElement("button")
    editButton.classList.add("fa-solid","fa-pen-to-square","edit")
    editButton.style.fontSize = "24px";
    editButton.addEventListener("click", ()=>{
        modifyElement(editButton, true)
    })
    let deleteButton = document.createElement("button")
    deleteButton.classList.add("fa-solid","fa-trash","delete")
    deleteButton.style.fontSize= "24px"
    deleteButton.addEventListener("click", ()=>{
        modifyElement(deleteButton)
    })
    subListContent.appendChild(editButton)
    subListContent.appendChild(deleteButton)
    document.getElementById("list").appendChild(subListContent)
    itemAmount++;
    getitem.innerText = `${itemAmount}`;
}

checkButton.addEventListener('click', ()=>{
    if (!getUserAmount.value || !getProductTitle.value) {
        getPTError.classList.remove("hide")
        return false;
    }

    let expanditure = parseInt(getUserAmount.value)
    let currentBalance = parseInt(getBalance.innerText)
    let newBalance = currentBalance - expanditure
    

    if (newBalance < 0) {
        // Display error message if balance is insufficient
        getBalanceError.classList.remove("hide")
        getBalanceError.innerText = "GAREEEEBOOONNN Pese kamaon jake!"
        return false;

    }

    disableButton(false)
    let sum = parseInt(getExpense.innerText) + expanditure
    getExpense.innerText = sum
    getBalance.innerText = newBalance
    listCreator(getProductTitle.value, getUserAmount.value)
    getProductTitle.value= ""
    getUserAmount.value= ""
})

