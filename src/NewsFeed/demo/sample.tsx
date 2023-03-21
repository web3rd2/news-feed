/**
 * iframe: true
 * compact: true
 * title: sample usage
 * description: Render using the default method
 */
import { NewsFeed, NewsProvider } from 'feed-sdk';

const API_KEY = '9fca5d7dbd8c4e49af9573cbc80ae902';
const theme = {
  backgroundColor: '#f5f5f5',
  color: '#333',
};
export default () => (
  <NewsProvider apiKey={API_KEY}>
    <NewsFeed theme={theme} />
  </NewsProvider>
);
