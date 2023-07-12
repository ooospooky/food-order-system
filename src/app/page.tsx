import styles from './page.module.scss'
import { products, category } from './components/products'
import ProductCard from './components/mui/card'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {category.map((cate) => {
          return (
            <div key={cate}>
              <h2>{cate}</h2>
              <div className={styles.productsWarper}>
                {products.map((product) => {
                  if (product.category === cate) {
                    return (
                      <div key={product.id}>
                        <ProductCard product={product} />
                      </div>
                    )
                  }
                })}
              </div>
            </div>)
        })}
      </div>
    </main>
  )
}
