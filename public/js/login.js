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
        username: userData.username,
        password: userData.password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response.json());
  }

  function init() {
    $('#login-button').on('click', submit);
    console.log('Script loaded!');
  }

  return {
    init: init,
  };
})();

$(document).ready(function () {
  login.init();
});
