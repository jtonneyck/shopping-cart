function deleteItem(e){
  // currentTarget => parentNode
  // closest
  let theRow = e.currentTarget.closest(".row")
  document.getElementsByClassName("product-container")[0].removeChild(theRow)
}

function getPriceByProduct(row){
  return parseInt(row.querySelector(".price .amount").innerHTML)
}

function getQuantityByProduct(row) {
  return parseInt(row.querySelector(".quantity-input input").value)
}

function updateSubTotal(subTotal, row){
  row.querySelector(".subtotal .amount").innerHTML = subTotal
}

function getTotalPrice() {
  
  let productRows = document.getElementsByClassName("row")
  let grandTotal = 0
  
  for(let i = 0 ; i < productRows.length; i++) {
    let subtotal = getPriceByProduct(productRows[i]) * getQuantityByProduct(productRows[i])
    grandTotal += subtotal
    
    updateSubTotal(subtotal, productRows[i])
  }

  document.querySelector("#grand-total .amount").innerHTML = grandTotal

}

function createQuantityInput(){
  
  let input = document.createElement("input")
  
  let inputContainer = document.createElement("div")
  inputContainer.classList.add("quantity-input")

  inputContainer.appendChild(input)
  
  return inputContainer
}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNameNode(name) {
  let paragraph = document.createElement("p")
  paragraph.innerHTML = name

  let pContainer = document.createElement("div")
  pContainer.classList.add("name")

  pContainer.appendChild(paragraph)

  return pContainer
} 


// let row = {
//   boilerplate:   document.getElementsByClassName("row")[0].cloneNode(true)
//   createNewItemRow : function(itemName, itemUnitPrice){
  
//     this.boilerplate.querySelector(".name p").innerHTML = itemName
//     this.boilerplate.querySelector(".price .amount").innerHTML itemUnitPrice
  
//     document.getElementsByClassName("product-container")[0].appendChild(newRow)
//   }
// }



function createNewItemRow(itemName, itemUnitPrice){

  let toBeCloned = document.getElementsByClassName("row")[0]
  let newRow = toBeCloned.cloneNode(true)

  newRow.querySelector(".name p").innerHTML = itemName
  newRow.querySelector(".price .amount").innerHTML = itemUnitPrice

  document.getElementsByClassName("product-container")[0].appendChild(newRow)

  newRow.getElementsByClassName("btn-delete")[0].addEventListener("click", deleteItem)
}

function createNewItem(){
  let name = document.getElementById("create-name").value
  let price = document.getElementById("create-price").value

  if(typeof name !== "string" || name.length === 0) {
    alert("Give me a proper name!")
    return
  }
  if(typeof isNaN(parseInt(price))) {
    alert("The price should be a number!")
    return
  }
  createNewItemRow(name, price)

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
