# Test Scenario: Admin User Registration

## Test Objective

Verify that an admin user can successfully register in the system.

## Preconditions

- Access to the registration page
- Admin account does not already exist in the system

## Test Steps

1. Open the browser and navigate to the registration page.
2. Fill in the registration form fields:
   - **Username**: `admin`
   - **Email**: `admin@example.com`
   - **Password**: `Admin@1234`
   - **Confirm Password**: `Admin@1234`
3. Click the "Register" button.

## Expected Result

- The system should display a successful registration message.
- The user should be redirected to the login page or the homepage.
- The newly registered user's data should be saved in the database.

## Actual Result

_To be filled in after the test execution._

## Acceptance Criteria

- The admin user is registered in the system and can log in.
- The admin user receives an email confirming account registration.
- If login credentials are incorrect, the admin user receives an appropriate error message indicating access issues.

## Additional Information

- Tests conducted on browsers: Chrome, Safari.
- Test environment: Development (DEV)
