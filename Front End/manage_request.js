function loadRequests(requests) {
    const tbody = document.getElementById("requestsTableBody");
    tbody.innerHTML = ""; 

    requests.forEach(req => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${req.id}</td>
            <td>${req.reliefType}</td>
            <td>${req.contactName}</td>
            <td>${req.contactNumber}</td>
            <td>${req.severityLevel}</td>
            <td>${req.familyMembers}</td>
            <td>${req.description}</td>
            <td class="text-center">
                <button class="btn-edit" onclick="editRequest(${req.id})">Edit</button>
                <button class="btn-delete" onclick="deleteRequest(${req.id})">Delete</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function deleteRequest(id) {
    const confirmDelete = confirm("Are you really want to delete this request?");
    if (confirmDelete) {
        alert("Request deleted successfully");
    } else {
        alert("Delete cancelled");
    }
}

function editRequest(id) {
    const confirmEdit = confirm("Do you want to edit this request?");
    if (confirmEdit) {
        window.location.href = `request_form.html?edit_id=${id}`;
    } else {
        alert("Edit cancelled");
    }
}
