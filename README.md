# Explore Serbia
This project is a full-stack application built with the MERN stack (MongoDB, Express.js, React, Node.js). It features a map interface to explore different places in Serbia, with categories like museums, monuments, nature, castles, lakes, caves, waterfalls, and hidden gems.

![Explore Serbia](https://github.com/PavleDev21/Explore-Serbia/blob/main/presentation_image.png?raw=true)
## Features

- Interactive map with zoom controls and detailed views of different locations.
- Responsive design with a mobile-friendly interface.
- User authentication and review system (planned for future updates).
- Data management with MongoDB for storing location details and images.
  
## Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Getting Started

### Prerequisites

- Node.js
- npm or Yarn
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/PavleDev21/Explore-Serbia
2. Install NPM packages for the server(**node version 18.3**):
   ```sh
   cd server
   npm install
3. Install NPM packages for the client(**node version 18.3**):
   ```sh
   cd client
   npm install
4. Set up your environment variables in client/.env:
   ```sh
   VITE_GOOGLE_MAPS_API_KEY=<Your Google Maps API Key>
5. Set up your environment variables in server/.env:
   ```sh
   MONGO_URI=<Your MongoDB URI>
   PORT=5000

### Running the Application

1. Start the backend server:
   ```sh
   cd server
   npm start
2. Start the React app:
   ```sh
   cd client
   npm start

The React application will run on **http://localhost:3000** and the server on **http://localhost:5000**.

### Usage

Explore the interactive map to find detailed information on various places of interest in Serbia. Filter by categories to narrow down your search and discover new locations.

### Roadmap

- [x] Set up the basic backend with Node.js and Express.
- [x] Connect to MongoDB using Mongoose.
- [ ] Implement user authentication.
- [ ] Add a review system for each place.
- [ ] Deploy the application.

### Licence

Distributed under the MIT License.

### Contact

Pavle Baračkov - pavle.barackov@gmail.com  
Project link - https://github.com/PavleDev21/Explore-Serbia/


