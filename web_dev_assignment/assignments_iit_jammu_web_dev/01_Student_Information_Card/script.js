function showDetails() {

   
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

 
    if (name === "" || age === "" || course === "") {
        alert("Kindly fill all the details.");
        return;
    }


    let details = document.getElementById("details");

    details.innerHTML = `
        <h2>Student Details</h2>
        <br>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Course:</strong> ${course}</p>
    `;

  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}