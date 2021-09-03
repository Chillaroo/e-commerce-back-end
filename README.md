# E-Commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 
This is the back end of an e-commerce app that utilizes Express.js API and Sequelize to interact with a MYSQL database.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
Install node.js, mysql, and npm. Then, clone this repo. Open the file called connection.js, which is located in the db folder. Create a .env file in the root directory with the following contents:

DB_USER='your username for mysql'

DB_PASS='your password for mysql'

DB_NAME='your database name'

You'll want to change the name of your database in the schema.sql file to match the name you choose for the .env file.

## Usage
Log into mysql in the terminal and type: `source ./db/schema.sql`.

This will set up the database. Then log out of mysql. If you wish to seed the data table with test values, open the terminal and type: `npm run seed`.

To run the back end, open the terminal and type: `node server.js`.

A video demo of the setup is linked here: https://drive.google.com/file/d/1rWTK21HkYKouWOOF7Oho5yn73Fa-8NmW/view

A video demo of all of the routes working is linked here: https://drive.google.com/file/d/18_BBR2-XyKKO7MM7GRFzN_HdzSBZi9Ef/view


## License
This application is covered under the MIT License.

## Contributing
This project is not actively accepting contributions at this time.

## Tests
There are no tests written for this application at this time.

## Questions
You can reach me with questions at rtc145@gmail.com or view my github page at https://github.com/Chillaroo.
    


