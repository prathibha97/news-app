import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';

const HomePage = async () => {
  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(','));
  console.log(news);
  return <div>{/* newsList */}</div>;
};

export default HomePage;
