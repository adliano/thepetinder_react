export default {
  // Gets all books
  getPets: function () {
    return fetch('/api/pet')
  },
  // Saves a book to the database
  savePet: function (petData) {
    return fetch('/api/pet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(petData)
    })
  },
  registerShelter: function (shelterData) {
    return fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(shelterData)
    })
  }
}
