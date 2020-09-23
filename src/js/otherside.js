console.log("hello again from the other side");
function myFunction() {
    var x = document.getElementById("mainnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }