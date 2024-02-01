
# Flipkart Clone Backend

## Introduction

Welcome to the backend repository of the Flipkart Clone project. This repository contains the backend codebase for a clone of the popular e-commerce platform Flipkart. It is built using Node.js with Express.js and MongoDB, and it integrates various features including user authentication, product management, order processing, and payment integration using the Paytm API.

## Environment Variables

To run the backend server locally or in a production environment, you need to set up the following environment variables:

- **DB_URI**: MongoDB url for database access.
- **PAYTM_MID**: Paytm Merchant ID.
- **PAYTM_WEBSITE**: Paytm website name.
- **PAYTM_CHANNEL_ID**: Paytm channel ID.
- **PAYTM_INDUSTRY_TYPE_ID**: Paytm industry type ID.
- **PAYTM_CUST_ID**: Paytm customer ID.
- **PAYTM_MERCHANT_KEY**: Paytm merchant key.
- **FRONTEND_URL**: Frontend URL for redirecting after payment completion.
- **PORT**: Port on which the backend server will run.

## Getting Started

To set up the backend server locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/flipkart-clone-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd flipkart-clone-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   
   - Create a `.env` file in the root directory.
   - Define the required environment variables listed above.

5. Run the server:

   ```bash
   npm start
   ```

6. The backend server will start running at the specified port.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Flipkart](https://www.flipkart.com/) for inspiring this project.
- [Paytm](https://paytm.com/) for providing the payment gateway.
