// ====================================================
// Signup
// ----------------------------------------------------
// Handles sign up procedures
// ====================================================
const signup = (function () {
  // grabs data from the necessary fields
  // TODO: Actually do something with the password check field
  function getData() {
    let name = $('#name-field').val().trim();
    let email = $('#username-field').val().trim();
    let password = $('#password-field').val().trim();
    let dm = $('input[name="dmCheckbox"]:checked').val();

    return { name: name, email: email, password: password, isDM: dm };
  }

  // Submits the data to the server for account creation
  async function submit(event) {
    event.preventDefault();
    let userData = getData();

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: userData.name,
        isDM: userData.isDM,
        email: userData.email,
        password: userData.password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    }
  }

  // Sets up event handlers
  function init() {
    $('#signup-button').on('click', submit);
  }

  return {
    init: init,
  };
})();

// Fires the signup script only when ready
$(document).ready(function () {
  signup.init();
});
