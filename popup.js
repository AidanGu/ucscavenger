document.addEventListener("DOMContentLoaded", function() {
    function openPopup() {
        var popupWindow = document.getElementById("popup-window");
        popupWindow.style.display = "block";
    }

    function closePopup() {
        var popupWindow = document.getElementById("popup-window");
        popupWindow.style.display = "none";
    }

    // Get the elements by their ID
    var closeButton = document.getElementById("close-button");

    // Hide the pop-up window when the close button is clicked
    closeButton.addEventListener("click", function() {
        closePopup();
    });
});