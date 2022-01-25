import { css } from '@emotion/react';
import { times } from 'lodash';
import React from 'react';
import Carousel from '~/components/Carousel';

const Home = React.memo(() => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        padding: 1rem;
      `}
    >
      <Carousel
        otherCss={css`
          height: 300px;
        `}
        showNumber={4}
        childSpace="1rem"
      >
        {times(10).map((item) => (
          <div
            key={item}
            css={css`
              background: #ddd;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: space-around;
            `}
          >
            {item + 1}
          </div>
        ))}
      </Carousel>
    </div>
  );
});

export default Home;
