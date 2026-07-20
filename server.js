// server.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
  // Announcement Banner: Hide it after 5 seconds
  const announcementBanner = document.getElementById('announcement-banner');
  if (announcementBanner) {
      setTimeout(() => {
          announcementBanner.style.display = 'none';
      }, 5000);
  }

  // Search Bar: Add a listener for keyup events
  const searchBar = document.getElementById('search-bar');
  if (searchBar) {
      searchBar.addEventListener('keyup', function(event) {
          console.log(`Searching for: ${event.target.value}`);
          // Implement search logic here if required
      });
  }

  // Login Form: Handle form submission (for demo purposes, we prevent actual submission)
  const loginForm = document.querySelector('#login form');
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent actual form submission
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;
          console.log(`Login attempt: ${username}, ${password}`);
          // Here you would typically send a request to the server to check the credentials
          alert('Login attempt submitted (dummy action)');
      });
  }

  // Reset Button: Add an event listener to reset the form
  const resetButton = document.querySelector('input[type="reset"]');
  if (resetButton) {
      resetButton.addEventListener('click', function() {
          console.log('Form reset');
          // Optionally perform extra actions here (e.g., logging reset)
      });
  }

  // Toggle Announcement Banner: Optionally allow user to close it manually
  announcementBanner.addEventListener('click', function() {
      announcementBanner.style.display = 'none';
  });

});
