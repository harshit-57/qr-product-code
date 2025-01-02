# QR Product Code Generator

This project is a simple QR code generator that allows users to select a product and generate a QR code for that product.
The generated QR code can be scanned by a mobile device to access the product's buying link for saving the user details.

## Features

- Select a product from a dropdown menu
- Generate a QR code for the selected product
- Download the QR code as an image file or print it out.
- Scan the QR code using a mobile device to access the product's buying link
- Save the user details using the QR code

## Technologies Used

This project uses the following technologies:

Backend:

- Node.js
- Express.js
- MongoDB
- QR Code Generator API

Frontend:

- Next.js
- HTML
- CSS
- JavaScript

## Installation

To run this project locally, follow these steps:
Clone the repository:

```bash
git clone https://github.com/harshit-57/qr-product-code.git
```

Install the dependencies:

- Client Side:

```bash
cd qr-product-code/client
npm install
npm run dev
```

- Server Side

```bash
cd qr-product-code/server
npm install
npm run dev
```

Open your web browser and navigate to http://localhost:3000 to access the application.

## Configuration

To configure the application, create a .env file in the server directory of the project and add the following environment variables:

```bash
NODE_ENV=development
PORT=3001
MONGODB_URI = "your-mongo-db-url
FRONTEND_URL = "http://localhost:3000"
JWT_SECRET = "your-jwt-secret"
```

## Usage

Select a product from the dropdown menu.
Click the "Generate QR" button to generate a QR code for the selected product.
Scan the QR code
using a mobile device to access the product's buying link.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
