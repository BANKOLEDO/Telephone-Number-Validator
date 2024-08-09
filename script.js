document.getElementById('check-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    // Check if input is empty and show an alert
    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    // Regular expression to match valid US phone numbers
    const validNumberPattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

    // Check if the input matches the pattern
    if (validNumberPattern.test(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
});

document.getElementById('clear-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Clear the input field and the result div
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});