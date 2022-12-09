import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import response from '../response.json';
import NewsList from './NewsList';

const HomePage = async () => {
  // fetch news data
  const news: NewsResponse =
    response //|| (await fetchNews(categories.join(',')));
  // set timeout for 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
