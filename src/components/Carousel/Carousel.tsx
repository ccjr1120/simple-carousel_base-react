import React, { useMemo, useCallback, useState, memo } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { uniqueId } from 'lodash';
import CarouselButton from './CarouselButton';

const Carousel: React.FC<{
  childSpace: string;
  showNumber: number;
  otherCss: SerializedStyles;
}> = memo(({ children, childSpace = '1rem', showNumber = 4, otherCss }) => {
  // 规划子元素
  const childrenList = useMemo(() => {
    const childArray = React.Children.toArray(children);
    //最后一页不足showNumber，复制前一页相应的个数补充
    const r = childArray.length % showNumber;
    if (r !== 0) {
      childArray.splice(-r, 0, ...childArray.slice(-showNumber, -r));
    }
    //复制起始的元素补充新的最后一页
    childArray.push(...childArray.slice(0, showNumber));
    //复制末尾的元素(倒数第二页)补充到新的第一页
    childArray.unshift(...childArray.slice(-showNumber * 2, -showNumber));
    return childArray.map((item) => ({ ele: item, _id: uniqueId('_') }));
  }, [children, showNumber]);

  const childWidth = useMemo(
    () => `calc(${(1 / showNumber) * 100}% - ${childSpace})`,
    [showNumber, childSpace]
  );

  // 更新left实现轮播效果
  const [targetLeft, setTargetLeft] = useState('-100%');
  const handleBtnClick = useCallback(
    (action) => {
      // action? leftBtn:rightBtn
      let rollWidth = 0;
      const roll = () => {
        const stepRadio = action ? -10 : 10;
        rollWidth += 1;
        if (rollWidth <= 10) {
          setTargetLeft((v) => {
            const curValue = parseInt(v, 10) + stepRadio;
            const pageNumber = childrenList.length / showNumber;
            // 到了最后一页后，回到第一页
            if (curValue <= -(pageNumber - 1) * 100) {
              return '-100%';
            }
            // 到了第一页后，回到倒数第二页(倒数第二页的数据即是最末尾的数据)
            if (curValue === 0) {
              return `-${(pageNumber - 2) * 100}%`;
            }
            return `${curValue}%`;
          });
          requestAnimationFrame(roll);
        }
      };
      requestAnimationFrame(roll);
    },
    [childrenList, showNumber]
  );
  return (
    <div
      css={css`
        overflow: hidden;
        position: relative;
        padding: ${16 / FONT_BASE}rem 1rem 0;
        ${otherCss}
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          position: absolute;
          left: ${targetLeft};
          display: flex;
        `}
      >
        {childrenList.map((item) =>
          React.cloneElement(item.ele as React.ReactElement, {
            style: {
              flexShrink: 0,
              width: childWidth,
              marginLeft: childSpace,
            },
            key: item._id,
          })
        )}
      </div>
      <CarouselButton
        onLeftClick={() => {
          handleBtnClick(false);
        }}
        onRightClick={() => {
          handleBtnClick(true);
        }}
      />
    </div>
  );
});

export default Carousel;
