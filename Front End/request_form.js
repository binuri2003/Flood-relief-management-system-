document.getElementById("reliefForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const userID = document.getElementById("userID").value.trim();
    const userName = document.getElementById("userName").value.trim();
    const contactPerson = document.getElementById("contactPerson").value.trim();
    const contactNumber1 = document.getElementById("contactNumber1").value.trim();
    const contactNumber2 = document.getElementById("contactNumber2").value.trim();
    const address = document.getElementById("address").value.trim();
    const familyMembers = document.getElementById("familyMembers").value.trim();
    const reliefType = document.getElementById("reliefType").value;
    const district = document.getElementById("district").value.trim();
    const divSec = document.getElementById("divSec").value.trim();
    const gnDivision = document.getElementById("gnDivision").value.trim();

    const floodLevel = document.querySelector('input[name="floodLevel"]:checked');

    if (
        userID === "" ||
        userName === "" ||
        contactPerson === "" ||
        address === "" ||
        familyMembers === "" ||
        reliefType === "" ||
        district === "" ||
        divSec === "" ||
        gnDivision === "" ||
        floodLevel === null ||
        (contactNumber1 === "" && contactNumber2 === "")
    ) {
        alert("fill required fields");
        return;
    }

    alert("Your relief request has been created successfully.");

    document.getElementById("reliefForm").reset();
});
