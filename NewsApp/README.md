# Create a web application where users can view news items and also view detailed information about a particular news item.

---------------------------------------------------------------------------
Technical requirements:
---------------------------------------------------------------------------
# React-Routing:
The home page (/) should show a list of news.
Page of detailed information about the news (/news/:id), where :id is the news identifier.

# Redux Toolkit:
Use Redux Toolkit to manage application state.
Create a news slice that will contain the loading status, errors, and news data.
Use createAsyncThunk to download news asynchronously from a remote server.

# Fetch:
Use fetch to fetch news from a public API, such as NewsAPI.
Handle potential errors that may occur during the request.

# Styled-components:
Use styled-components to style your application components.
Make the application responsive for mobile devices and desktops.
Add a theme for the application (light/dark) and a button to switch between these themes.

Tasks:


# Project setup:
Initialize a new project using Create React App.
Install the required packages (react-router-dom, @reduxjs/toolkit, styled-components).

# Routing and components:
Create a NewsList component that will display a list of news items.
Create a NewsDetail component that will display details about the selected news.
Configure routing for these components.
Redux and asynchronous requests:
Create a Redux store and slices.
Implement the logic for loading data via fetch inside createAsyncThunk.
Connect components to the Redux store using useDispatch and useSelector.

# Stylization:
Create basic styles for the application using styled-components.
Implement responsive design.
Add a theme switcher.

# Testing:
Write unit tests for your reducers and components.
