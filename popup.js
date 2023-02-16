// Wait for the page to finish loading before running any JavaScript code
window.addEventListener('load', function() {
  
    // Find the pop-up element by its ID
    var popup = document.getElementById('popup');
    
    // Find the dismiss button element by its ID
    var dismissButton = document.getElementById('dismiss-button');
    
    // Define a function to display the pop-up
    function displayPopup() {
      popup.style.display = 'block';
    }
    
    // Define a function to dismiss the pop-up
    function dismissPopup() {
      popup.style.display = 'none';
    }
    
    // Attach an event listener to the dismiss button element
    dismissButton.addEventListener('click', dismissPopup);
    
    // Call the displayPopup function to show the pop-up
    displayPopup();
    
  });
  