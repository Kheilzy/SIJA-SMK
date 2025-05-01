document.getElementById('guestbook-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const entriesList = document.getElementById('entries-list');
  
    // Get input values
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
  
    if (name && message) {
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${name}</strong>: ${message}`;
      
      // Append the new entry to the list
      entriesList.appendChild(listItem);
      
      // Clear the form
      nameInput.value = '';
      messageInput.value = '';
    }
  });