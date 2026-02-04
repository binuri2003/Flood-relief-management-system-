function showSection(sectionId) {
    document.getElementById("users").style.display = "none";
    document.getElementById("reports").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}

function confirmDelete() {
    if (confirm("Are you sure you want to delete this user?")) {
        alert("User deleted successfully");
    }
}

function logout() {
    alert("Logged out successfully");
}