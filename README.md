## Introduction
The Board Game Café App is a digital platform designed to enhance the experience of both customers and employees in a board game café. It provides a seamless way to browse board games, order food, and manage café operations efficiently. The system supports two user roles:

Customers: Browse board game listings, place food orders, and settle bills conveniently.

Employees: Manage orders, update menu items, track board game availability, and process customer payments.

## discription

The Board Game Café App is a comprehensive solution designed to enhance the experience of both customers and employees in a board game café. Customers can seamlessly browse available board games, place food orders, and enjoy a hassle-free billing process. Meanwhile, employees can efficiently manage orders, update menu items, and track board game availability.

With an intuitive interface and role-based functionalities, the app streamlines café operations, ensuring a smooth and enjoyable experience for everyone.

## Features

User Authentication: Log in as either a customer or an employee to access role-specific functionalities.

Food Ordering: Customers can browse the menu and place orders.

Order Management & Billing: Employees can receive orders, update their status, and process customer bills.

Menu Management: Employees can add, update, or remove food items from the menu.

Board Game Catalog: Customers can browse the available board games.

Board Game Status Management: Employees can update the availability and condition of board games.

## Folder and File Descriptions📂 

## File Descriptions

- **`SampleData_MongoDB/`**: Contains sample data files for MongoDB integration.
  - `games.json`: Sample data for game inventory.
  - `reservations.json`: Sample data for reservation records.
  - `customers.json`: Sample data for customer profiles.
  - `orders.json`: Sample data for order management.

- **`datasources/`**: Configuration files for connecting to various data sources.
  - `mongodb_config.json`: MongoDB connection settings.
  - `api_endpoints.json`: External API configurations.

- **`jslibs/`**: Custom JavaScript libraries for extended functionalities.
  - `utils.js`: Utility functions used across the application.
  - `validation.js`: Functions for data validation.

- **`pages/`**: Application pages with associated queries and widgets.
  - `Home/`: Homepage of the application.
    - `queries.json`: Data queries for the homepage.
    - `widgets.json`: UI components for the homepage.
  - `GameInventory/`: Page to manage game inventory.
    - `queries.json`: Data queries for game inventory.
    - `widgets.json`: UI components for game inventory.
  - `Reservations/`: Page to handle reservations.
    - `queries.json`: Data queries for reservations.
    - `widgets.json`: UI components for reservations.
  - `CustomerProfiles/`: Page to manage customer profiles.
    - `queries.json`: Data queries for customer profiles.
    - `widgets.json`: UI components for customer profiles.
  - `Orders/`: Page to process orders.
    - `queries.json`: Data queries for orders.
    - `widgets.json`: UI components for orders.

## Usage
1. Login to Appsmith first
2. Enter the app : [![][https://app.appsmith.com/app/boardgame-cafe/first-page-67c518e7352cc33eef815e46?branch=main&embed=true]
3. User Login :User Roles
- Residents: Log in with your resident credentials to book amenities, report issues, and manage bills.
- Administrators: Log in with admin credentials to oversee all operations and manage user requests.
3. There are demonstration video provided on [links](#links)

## Credits
This project is developed by:

1️⃣Phichak Limlamlertkul 6610502161

2️⃣Kirana Rakprakobkij 6610505284

3️⃣Kaimook Tanagit 6610505292

## License⚠
This project is licensed under the MIT License - see the LICENSE file for details.

## Links🔗
Demo Clip: [Database_12_clip.mov](https://drive.google.com/file/d/1W6suv2Xci0BXEn5t-F0GbdY1VD3DBG6m/view?usp=drive_link)

Slides: [slides.pdf](https://drive.google.com/file/d/15USXTsj4WWtMqhDAQ5cRG975GW2RxqDX/view?usp=drive_link)

## Tools
- **MongoDB Atlas**: A fully-managed cloud database service for deploying, managing, and scaling MongoDB clusters. It serves as the backend database for storing application data securely and efficiently.
- **Appsmith**: An open-source platform for building internal tools rapidly. Appsmith is utilized to create the application's user interface, enabling easy integration with MongoDB Atlas and other data sources.

##### You can visit the application using the below 

###### [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](https://app.appsmith.com/applications/67c45521e836f11c3fa21a66/pages/67c45521e836f11c3fa21a68) [![](https://assets.appsmith.com/git-sync/Buttons2.svg)](https://app.appsmith.com/applications/67c45521e836f11c3fa21a66/pages/67c45521e836f11c3fa21a68/edit)
