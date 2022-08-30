/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function toggleNav() {
    var  menu_status = document.getElementById("nav-link");
    if (menu_status.style.display === "block") {
        menu_status.style.display = "none";
    } else {
        menu_status.style.display = "block";
    }
  }