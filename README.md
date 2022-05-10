# GenZon

GenZon is a full stack eCommerce app that allows users to sell and buy products they like. In GenZon you can find any kind of items, either by searching the item's name in the search bar or by scrolling through the specific category page that you think your item belongs to. Currently, GenZon has 5 catergories, Electronics, Fashion, Furniture, Food and Hobby. 

## Application Architecture

Genzon is built on a React frontend with a Flask backend, using PostgreSQL as a database. 

## Frontend Overview

GenZon does the majority of its applcation logic and validations on the backend, but display/interaction logic on the frontend is managed using several technologies.

### Frontend Technologies Used

#### React 

GenZon is a React application. All display logic is handled by the React libraries.

#### Redux 

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


## Screenshots

### Shopping Cart
  In this page you can see the items you have added into your shopping cart. You can see the amount of the items you are buying you can increase and decrease the amount from within the shopping cart. You may choose to remove one item or you may choose to remove all the items at once from your shopping cart. If you want to proceed with the purchase you may click the yellow button on the right to checkout. 
  
![image](https://user-images.githubusercontent.com/61038486/165029910-3fd5ca81-72af-4a13-a3f5-d761d76bd3e8.png)

### Home Page 

![image](https://user-images.githubusercontent.com/61038486/165030250-657fc73c-850b-4ce9-8892-35137ddf02e0.png)


### Your Products Page
  This is the page where you can manage all your items. You may update or delete the item you created from within this page.

![image](https://user-images.githubusercontent.com/61038486/165030311-7169a8b1-3150-4e35-acf5-f0fa8d2b9675.png)


## Conclusion and Next Steps

I'm satisfied with the funcinality of my website. However, I'm still not satisfied with my overall design. My forms are not very good looking right now, so I would like to take my time to work on the css of the site. Also, I would like to finish the orders feature soon. 

