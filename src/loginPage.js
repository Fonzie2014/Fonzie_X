

var userName = "FonzieX";
var password = "Jespere$1";

function signIn(){

  var usrName = document.getElementById('user_name').value;
  var pwd = document.getElementById('pass_word').value;

  if(usrName == userName && pwd == password){
    document.getElementById("homePage").innerHTML = index.html;
  }
  else {
    if(usrName != userName && pwd != password){
      alert("Wrong username & Paswword" + "<br>" + "Please Try again.");
    }
    else if(usrName != userName){
      alert("Wrong Username <br> Please try again.");
    }
    else if(pwd != password) {
      alert("Wrong Password \n Please Try again.");
    }
    else{
      usrName = NULL;
      pwd = NULL;
      alert("You enter\nUsername: " + usrName + "\nPassword: "+pwd);
    }
  }


}
