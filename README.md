# GenZon

GenZon is a full stack eCommerce app that allows users to sell and buy products they like. In GenZon you can find any kind of items, either by searching the item's name in the search bar or by scrolling through the specific category page that you think your item belongs to. Currently, GenZon has only 5 catergories, Electronics, Fashion, Furniture, Food and Hobby. 

## Application Architecture

Genzon is built on a React frontend with a Flask backend, using PostgreSQL as a database. 

## Frontend Overview

GenZon's does the majority of its applcation logic and validations on the backend, but display/interaction logic on the frontend is managed using several technologies.

### Frontend Technologies Used

#### React ![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

GenZon is a React application. All display logic is handled by the React libraries.

#### Redux ![alt text](https://redux.js.org/img/redux-logo-landscape.png)

All state management in GenZon is handled with Redux, with thunks making API calls to the backend server to handle the data.

## Backend Overview

GenZon uses a Flask server with a Postgresql database.

### Backend Technologies Used

#### Flask

The ability to play with the data so easly made Flask very efficent for me to use creating GenZon. 

#### PostgreSQL

PostgreSQL was the database of choice because it is simple to work with, and is easily manipulable using Sequelize.

#### WTForms

WTForms made it very easy for me to implemetn validators into my app. 

#### SQLAlchemy

SQLAlchemy was the ORM of choice for GenZon. It made data seeding so easy.



