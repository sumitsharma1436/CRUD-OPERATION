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
            <td>${user.first}</td>
            <td>${user.last}</td>
            <td>${user.num}</td>
            <td>${user.email}</td>
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
    const first = document.getElementById('First Name').value;
    const last = document.getElementById('Last Name').value;
    const num = document.getElementById('Mobile No.').value;
    const email = document.getElementById('Email Id').value;
    if (editIndex >= 0 ) {
        // Update user
        users[editIndex] = { first, last,num,email };
        editIndex = -1;
    } else {
        // Add new user
        if(first.length>0 && last.length>0 && num.length>0 && email.length>0){
        users.push({ first, last,num,email });
        document.getElementById("count").innerText=users.length
        document.getElementById("error").innerText=""
        }else{
        document.getElementById("error").innerText="Please fill all input box";
        }
    }

    // Clear input fields
     document.getElementById('First Name').value='';
     document.getElementById('Last Name').value='';
     document.getElementById('Mobile No.').value='';
    document.getElementById('Email Id').value='';

    // Render table
    renderTable();
}

function editUser(index) {
    // console.log(users[index])
    // input box fill all data and user i change 
    document.getElementById('First Name').value=users[index].first
     document.getElementById('Last Name').value=users[index].last
     document.getElementById('Mobile No.').value=users[index].num
    document.getElementById('Email Id').value=users[index].email
    document.getElementById('editIndex').value = index;
    // editIndex is 0
    editIndex = index;
    // console.log(editIndex)
}

function deleteUser(index) {
    // using splice function 
   let con= confirm("Are you sure this row is delete")
    if(con){
    users.splice(index, 1);
    document.getElementById("count").innerText=''
    renderTable();
    }
}

// Initial render
renderTable();
