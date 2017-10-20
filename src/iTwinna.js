// Alphonse Mboumba
// JS file for The starting with A B
// Website
//date: 10/14/17

function amount_check(amount, cell2){
  if(amount < 100){
    return cell2 = document.getElementById('itemAmount').style.color = 'green';
  }
  else if (amount >= 100 && amount <= 1000) {
    return cell2 = document.getElementById('itemAmount').style.color = 'orange';
  }
  else if (amount > 1000) {
      return cell2 = document.getElementById('itemAmount').style.color = 'red';
  }
}
function btnClick(){
  var x = document.getElementById("myTable1").getElementByTagName("td");
  x[1].style.backgroundColor = "yellow";
}
function myFunction() {

  var select_option = document.getElementById("KindOfTables").value;
  if(select_option == 1){
    var items_name = document.getElementById("itemName").value;
    var item_amount = document.getElementById("itemAmount").value;

    var table = document.getElementById("myTable1");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = items_name;
    cell2.innerHTML = item_amount;
    cell3.innerHTML = "$200.00";
    cell4.innerHTML = "$250.00";


  }
  else if (select_option == 2) {
    var items_name = document.getElementById("itemName").value;
    var item_amount = document.getElementById("itemAmount").value;
    var table = document.getElementById("myTable2");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = items_name;
    cell2.innerHTML = item_amount;
    cell3.innerHTML = "$200.00";
    cell4.innerHTML = "$250.00";
  }
  else if (select_option == 3) {
    var items_name = document.getElementById("itemName").value;
    var item_amount = document.getElementById("itemAmount").value;
    var table = document.getElementById("myTable3");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = items_name;
    cell2.innerHTML = item_amount;
    cell3.innerHTML = "$200.00";
    cell4.innerHTML = "$250.00";
  }
  else if (select_option == 4) {
    var items_name = document.getElementById("itemName").value;
    var item_amount = document.getElementById("itemAmount").value;
    var table = document.getElementById("myTable4");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = items_name;
    cell2.innerHTML = item_amount;
    cell3.innerHTML = "$200.00";
    cell4.innerHTML = "$250.00";
  }
  else {
    alert("Error invalid Options: " + select_option);
  }

}
