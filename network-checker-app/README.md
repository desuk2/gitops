# Network Checker App
####
## Overview
The Network Checker App is a simple Node.js application designed to simplify the checking of network resources. It provides functionality for executing common network commands such as `nmap`, `nslookup`, `ping`, and `tracert` through a user-friendly web interface.

## Features
- Execute network commands: nmap, nslookup, ping, and tracert.
- Web interface for easy interaction.
- Selectable options for different network checks.
- Displays results in a clear and organized manner.

## Project Structure
```
network-checker-app
├── src
│   ├── server.js
│   ├── controllers
│   │   ├── nmapController.js
│   │   ├── nslookupController.js
│   │   ├── pingController.js
│   │   └── tracertController.js
│   ├── routes
│   │   └── api.js
│   ├── services
│   │   └── systemCommands.js
│   ├── public
│   │   ├── index.html
│   │   ├── css
│   │   │   └── styles.css
│   │   └── js
│   │       └── app.js
│   └── views
│       └── index.ejs
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd network-checker-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. Open your web browser and navigate to `http://localhost:3000`.
3. Use the web interface to select the desired network command and input the necessary parameters.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.