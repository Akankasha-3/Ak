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
// Function to search antidote from CSV file and display results on the page
// Function to search for antidotes and display the result
function searchAntidote() {
    const antidoteName = document.getElementById("antidoteName").value.trim().toLowerCase();
    const location = document.getElementById("location").value.trim().toLowerCase();
    const resultBox = document.getElementById("resultText");

    // Fetch the CSV data
    fetch("antidotes.csv")
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").map(row => row.split(",")).filter(row => row.length === 6); // Ensure 6 columns per row
            let found = false;
            let resultHTML = "";

            // Iterate through the rows and check for matching antidote and location
            rows.forEach(row => {
                const [name, availableLocation, quantity, storeName, storeAddress, phoneNumber] = row.map(item => item.trim());

                if (name.toLowerCase() === antidoteName && availableLocation.toLowerCase() === location) {
                    // Google Maps Search Link
                    const googleMapsLink = `https://www.google.com/maps/search/?q=${encodeURIComponent(storeAddress)}`;

                    // Display the matching antidote details
                    resultHTML = `<div class="result-box">
                                   <h2>Antidote Found!</h2>
                                   <p><strong>Antidote:</strong> ${name}</p>
                                   <p><strong>Location:</strong> ${availableLocation}</p>
                                   <p><strong>Quantity Available:</strong> ${quantity}</p>
                                   <p><strong>Store Name:</strong> ${storeName}</p>
                                   <p><strong>Store Address:</strong> ${storeAddress}</p>
                                   <p><strong>Phone:</strong> <a href="tel:${phoneNumber}" class="phone-link">${phoneNumber}</a></p>
                                   <p><strong>Find on Google Maps:</strong> <a href="${googleMapsLink}" target="_blank" class="map-link">View Location</a></p>
                                 </div>`;
                    found = true;
                }
            });

            // If no matching antidote is found
            if (!found) {
                resultHTML = "<p style='color: red;'>No antidote found for the given details.</p>";
            }

            // Display the result
            resultBox.innerHTML = resultHTML;
        })
        .catch(error => {
            console.error("Error fetching CSV:", error);
            resultBox.innerHTML = "<p style='color: red;'>There was an error fetching the data. Please try again later.</p>";
        });
}

function toggleSignUp() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('signup-container').classList.remove('hidden');
  }

  function toggleLogin() {
    document.getElementById('signup-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
  }
