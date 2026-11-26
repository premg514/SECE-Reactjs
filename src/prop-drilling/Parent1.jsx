import ProductContext from './ProductContext'
import Parent2 from './Parent2'

export default function Parent1() {
  const data = 'Data of products'

  return (
    <ProductContext.Provider value={data}>
      <div>
        <h1>Parent 1</h1>
        <Parent2 />
      </div>
    </ProductContext.Provider>
  )
}
