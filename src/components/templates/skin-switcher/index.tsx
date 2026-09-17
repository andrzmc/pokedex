import React, { FC } from 'react';
import SelectorSkinSwitcherTemplate from './selector';
import AppaeranceSkinSwitcherTemplate from './appearance';
import { CardUi } from '@/components/ui/card';

const SkinSwitcherTemplate: FC = () => {
  return (
    <>
      <CardUi
        title="Appearance"
        subtitle="Choose how you want the pokédex to look"
        padding={{ left: 0, right: 0 }}
      >
        <AppaeranceSkinSwitcherTemplate />
      </CardUi>
      <CardUi
        title="Style"
        subtitle="Choose the base color of the pokédex"
        padding={{ left: 0, right: 0 }}
      >
        <SelectorSkinSwitcherTemplate />
      </CardUi>
    </>
  );
};

export default SkinSwitcherTemplate;
