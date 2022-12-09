import fetchNews from '../../lib/fetchNews';
import NewsList from '../NewsList';
// import response from '../../response.json'

interface IProps {
  searchParams?: { term: string };
}

const SearchPage = async ({ searchParams }: IProps) => {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
