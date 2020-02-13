document.addEventListener('DOMContentLoaded', function () {
  parallaxInit();
  setCurrentYear();

  setOrderListener();
});

function parallaxInit() {
  let elements = document.querySelectorAll('.parallax');
  M.Parallax.init(elements);
}

function setCurrentYear() {
  let currentYearLabel = document.getElementById('current_year');
  currentYearLabel.innerHTML = new Date().getFullYear().toString();
}

function setOrderListener() {
  let sendBtn = document.getElementById('send-btn');

  sendBtn.onclick = function () {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('tel').value;

    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://crsprt-gmail-com.myjino.ru/core/back.php?sendlead=run&name=" + name + "&email=" + email + "&phone=" + phone);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send();
  };
}
