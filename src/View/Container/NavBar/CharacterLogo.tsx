import { css } from '@emotion/react';
import React from 'react';

const CharacterLogo = React.memo(() => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: ${32 / FONT_BASE}rem;
        font-weight: 900;
        display: flex;
        align-items: center;
        justify-content: space-around;
      `}
    >
      <div
        css={css`
          display: flex;
          border-bottom: 1px solid #fff;
        `}
      >
        <span
          css={css`
            transform: rotate(45deg);
          `}
        >
          T
        </span>
        <span>A</span>
        <span
          css={css`
            transform: rotate(-45deg);
          `}
        >
          T
        </span>
      </div>
    </div>
  );
});

export default CharacterLogo;
