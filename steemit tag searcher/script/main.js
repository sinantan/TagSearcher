
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("buton").addEventListener("click", search);
});

$(document).keypress(function (e) {
    if (e.which == 13) {
       search();
    }
});

function search() {
 let tag = document.getElementById("data").value;
 window.open('https://steemit.com/trending/'+tag,'_newtab');
}