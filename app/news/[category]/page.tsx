import { categories } from '../../../constants';
import fetchNews from '../../../lib/fetchNews';
import NewsList from '../../NewsList';

interface IProps {
  params: { category: Category };
}
const NewsCategory = async ({ params: { category } }: IProps) => {
  const news = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}