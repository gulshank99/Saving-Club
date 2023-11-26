   // Function to handle checkbox state and enable/disable the Join button
   function handleCheckboxChange(checkboxId, joinButtonId) {
    const checkbox = document.getElementById(checkboxId);
    const joinButton = document.getElementById(joinButtonId);

    checkbox.addEventListener('change', () => {
        const isChecked = checkbox.checked;
        joinButton.disabled = !isChecked;

        // Uncheck other checkboxes when one is checked
        document.querySelectorAll('.form-check-input').forEach(otherCheckbox => {
            if (otherCheckbox.id !== checkboxId) {
                otherCheckbox.checked = false;
            }
        });
    });
}

// Call the function for each card
// handleCheckboxChange('card1', 'joinButton');
// handleCheckboxChange('card2', 'joinButton');
// handleCheckboxChange('card3', 'joinButton');
document.querySelectorAll(".form-check-input").forEach((card) => {
    handleCheckboxChange(card.id,"joinButton")
  });



  function joinClub() {
    // Find the checked checkbox
    const checkedCheckbox = document.querySelector('.form-check-input:checked');

    if (checkedCheckbox) {
        // Get the card container
        const cardContainer = checkedCheckbox.closest('.card');

        // Get data from the card
        const cardData = {
            Return: extractPercentage(cardContainer.querySelector('.card-body h3').textContent),
            annualReturn: cardContainer.querySelector('.card-body p:nth-child(2)').textContent,
            minInvestment: cardContainer.querySelector('.card-body p:nth-child(3)').textContent,
            lockIn: cardContainer.querySelector('.card-body p:nth-child(4)').textContent,
        };

        // Convert the data to JSON and store it in localStorage
        localStorage.setItem('joinedCardData', JSON.stringify(cardData));

        // Redirect to another HTML page
        window.location.href = 'register.html';


    }
 }

// Helper function to extract percentage from a string
function extractPercentage(text) {
    const match = text.match(/\d+(\.\d+)?%/);
    return match ? match[0] : null;
}