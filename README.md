# feed-sdk

[![NPM version](https://img.shields.io/npm/v/feed-sdk.svg?style=flat)](https://npmjs.org/package/feed-sdk)
[![NPM downloads](http://img.shields.io/npm/dm/feed-sdk.svg?style=flat)](https://npmjs.org/package/feed-sdk)

A react library developed with dumi

## Usage

```jsx
import { NewsFeed, NewsProvider } from 'feed-sdk';

const API_KEY = '9fca5d7dbd8c4e49af9573cbc80ae902'; // only can use on localhost.
const theme = {
  backgroundColor: '#f5f5f5',
  color: '#333',
};
export default () => (
  <NewsProvider apiKey={API_KEY}>
    <NewsFeed theme={theme} />
  </NewsProvider>
);

//for more http://localhost:8000/components/news-feed
```

## Development

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build

# build library source code in watch mode
$ npm run build:watch

# build docs
$ npm run docs:build

# check your project for potential problems
$ npm run doctor
```

## LICENSE

MIT
