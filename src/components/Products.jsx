import React from 'react'
import ProductItem from './ProductItem'

const Products = ({products}) => {
    console.log(products)
  return (
    <div className='p-5'>
        <h1 className="text-[25px] font-bold text-center mb-5">Checkout All <span className='text-rose-400'>Exclusive</span> Products</h1>
        <div className='flex flex-wrap justify-center gap-5'>
            {products.map(product=><ProductItem key={product.id} description={product.description} id={product.id} amount={product.amount} title={product.title} image={product.image} rating={product.rating}/> )}
        </div>
    </div>
  )
}

export default Products