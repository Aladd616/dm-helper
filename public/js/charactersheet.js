// ====================================================
// Character Sheet Interface
// ----------------------------------------------------
// Handles display and storage of character data
// ====================================================
const sheet = (function () {
  // sets up event handlers on page load

  function getData() {
    const characterData = {
      character_name: $('#character-name').html(),
      gender: $('#character-gender').val(),
      race: $('#character-race').val(),
      class: $('#character-class').val(),
      level: $('#character-level').val(),
      alignment: $('#character-alignment').val(),
      size: $('#character-size').val(),
      type: $('#character-type').val(),
      hitDie: $('#character-hit-die-text').val(),
      hp: $('#character-hit-points-text').val(),
      initiative: $('#character-initiative-text').val(),
      speed: $('#character-space-text').val(),
      space: $('#character-space-text').val(),
      reach: $('#character-reach-text').val(),
      armorClass: $('#character-armor-class-text').val(),
      attacks: $('#character-attack-text').val(),
      fullattack: $('#character-full-attack-text').val(),
      specialattack: $('#character-special-attacks-text').val(),
      specialqual: $('#character-special-qualities-text').val(),
      fort: $('#character-fortitude-save-text').val(),
      reflex: $('#character-reflex-save-text').val(),
      will: $('#character-will-save-text').val(),
      str: $('#character-strength-text').val(),
      dex: $('#character-dexterity-text').val(),
      con: $('#character-constitution-text').val(),
      int: $('#character-intelligence-text').val(),
      wis: $('#character-wisdom-text').val(),
      cha: $('#character-charisma-text').val(),
      skills: $('#character-skills-text').val(),
      feats: $('#character-feats-text').val(),
      equipment: $('#character-equipment-text').val(),
      notes: $('#character-notes-text').val(),
    };
    return characterData;
  }

  function clearData() {
    $('#character-name').html('Character Name');
    $('#character-gender').val('');
    $('#character-race').val('');
    $('#character-class').val('');
    $('#character-level').val('');
    $('#character-alignment').val('');
    $('#character-speed').val('');
    $('#character-size').val('');
    $('#character-type').val('');
    $('#character-hit-die-text').val('');
    $('#character-hit-points-text').val('');
    $('#character-initiative-text').val('');
    $('#character-speed-text').val('');
    $('#character-space-text').val('');
    $('#character-reach-text').val('');
    $('#character-armor-class-text').val('');
    $('#character-attack-text').val('');
    $('#character-full-attack-text').val('');
    $('#character-special-attacks-text').val('');
    $('#character-special-qualities-text').val('');
    $('#character-fortitude-save-text').val('');
    $('#character-reflex-save-text').val('');
    $('#character-will-save-text').val('');
    $('#character-strength-text').val('');
    $('#character-dexterity-text').val('');
    $('#character-constitution-text').val('');
    $('#character-intelligence-text').val('');
    $('#character-wisdom-text').val('');
    $('#character-charisma-text').val('');
    $('#character-skills-text').val('');
    $('#character-feats-text').val('');
    $('#character-equipment-text').val('');
    $('#character-notes-text').val('');
  }

  function showData(char) {
    $('#character-name').html(char.character_name);
    $('#character-gender').val(char.gender);
    $('#character-race').val(char.race);
    $('#character-class').val(char.class);
    $('#character-level').val(char.level);
    $('#character-alignment').val(char.alignment);
    $('#character-size').val(char.size);
    $('#character-type').val(char.type);
    $('#character-hit-die-text').val(char.hitDie);
    $('#character-hit-points-text').val(char.hp);
    $('#character-initiative-text').val(char.initiative);
    $('#character-speed-text').val(char.speed);
    $('#character-space-text').val(char.space);
    $('#character-reach-text').val(char.reach);
    $('#character-armor-class-text').val(char.armorClass);
    $('#character-attack-text').val(char.attacks);
    $('#character-full-attack-text').val(char.fullattack);
    $('#character-special-attacks-text').val(char.specialattack);
    $('#character-special-qualities-text').val(char.specialqual);
    $('#character-fortitude-save-text').val(char.fort);
    $('#character-reflex-save-text').val(char.reflex);
    $('#character-will-save-text').val(char.will);
    $('#character-strength-text').val(char.str);
    $('#character-dexterity-text').val(char.dex);
    $('#character-constitution-text').val(char.con);
    $('#character-intelligence-text').val(char.int);
    $('#character-wisdom-text').val(char.wis);
    $('#character-charisma-text').val(char.cha);
    $('#character-skills-text').val(char.skills);
    $('#character-feats-text').val(char.feats);
    $('#character-equipment-text').val(char.equipment);
    $('#character-notes-text').val(char.notes);
  }

  async function displayCharacter(event) {
    $('.character-entry').removeClass('active');
    $(this).addClass('active');
    const ID = $(this).data('id');

    if (ID === 'create') {
      clearData();
    } else {
      const response = await fetch(`/api/characters/` + ID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const characterData = await response.json();

      showData(characterData);
    }
  }

  async function createNewCharacter() {
    let charData = getData();

    if (charData.character_name) {
      const response = await fetch(`/api/characters/`, {
        method: 'POST',
        body: JSON.stringify(charData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    if (response.ok) {
      document.location.replace('/');
    }
  }

  async function updateCharacter(id) {
    const characterData = getData();
    console.log(characterData);
    const response = await fetch(`/api/characters/` + id, {
      method: 'PUT',
      body: JSON.stringify(characterData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    }
  }

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  // decides whether to update a character or create a new one
  // based on the id of the active entry
  function saveChanges() {
    let id = getCurrentID();
    console.log(id);
    if (id == 'create') {
      createNewCharacter();
    } else {
      updateCharacter(id);
    }
  }

  // grabs the id of the currently active entry
  function getCurrentID() {
    return $('.character-entry.active').data('id');
  }

  // displays the name edit box when the edit button is clicked
  function showNameEdit() {
    $('#character-name').toggleClass('d-none');
    $('#character-name-input').toggleClass('d-none');
  }

  // sets the name to the input's new value, triggered on change
  function updateName() {
    let newName = $('#character-name-input').val();
    $('#character-name').html(newName);
  }

  // sets up event handlers
  function init() {
    $('.character-entry').on('click', displayCharacter);
    $('#character-name-edit').on('click', showNameEdit);
    $('#character-name-input').on('change', updateName);
    $('#update-button').on('click', saveChanges);
  }

  return {
    init: init,
  };
})();

$(document).ready(function () {
  sheet.init();
});
