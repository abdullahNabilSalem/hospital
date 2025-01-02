function saveData() {

    let allPatients = JSON.parse(localStorage.getItem("patients")) || [];

    const patient = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        location: document.getElementById("location").value,
        email: document.getElementById("email").value,
        illness: document.getElementById("illness").value,
        myIllness: document.getElementById("my_illness").value,
        date: document.getElementById("date").value
    };

    allPatients.push(patient);

    localStorage.setItem("patients", JSON.stringify(allPatients));
    alert("تم حفظ البيانات بنجاح!");

    location.reload();
    window.location.href = "TableOfInfo.html";
}

window.onload = function () {

    let allPatients = JSON.parse(localStorage.getItem("patients")) || [];

    const tableBody = document.getElementById("patientsTableBody");

    allPatients.forEach((patient, index) => {
        const row = `<tr>
                        <td>E${index + 1}</td>
                        <td>${patient.name}</td>
                        <td>${patient.email}</td>
                        <td>${patient.age}</td>
                        <td>${patient.location}</td>
                        <td>${patient.illness}</td>
                        <td>${patient.myIllness || '-'}</td>
                        <td>${patient.date}</td>
                    </tr>`;

        tableBody.innerHTML += row;
    });
};
