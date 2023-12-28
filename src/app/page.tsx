// @ts-ignore
// use client

import Image from 'next/image'
import styles from './page.module.css'
import CategoryProduct from '@/components/CategoryProduct'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductBanner from '@/components/ProductBanner'
import ProductPage from '@/components/ViewPage'



export default function Home() {
  return (
    <main>
      {/* < CategoryProduct/> */}

      {/* <Footer/> */}

      {/* <Header />
      <ProductBanner categoryName="Electronics" categoryText="Explore the latest gadgets" />
  */}
    <ProductPage productCompany='Apple' productDesc='Super Retina XDR display
6.1-inch (diagonal) all-screen OLED display' productName='iPhone 15' productPrice='NGN 1,050,000'/>
    </main>
  )
}
