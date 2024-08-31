// document.getElementById("demo").innerText=("soso")
// alert("Please enter");
// window.prompt('enter your demo')
// window.alert ("demo")
// var cartona = "";

// for(var i=0 ; i<10 ; i++){
// cartona+=`
// <div class="card" style="width: 18rem;">
//  <img class="card-img-top" src="./img/ben-garratt-134774-600x500.jpg" alt="Card image cap">
//  <div class="card-body">
//    <h5 class="card-title">Card title</h5>
//    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//    <a href="#" class="btn btn-primary">Go somewhere</a>
//  </div>
// </div>

//  </div>`


// }
// document.getElementById('demo').innerHTML=cartona;







// var productlist=[{name:"phone" ,price: 26556},
//   {name:"tv" ,price: 26556},
//   {name:"screen" ,price: 26556},
//   {name:"bl7" ,price: 26556},
//   {name:"mobile" ,price: 26556}]

//   var cartona=``;
//   for(var i=0; i<5 ; i++) {
// cartona+=`<tr><td>
// ${i+1}
// </td>
// <td>
// ${productlist[i].name}
// </td>
// <td>
// ${productlist[i].price}
// </td></tr>
// `

//   }
// document.getElementById("demo").innerHTML=cartona


// function show1(){
// console.log("hello")
// add.classList. remove("d-none")
// update.classList.add("d-none")

// }
// function show2(){
// console.log("hello")
// add.classList. add("d-none")
// update.classList.remove("d-none")

// }





////intered as a string only

var productslist



if (localStorage.getItem("productslist") == null) {


  productslist = []

}
else {
  productslist = JSON.parse(localStorage.getItem("productslist"));
  showProducts(productslist)
}

var counter
var productname = document.getElementById("productname");
var productprice = document.getElementById("productprice");
var productcatag = document.getElementById("productcateg");
var productdesc = document.getElementById("productdesc");

var savebtn = document.getElementById("savebtn");
function localStorageupdate() {
  localStorage.setItem('productslist', JSON.stringify(productslist))

}


function addproduct() {


  if(validatename() == true){
    var product = {

      name: productname.value,
      price: productprice.value,
      categ: productcatag.value,
      desc: productdesc.value


    }

    productslist.push(product);
    localStorageupdate();
    showProducts(productslist);
    validatename()
    clearinputs();
    savebtn.classList.add("d-none")

  }
}

function showProducts(data) {
  var caronta = ``;
  for (var i = 0; i < data.length; i++) {
    caronta += ` 
      <tr>
      <td>${i}</td>
      <td>${data[i].newname ? data[i].newname : data[i].name}</td>
      <td>${data[i].price}</td>
      <td>${data[i].categ}</td>
      <td>${data[i].desc}</td>
      <td> <button  onclick="updateProduct(${i})"  class=" btn btn-warning">update</button></td>
      <td> <button onclick="deleteproduct(${i})" class=" btn btn-danger">delete</button></td>
      
    </tr>`}


  document.getElementById("data").innerHTML = caronta
}


var add = document.getElementById("add")
var update = document.getElementById("update")


function deleteproduct(index) {

  productslist.splice(index, 1)
  localStorageupdate();
  console.log(productslist)
  showProducts(productslist)
}

function clearinputs() {
  productname.value = "";
  productprice.value = "";
  productcatag.value = "";
  productdesc.value = "";


}


function updateProduct(index) {
  productname.value = productslist[index].name;
  productprice.value = productslist[index].price;
  productcatag.value = productslist[index].categ;
  productdesc.value = productslist[index].desc;
  counter = index
  savebtn.classList.remove("d-none")

  console.log(counter);
}

function saveupdate() {
  productslist[counter].name = productname.value;
  productslist[counter].price = productprice.value;
  productslist[counter].categ = productcatag.value;
  productslist[counter].desc = productdesc.value;
  localStorageupdate()
  showProducts()
  console.log(productslist);
  savebtn.classList.add("d-none")
  clearinputs()
}


function searchProduct(data) {

  console.log(data);


  var newprodcutlist = []

  for (var i = 0; i < productslist.length; i++) {


    if (productslist[i].name.toLowerCase().includes(data.toLowerCase())) {

      productslist[i].newname = productslist[i].name.toLowerCase().replaceAll(data.toLowerCase(), `<span class="text-warning">${data.toLowerCase()}</span>`)

      console.log("product l", productslist);

      newprodcutlist.push(productslist[i]);
      console.log("founded", productslist[i]);
    }
    showProducts(newprodcutlist)
    console.log("new pro", newprodcutlist);

  }
}


function validatename() {

  var regex = /\w{4}/



  if (regex.test(productname.value)) {
    productname.style.border= "none"
    document.getElementById("invalidname").classList.add("d-none")
   
   return true
  }
  else { 
    productname.style.border= "5px solid red"
    document.getElementById("invalidname").classList.remove("d-none")
    return false;
}}