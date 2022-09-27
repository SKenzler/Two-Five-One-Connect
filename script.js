/* Toggle between Hamburger Menu and Navigation Menu when screen size changes */

function toggleNav() {
    var  menuStatus = document.getElementById("nav-links");
    if (menuStatus.className === "nav-link") {
        menuStatus.className += " responsive";
    } 
    
    else {
        menuStatus.className = "nav-link";
    }
  }
