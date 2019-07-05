function deleteItem(e){
  debugger
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
    debugger
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
adsfg
\vzdsc., mxcv

function createNewItem(){

}

window.onload = function(){SVGDefsElement./mzdsv/m.
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onczxv\ds
  sd
  fsd
  fsadfmcvxclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
