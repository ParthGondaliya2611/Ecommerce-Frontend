import React from 'react'
import Layout from './Layout'
import ProductList from '../../features/product/ProductList'

const AllProductPage = () => {
  return (
    <Layout title="All-Products Ecommerce">
        <ProductList/>
    </Layout>
  )
}

export default AllProductPage