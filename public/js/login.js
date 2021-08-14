// ====================================================
// Login
// ----------------------------------------------------
// Handles user log-in, only loaded on login page
// ====================================================
const login = (function () {
  function getData() {
    let username = $('#username-field').val().trim();
    let password = $('#password-field').val().trim();

    return { username: username, password: password };
  }

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

  function init() {
    $('#login-button').on('click', submit);
  }

  return {
    init: init,
  };
})();

$(document).ready(function () {
  login.init();
});
