// ====================================================
// Ability Sheet Interface
// ----------------------------------------------------
// Handles display and storage of ability data
// ====================================================
const abilitysheet = (function () {
  // pulls data from the input fields
  function getData() {
    const abilityData = {
      title: $('#ability-name').html(),
      details: $('#ability-details-text').val(),
      description: $('#ability-description-text').val(),
    };

    return abilityData;
  }

  // Clears all fields
  function clearData() {
    $('#ability-name').html('Ability Name');
    $('#ability-details-text').val('');
    $('#ability-description-text').val('');
  }

  // Sets all fields to data provided from the api
  function showData(ability) {
    $('#ability-name').html(ability.title);
    $('#ability-details-text').val(ability.details);
    $('#ability-description-text').val(ability.description);
  }

  // displays an ability's description, or creates a blank template
  async function displayAbility() {
    $('.ability-entry').removeClass('active');
    $(this).addClass('active');
    const ID = $(this).data('id');

    if (ID === 'create') {
      clearData();
    } else {
      const response = await fetch(`/api/abilities/` + ID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const abilityData = await response.json();

      showData(abilityData);
    }
  }

  // Creates a new ability
  async function createNewAbility() {
    let abilityData = getData();
    if (abilityData.title) {
      const response = await fetch(`/api/abilities/`, {
        method: 'POST',
        body: JSON.stringify(abilityData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/');
      }
    }
  }

  // Updates an existing ability of the given id
  async function updateAbility(id) {
    const abilityData = getData();
    const response = await fetch(`/api/abilities/` + id, {
      method: 'PUT',
      body: JSON.stringify(abilityData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    }
  }

  // Deletes an ability, if one exists
  async function deleteAbility(event) {
    let id = getCurrentID();

    if (id == 'create') {
      return;
    }

    const response = await fetch(`/api/abilities/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
    }
  }

  // decides whether to update a character or create a new one
  // based on the id of the active entry when Save Changes is clicked
  function saveChanges() {
    let id = getCurrentID();
    if (id == 'create') {
      createNewAbility();
    } else {
      updateAbility(id);
    }
  }

  // grabs the id of the currently active entry
  function getCurrentID() {
    return $('.ability-entry.active').data('id');
  }

  // displays the name edit box when the edit button is clicked
  function showNameEdit() {
    $('#ability-name').toggleClass('d-none');
    $('#ability-name-input').toggleClass('d-none');
  }

  // sets the name to the input's new value, triggered on change
  function updateName() {
    let newName = $('#ability-name-input').val();
    $('#ability-name').html(newName);
  }

  // sets up event handlers
  function init() {
    console.log('Abilities script loaded');
    $('.ability-entry').on('click', displayAbility);
    $('#ability-name-edit').on('click', showNameEdit);
    $('#ability-name-input').on('change', updateName);
    $('#update-ability-button').on('click', saveChanges);
    $('#delete-ability-button').on('click', deleteAbility);
  }

  return {
    init: init,
  };
})();

// Fire the ability script once the page loads
$(document).ready(function () {
  abilitysheet.init();
});
