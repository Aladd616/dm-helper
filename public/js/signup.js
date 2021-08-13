// ====================================================
// Signup
// ----------------------------------------------------
// Handles sign up procedures
// ====================================================
const signup = (function () {
  function getData() {
    let name = $('#name-field').val().trim();
    let email = $('#username-field').val().trim();
    let password = $('#password-field').val().trim();
    let dm = $('#dm-check-box').prop('checked');

    return { name: name, email: email, password: password, isDM: dm };
  }

  async function submit(event) {
    event.preventDefault();
    let userData = getData();

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: userData.name,
        isDM: userData.isDM,
        email: userData.username,
        password: userData.password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    }
  }

  function init() {
    $('#signup-button').on('click', submit);
  }

  return {
    init: init,
  };
})();

$(document).ready(function () {
  signup.init();
});
