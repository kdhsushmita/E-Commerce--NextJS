Instructions to Run the Project

1 Download Repository ZIP:

Go to the GitHub repository page.
Click on the "Code" button.
Select "Download ZIP" from the dropdown menu.
Save the ZIP file to your local machine.

2 Extract ZIP File:

Once the download is complete, locate the downloaded ZIP file on your computer.
Right-click on the ZIP file and select "Extract All" or use your preferred unzip utility to extract the contents of the ZIP file.

3 Run the Development Server:

Go back to the root directory of your extracted project.
Start the development server:
npm install
npm run dev

4 Access the Application:

Open your web browser and navigate to http://localhost:3000.

Instructions for Adding and Viewing Products

Setting Up the Database

1 Install MongoDB:

If you haven't already installed MongoDB on your local machine, download and install it from the MongoDB website.

2 Start MongoDB Server:

Open a terminal or command prompt window.
Start the MongoDB server by running the following command:
mongod

3 Create Database:

Open another terminal or command prompt window.
Launch the MongoDB shell by running the following command:
mongo

In the MongoDB shell, create a new database.
use yourDatabaseName


Implementations in the Web App:

1. User Login:
  Implemented user authentication functionality using Next.js authentication libraries.
  Successfully fetched the user's email from the authentication response and maintained it in the application state.
  Ensured that the user's email is prominently displayed in the user interface for subsequent requests, enhancing user experience and providing personalized interactions.

2 List All Products with Pagination:
  Implemented a robust solution to fetch and display all products from the API.
  Incorporated pagination logic to efficiently manage large datasets, ensuring smooth navigation and optimal performance.
  Enhanced the user interface with intuitive pagination controls, allowing users to easily browse through multiple pages of products.

3 Show Product Detail:

  Developed a dedicated product detail page/component to showcase detailed information about each product.  
  Successfully fetched and displayed comprehensive product details, including name, description, price, and any other relevant attributes.
  Implemented intuitive navigation features, allowing users to seamlessly explore product details and make informed decisions.

4 List All Available Product Categories:

  Implemented robust logic to fetch and display all available product categories from the API.
  Presented product categories in an organized and user-friendly manner, enabling users to quickly identify and explore different product categories.
  Implemented functionality to list products by category, facilitating targeted browsing and enhancing the overall shopping experience.

5 Use Pie Chart to Show Product Distribution:

  Integrated a powerful charting library to visualize product distribution by categories.
  Generated an informative pie chart that accurately represents the distribution of products across various categories.
