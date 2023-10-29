import React from 'react'
import NftCart from 'shared/ui/NftCart'

const DiscoverMoreNftSection = ({ data }: any) => {
  return (
    <section>
      discover more nfts sections
      <NftCart {...data} />
    </section>
  )
}

export default DiscoverMoreNftSection
