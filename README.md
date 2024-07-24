# E-PHARMACY (franchise)

## Project Purpose

Develop a web platform for online pharmacy franchises.

## Technologies and Libraries Used

- **Form Handling and Validation**: [React Hook Form](https://react-hook-form.com/)

## Components and Routes

### Layout Component

Renders on the root route `/`. It includes:

- **Header**: Shows only the logo for unauthorized users and extends with a navigation menu ('Shop', 'Medicine', 'Statistics', 'Log out') for authorized users.
- **Footer**: Hidden for unauthorized users and visible for authorized users, containing additional information and social media links.

### Header Component

- **Logo**: Clickable, redirects to the homepage.
- **Navigation Links**: 'Shop', 'Medicine', 'Statistics', redirect to respective pages.
- **Log out Button**: Logs the user out.

### Footer Component

- **Logo Section**: Clickable logo redirects to the homepage.
- **Social Media Icons**: Links to company's social media pages (Facebook, Instagram, YouTube).
- **Central Section**: Navigation links ('Shop', 'Medicine', 'Statistics').
- **Footer Bottom**: Contains copyright text and links to 'Privacy Policy' and 'Terms & Conditions'.

### Non-Authenticated User Components

#### RegisterPage

- **Route**: `/register`
- **Header**: Logo redirects to RegisterPage.
- **MainContent**: Promotional text and registration form.
  - **Form**: Validates user input, redirects to LoginPage upon successful registration, shows error messages if registration fails.

#### LoginPage

- **Route**: `/login`
- **Header**: Logo redirects to RegisterPage.
- **MainContent**: Promotional text and login form.
  - **Form**: Validates user input, redirects to MainPage upon successful login, shows error messages if login fails.

### Authenticated User Components

#### CreateShopPage

- **Route**: `/create-shop` (private)
- **Title**: "Create your Shop"
- **Form**: Includes fields for shop name, owner name, email, phone number, address, city, postal code, password, delivery system option.
  - **Buttons**: 'Upload Logo', 'Create Account'
  - **Validation**: Ensures all fields are correctly filled out before submission.

#### EditShopPage

- **Route**: `/edit-shop` (private)
- **Title**: "Edit data"
- **Form**: Pre-filled with shop data, includes validation and server interaction for updates.

#### ShopPage

- **Route**: `/shop` (private)
- **Title**: Shop name and details.
- **Tabs**: 'Drug store' (shop's products) and 'All medicine' (all available products).
  - **Product Management**: Add, edit, delete products.
  - **Pagination**: For navigating through the product catalog.

### Modal Components

#### Add Medicine Modal

- **Title**: "Add medicine to store"
- **Form**: Includes fields for medicine name, price, description, and image upload.

#### Edit Product Modal

- **Title**: "Edit Product Details"
- **Form**: Includes fields for updating product details and image.

#### Confirm Deletion Modal

- **Title**: "Confirm Deletion"
- **Content**: Confirms the deletion of a product with an image and name display.

### MedicinePage

- **Route**: `/medicine` (private)
- **Content**: Detailed product information with tabs for 'Description' and 'Reviews'.

### StatisticsPage

- **Route**: `/statistics` (private)
- **Content**: Displays key indicators, recent clients, and income/expenses.

## Development Notes

- Ensure all routes requiring authentication are protected.
- Validate all form inputs and provide clear error messages.
- Implement smooth transitions between tabs and pages without full reloads.
- Ensure all modals handle both data submission and user cancellations appropriately.
- Make sure pagination works efficiently for large datasets.

## Contact

For any issues or questions regarding the project, please contact the project maintainers.
