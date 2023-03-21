import axios from 'axios';
import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

type NewsContextT = {
  articles: Article[];
  loadMore: () => void;
  isLoading: boolean;
  error: string;
};

const NewsContext = createContext<NewsContextT>({
  articles: [],
  loadMore: () => {},
  isLoading: false,
  error: '',
});

type Props = {
  /**
   * @description newsapi key
   */
  apiKey: string;
  /**
   * @description pageSize
   * @default 10
   */
  pageSize?: number;
  /**
   * @description newsapi category
   * @default general
   */
  initialCategory?: string;
  /**
   * @description
   */
  children: ReactElement;
};

export const NewsProvider: React.FC<Props> = ({
  apiKey,
  pageSize = 10,
  initialCategory = 'general',
  children,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchNews = async (page: number = 1) => {
    try {
      setIsLoading(true);
      setError('');
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${initialCategory}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`,
      );
      setArticles((prevArticles) => [...prevArticles, ...data.articles]);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [initialCategory, apiKey]);

  const loadMore = () => {
    fetchNews(Math.ceil(articles.length / pageSize) + 1);
  };
  return (
    <NewsContext.Provider value={{ articles, error, isLoading, loadMore }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('need inside NewsProvider');
  }
  return context;
};
