let users = [];
let editIndex = -1;

function renderTable() {
    // print the Output
    const tbody = document.querySelector('#userTable tbody');
    // user click delete button tbody is empty 
    tbody.innerHTML = '';
    // print output array elements 
    users.forEach((user, index) => {
        const tr = document.createElement('tr');
        // one by one create row. td is use html tag 
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        // print data is tbody 
        tbody.appendChild(tr);
    });
}
// create the details 
function addUser() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (editIndex >= 0) {
        // Update user
        users[editIndex] = { name, age };
        editIndex = -1;
    } else {
        // Add new user
        users.push({ name, age });
    }

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';

    // Render table
    renderTable();
}

function editUser(index) {
    document.getElementById('name').value = users[index].name;
    document.getElementById('age').value = users[index].age;
    document.getElementById('editIndex').value = index;
    editIndex = index;
}

function deleteUser(index) {
    // using splice function 
    users.splice(index, 1);
    renderTable();
}

// Initial render
renderTable();
