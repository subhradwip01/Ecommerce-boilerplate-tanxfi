import React from 'react'
import ProductItem from './ProductItem'

const Products = ({products,query}) => {
    console.log(products)
  return (
    <div className='p-5'>
        <h1 className="text-[25px] font-bold text-center mb-5">{query.length==0 ? "Checkout All" : "Searched for"} <span className='text-rose-400'>{query.length === 0 ? "Exclusive" : `"${query}"`}</span> {query.length === 0 && "Products"}</h1>
        <div className='flex flex-wrap justify-center gap-5'>
            {products.map(product=><ProductItem key={product.id} description={product.description} id={product.id} amount={product.amount} title={product.title} image={product.image} rating={product.rating}/> )}
        </div>
    </div>
  )
}

export default Products