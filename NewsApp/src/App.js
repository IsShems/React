import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewsList } from './NewsList';
import { useDispatch, useSelector } from 'react-redux';
import { FetchNews } from './store/reducer';
import './App.css';
import { useEffect, useState } from 'react';
import NewsDetail from './NewsDetail';
import Header from './Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  let newsArr = useSelector((state) => state.news.newsArr);
  const loading = useSelector((state) => state.news.isLoading);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
  newsArr = dispatch(FetchNews());
  }, [dispatch]);

  if (error === true) {
    return <p>...ERROR</p>;
  }
  if (loading === true) {
    return <p>...LOADING</p>;
  }


  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} newsArr={newsArr.articles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsList newsArr={newsArr.articles} />}/>
          <Route path="details/:id" element={<NewsDetail newsArr={newsArr.articles} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
