/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctiondropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.ui-kit__dropdown')) {
        var dropdowns = document.getElementsByClassName("ui-kit__dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {

            }
        }
    }
}