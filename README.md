# Sheets User Edits Color Formatter

## Introduction
The `sheetsUserEditsColorFormatter.gs` is a Google Apps Script designed to automatically change the font color of cells in a Google Sheet based on the email address of the user who edits the cell. This script is particularly useful for teams using Google Sheets to track changes and visually distinguish contributions by different team members.

## How It Works
This script triggers whenever a cell in a Google Sheet is edited. It checks the email address of the user who made the edit against a predefined list of email addresses. Depending on the user's email, the script applies a specific font color to the edited cell:
- `person@email.com` changes the font color to green.
- `person2@email.com` changes the font color to blue.
- `person3@email.com` changes the font color to purple.

## Usage
To use this script:
1. Open the Google Sheet where you want the script to run.
2. Go to `Extensions` > `Apps Script`.
3. Delete any existing code and paste the contents of `sheetsUserEditsColorFormatter.gs`.
4. Save and close the Apps Script tab.
5. The script will now run automatically when cells are edited.

## Limitations
This script works automatically only for Google Workspace accounts where the user profiles and email visibility are appropriately configured to allow Apps Script to identify the email address of the person editing the sheet. Here are a few limitations to keep in mind:
- **Email Visibility**: The script can only retrieve the email address of the user if their email visibility is set appropriately in the Google Workspace domain's settings.
- **Permissions**: Users need to authorize the script initially to run and access the sheet data.
- **Scalability**: As the script runs on every edit, editing a large number of cells simultaneously or by many users at once may slow down the performance.

## Compatibility
This script is intended for use within Google Workspace environments and may not function as expected in consumer Google accounts (e.g., `@gmail.com` accounts) or where profile settings restrict email visibility. Ensure that your Google Workspace settings allow scripts to access user emails.

## Contributing
Feel free to fork this repository and submit pull requests to extend the functionality or enhance the existing script. For any questions or issues, please open an issue in the repository, and we'll address it as promptly as we can.

## License
This project is released under the MIT License. See the `LICENSE` file for more details.
