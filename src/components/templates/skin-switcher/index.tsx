import React, { FC } from 'react';
import SelectorSkinSwitcherTemplate from './selector';
import ModeSkinSwitcherTemplate from './appearance';

const SkinSwitcherTemplate: FC = () => {
  return (
    <>
      <ModeSkinSwitcherTemplate />
      <SelectorSkinSwitcherTemplate />
    </>
  );
};

export default SkinSwitcherTemplate;
