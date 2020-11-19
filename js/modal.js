let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  document.getElementById("myModal").className = "modal_visible";
  }


  span.onclick = () => {
    document.getElementById("myModal").className = "modal";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      document.getElementById("myModal").className = "modal";
    }
  }