import React, { memo } from 'react';
import { css } from '@emotion/react';
import Icon from '~/components/Icon';

const CarouselButton: React.FC<{
  onLeftClick: () => void;
  onRightClick: () => void;
}> = memo(({ onLeftClick, onRightClick, ...others }) => (
  <div
    css={css`
      > div {
        cursor: pointer;
        border-radius: 50%;
        width: ${48 / FONT_BASE}rem;
        height: ${48 / FONT_BASE}rem;
      }
    `}
    {...others}
  >
    <div
      onClick={onLeftClick}
      css={css`
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.3);
        &:hover {
          background: rgba(0, 0, 0, 1);
        }
      `}
    >
      <Icon
        css={css`
          position: absolute;
          top: 50%;
          left: 44%;
          transform: translate(-50%, -50%);
          width: ${24 / FONT_BASE}rem;
          height: ${24 / FONT_BASE}rem;
        `}
        code="1111"
      />
    </div>

    <div
      onClick={onRightClick}
      css={css`
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.3);
        &:hover {
          background: rgba(0, 0, 0, 1);
        }
      `}
    >
      <Icon
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${24 / FONT_BASE}rem;
          height: ${24 / FONT_BASE}rem;
        `}
        code="1111"
      />
    </div>
  </div>
));

export default CarouselButton;
