import React, { FC } from 'react';
import SelectorSkinSwitcherTemplate from './selector';
import AppaeranceSkinSwitcherTemplate from './appearance';

const SkinSwitcherTemplate: FC = () => {
  return (
    <>
      <AppaeranceSkinSwitcherTemplate />
      <SelectorSkinSwitcherTemplate />
    </>
  );
};

export default SkinSwitcherTemplate;
