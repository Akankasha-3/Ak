function redirectToSignUp() {
    window.location.href = "signup.html"; // Redirect to signup page
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
// Function to search antidote from CSV file
// Function to search antidote from CSV file and display results on the page
function searchAntidote() {
    const antidoteName = document.getElementById("antidoteName").value.toLowerCase();
    const location = document.getElementById("location").value.toLowerCase();
    const resultText = document.getElementById("resultText");

    if (antidoteName === "" || location === "") {
        resultText.innerHTML = "<p style='color: red;'>Please enter both antidote name and location.</p>";
        return;
    }

    // Fetch CSV file
    fetch("antidotes.csv")
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").map(row => row.split(","));
            let found = false;
            let resultHTML = "";

            rows.forEach(row => {
                const [name, availableLocation, quantity, storeName, storeAddress, phoneNumber] = row.map(item => item.trim().toLowerCase());

                if (name === antidoteName && availableLocation === location) {
                    resultHTML = `<div class="result-box">
                                    <h2>Antidote Found!</h2>
                                    <p><strong>Antidote:</strong> ${name}</p>
                                    <p><strong>Location:</strong> ${availableLocation}</p>
                                    <p><strong>Quantity Available:</strong> ${quantity}</p>
                                    <p><strong>Store Name:</strong> ${storeName}</p>
                                    <p><strong>Store Address:</strong> ${storeAddress}</p>
                                    <p><strong>Phone:</strong> <a href="tel:${phoneNumber}" class="phone-link">${phoneNumber}</a></p>
                                  </div>`;
                    found = true;
                }
            });

            if (!found) {
                resultHTML = "<p style='color: red;'>No antidote found for the given details.</p>";
            }

            resultText.innerHTML = resultHTML;
        })
        .catch(error => {
            console.error("Error fetching CSV:", error);
        });
}

