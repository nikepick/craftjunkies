var api = "https://api.imgbb.com/1/upload";
var key = "";
function banner_up() {

  setTimeout(() => {
    $("#banner_div").slideUp("slow", function () {
      // Animation complete.
      page_maker("components/key.html", "key_c");
    });
  }, 100);
}

function page_maker(directory, id) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      document.getElementById(id).innerHTML = this.responseText;
    }
  });
  xhr.open("GET", directory);
  xhr.send();
}

function login() {
  key = document.getElementById("login_token").value;
  localStorage.setItem('login_key', key);
  $("#login_div").slideUp("slow", function () {
    page_maker("components/decision.html", "decision_c");
  });
}

function gotoEditC() {
  $("#decision_div").slideUp("slow", function () {
    page_maker("components/editcatalogue.html", "edit_c");
    var responseCarrier;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        responseCarrier = JSON.parse(this.responseText);
        document.getElementById("editcatalogue_div").innerHTML = responseCarrier;
      }
    });
    xhr.open("GET", "https://nikepick.github.io/p_catalogue/catalogue.json");
    xhr.send();
  });
}