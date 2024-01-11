// import Image from 'next/image'
// import styles from './page.module.css'
import { Box } from '@chakra-ui/react'
import CategoryBox from '@/components/CategoryBox'
// import ProductCatalogue from './product-catalogue/page'

export default function Home() {
  return (
    <Box>
      <a href='/product-catalogue'> Products</a>
      <CategoryBox categoryName={'Groceries'} categoryImage={''} />
    </Box>
  )
}