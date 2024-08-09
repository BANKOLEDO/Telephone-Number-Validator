# Telephone Validator App

## Overview

The **Telephone Validator App** is a simple web application that allows users to check the validity of a US phone number. The application takes a phone number as input and determines if it matches the standard US phone number format.

## Features

- **User Input:** Users can input a phone number to be validated.
- **Validation:** The app uses a regular expression to validate the input against the standard US phone number formats.
- **Result Display:** The result of the validation (valid or invalid) is displayed to the user.
- **Clear Functionality:** Users can clear the input and results with a single click.

## Technologies Used

- **HTML:** For the structure and layout of the web page.
- **CSS:** For styling the user interface, making it visually appealing.
- **JavaScript:** For handling user interactions, validating the phone number, and updating the results dynamically.

## Usage

1. Open the app in a web browser.
2. Enter a US phone number in the input field.
3. Click the "Check" button to validate the phone number.
4. The result will be displayed below the input field, indicating whether the number is valid or invalid.
5. Use the "Clear" button to reset the input field and results.

## Regular Expression Used

The app uses the following regular expression to validate US phone numbers:

```javascript
/^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/
```

This pattern allows for different valid US phone number formats, including:
- (123) 456-7890
- 123-456-7890
- 123 456 7890
- 1234567890
- 1 123-456-7890

## How It Works

- The app listens for a click event on the "Check" button.
- When clicked, the input is trimmed of any leading or trailing whitespace.
- If the input is empty, an alert prompts the user to provide a phone number.
- The input is then tested against the regular expression.
- If it matches, a message is displayed indicating that the number is valid; otherwise, it displays an invalid message.
- The "Clear" button resets the input field and the results display area.

## Future Enhancements

- Expand validation to support international phone numbers.
- Add more detailed error messages for different types of invalid inputs.
- Improve the user interface with additional styling and responsive design.


## Acknowledgments

- Inspired by the freeCodeCamp curriculum.
