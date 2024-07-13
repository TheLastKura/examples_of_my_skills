# Bug Title: No Response After Clicking "Register" Button for Admin User Registration

## Description

When attempting to register a new admin user, clicking the "Register" button does not trigger any response. The user is not informed about any errors or improper form completion, preventing successful registration.

## Steps to Reproduce

1. Navigate to the registration page.
2. Fill in the registration form fields:
   - **Username**: `admin`
   - **Email**: `admin@example.com`
   - **Password**: Secure password as per requirements
   - **Confirm Password**: Same as above
3. Click the "Register" button.

## Expected Result

The system should process the registration request. If successful, it should display a success message confirming the admin user registration. If there are any errors in the registration form (e.g., duplicate email address), the system should provide appropriate error messages explaining the issue and preventing the registration from completing.

## Browser and Environment

- **Browser**: Chrome Version 100.0.0
- **Operating System**: MacOS
- **Test Environment**: Development (DEV)
