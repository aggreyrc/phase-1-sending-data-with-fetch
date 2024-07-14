function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    const body = JSON.stringify({
        name: name,
        email: email
    });

    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    })
    .then(response => response.json()) 
    .then(data => {
        console.log('Success:', data);
        const userId = data.id; 
        appendToDOM(`New User ID: ${userId}`); 
    })
    .catch(error => {
        console.error('Error:', error);
        appendToDOM(`Error: ${error.message}`);
    });
}

function appendToDOM(message) {
    const newElement = document.createElement('div');
    newElement.textContent = message;
    document.body.appendChild(newElement);
}
