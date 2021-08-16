// ====================================================
// Login
// ----------------------------------------------------
// Handles user log-in, only loaded on login page
// ====================================================
const login = (function () {
  // Grabs data from the username and password fields
  function getData() {
    let username = $('#username-field').val().trim();
    let password = $('#password-field').val().trim();

    return { username: username, password: password };
  }

  // Sends the username and password to the server to attempt login
  async function submit(event) {
    event.preventDefault();
    let userData = getData();

    const response = await fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: userData.username,
        password: userData.password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      document.location.replace('/login?error=BadLogin');
    }
  }

  // sets up event handlers
  function init() {
    $('#login-button').on('click', submit);
  }

  return {
    init: init,
  };
})();

// fires the login script only once the page is ready
$(document).ready(function () {
  login.init();
});
