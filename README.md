# Superbike Auctions

Superbike Auctions is a platform designed to facilitate the buying and selling of high-performance motorcycles through an auction system. This repository contains the source code and documentation for the Superbike Auctions web application.

## Features

- **User Authentication**: Secure login and registration system for buyers and sellers.
- **Auction Listings**: Browse and search for superbikes available for auction.
- **Bidding System**: Real-time bidding functionality with automatic bid increments.
- **Seller Dashboard**: Manage your listings, track bids, and view auction results.
- **Buyer Dashboard**: Track your bids, view auction history, and manage your profile.
- **Admin Panel**: Comprehensive admin interface to manage users, auctions, and site settings.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time Bidding**: Socket.io
- **Deployment**: Docker, Kubernetes, AWS (or any other cloud provider)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jayanthjayanth/superbike-auctions.git
   cd superbike-auctions

2. **Install dependencies**

   ```bash
   npm install

3. **Set up environment variables** <br/>
   Create a .env file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/superbike-auctions
   JWT_SECRET=your_jwt_secret

4. **Start the development server**
   ```bash
   npm start
   
