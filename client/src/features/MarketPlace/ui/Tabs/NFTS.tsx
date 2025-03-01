import { FC, PropsWithChildren } from 'react';
import { INFT } from 'shared/types';
import LayoutForSection from 'shared/ui/LoyautForSection';
import NftCart from 'shared/ui/NftCart';

export const NFTS: FC<PropsWithChildren<{ nfts: INFT[] }>> = ({
  children,
  nfts
}) => {
  console.log({ nfts });
  return (
    <div>
      <LayoutForSection isHeader={false}>
        {nfts?.map((nft) => {
          //@ts-ignore
          return <NftCart {...nft} />;
        })}
      </LayoutForSection>
    </div>
  );
};
