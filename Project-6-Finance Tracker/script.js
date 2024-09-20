// LETS SELECT ALL THE INPUT FIELDS

var getTotalAmount = document.querySelector("#total-amount")
var getProductTitle = document.querySelector("#Product-title")
var getUserAmount = document.querySelector("#user-amount")

// LETS GET ALL THE BUTTONS

var budgetButton = document.querySelector("#budget-add-btn")
var checkButton = document.querySelector("#check-amount")



// LETS GET ALL THE SPANSSSSSSS


var getAmount = document.querySelector("#amount") 
var getExpense = document.querySelector("#expanditure-value") 
var getBalance = document.querySelector("#balance-amount") 



// LETS FET ALL THE ERRORSSSSS

var getBalanceError = document.querySelector("#budget-error") 
var getPTError = document.querySelector("#product-title-error") 
var list = document.querySelector("#list") 

var tempAccount = 0



// LETS MAKE ADD BUDGET FUNCTION 

budgetButton.addEventListener("click", ()=>{
    tempAccount = getTotalAmount.value
    if (tempAccount === "" || tempAccount < 0) {
        getBalanceError.classList.remove("hide")    
    } 
    else {
        getBalanceError.classList.add("hide")    
        getAmount.innerHTML =tempAccount
        getBalance.innerHTML =tempAccount - getExpense.innerHTML
        getTotalAmount.value = ""
    }
})

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
        getProductTitle.value =parentAmount
        getUserAmount.value =parentAmount
        disableButton(true)
        
    }
    getBalance.innerText = parseInt(currentBalance) + parseInt(parentAmount)
    getExpense.innerText = parseInt(currentExpense) - parseInt(parentAmount)
    parentDiv.remove()
}


const listCreator =(expenseName, expenseValue)=>{
    let subListContent=document.createElement("div")
    subListContent.classList.add("sublist-content","flex-space")
    list.appendChild(subListContent)
    subListContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`
    let editButton =document.createElement("button")
    editButton.classList.add("fa")
}


