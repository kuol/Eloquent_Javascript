var clientData = {
    id: 031352,
    fullName: "Not Set",
    setUserName: setUserName};

function setUserName(firstName, lastName) {
    this.fullName = firstName + " " + lastName;
}

//setUserName.call(clientData, "Kuo", "Liu");
clientData.setUserName("Steve", "Jobs");
console.log(clientData);
