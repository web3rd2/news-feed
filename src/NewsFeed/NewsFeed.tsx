import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useNews, type Article } from './NewsProvider';

type NewsFeedProps = {
  /**
   * @description theme set  backgroundColor and color
   */
  theme: {
    backgroundColor: string;
    color: string;
  };
  /**
   * @description custome children compent
   */
  children?: (article: Article) => ReactNode;
};

export type LayoutProps = {
  isHorizontal: boolean;
};

export const LayoutWrapper = styled.div<LayoutProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props: LayoutProps) =>
    props.isHorizontal ? 'row' : 'column'};
`;

const LoadMoreButton = styled.button`
  margin: 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
`;
export const Headline = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 10px 0;
`;
export const NewsFeed: React.FC<NewsFeedProps> = ({ theme, children }) => {
  const { articles, isLoading, error, loadMore } = useNews();

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LayoutWrapper isHorizontal={true}>
        {articles.map((article: Article) => {
          if (children) {
            return children(article);
          }
          return (
            <CardWrapper key={article.title}>
              <Headline>{article.title}</Headline>
              <Description>{article.description}</Description>
              <p>publishedAt: {article.publishedAt}</p>
              <a href={article.url}>more</a>
            </CardWrapper>
          );
        })}
      </LayoutWrapper>
      {isLoading && <div>loading news...</div>}
      {error && <div>error: {error}</div>}
      {!isLoading && (
        <LoadMoreButton type="button" onClick={loadMore}>
          load more
        </LoadMoreButton>
      )}
    </div>
  );
};
