function myFunctiondropdowndisplaynone() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    openDropdown.classList.remove('show');
}