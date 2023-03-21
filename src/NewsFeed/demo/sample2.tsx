/**
 * iframe: true
 * compact: true
 * title: customer rending
 * description: Render using the customer method
 */
import {
  CardWrapper,
  Headline,
  NewsFeed,
  NewsProvider,
  type Article,
} from 'feed-sdk';

const API_KEY = '9fca5d7dbd8c4e49af9573cbc80ae902';
const theme = {
  backgroundColor: '#f5f5f5',
  color: '#333',
};
export default () => (
  <NewsProvider apiKey={API_KEY}>
    <NewsFeed theme={theme}>
      {(article: Article) => {
        return (
          <CardWrapper key={article.title}>
            <Headline>{article.title}</Headline>
            <p>发布: {article.publishedAt}</p>
            <a href={article.url}>点击查看</a>
          </CardWrapper>
        );
      }}
    </NewsFeed>
  </NewsProvider>
);
