import React from 'react'
import LoyautForSection from 'shared/ui/LoyautForSection'
import NftCart from 'shared/ui/NftCart'

const DiscoverMoreNftSection = ({ data }: any) => {
  return (
    <section>
      <LoyautForSection>
        <NftCart {...data} />
        <NftCart {...data} />
        <NftCart {...data} />
      </LoyautForSection>
    </section>
  )
}

export default DiscoverMoreNftSection
