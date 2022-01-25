import { css } from '@emotion/react';
import React from 'react';
import CharacterLogo from './CharacterLogo';
import NavItem from './NavItem';
interface navBarProps {
  pageList: Array<pageType>;
}
const NavBar: React.FC<navBarProps> = React.memo(({ pageList }) => {
  return (
    <div>
      <div
        css={css`
          height: ${112 / FONT_BASE}rem;
          background: rgba(0, 0, 0, 0.95);
        `}
      >
        <CharacterLogo />
      </div>
      <div>
        {pageList.map((item) => (
          <NavItem key={item.path} page={item} />
        ))}
      </div>
    </div>
  );
});

export default NavBar;
