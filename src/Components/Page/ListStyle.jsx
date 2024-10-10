import React from 'react'
import Container from '../Layer/Container'
import VerticalProductCard from '../VerticalProductCard'

import product9 from '/Product/product 9.png'

const ListStyle = () => {
  return (
    <div>
        <Container>
            <VerticalProductCard  src={product9} pName='Basic Crew Neck Tee' price='$44.00' colour='Black' offer='New'/>
        </Container>

    </div>
  )
}

export default ListStyle