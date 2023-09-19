# Loading news using useEffect

Create an application in React that will display a list of news headlines.

When the application starts, it should automatically download the latest news from any public news API 
(for example, [NewsAPI](https://newsapi.org/)).

1. Use the useEffect hook to make a request to the API and load news when the component is mounted.
2. Keep the loaded news in a state using the useState hook.
3. Display news on the page.
4. Ensure that any side effects (such as active network requests) are cleaned up when the component is unmounted to avoid potential memory leaks or other problems.
