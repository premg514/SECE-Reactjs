import { useContext } from 'react'
import ProductContext from './ProductContext'

export default function Child() {
  const data = useContext(ProductContext)

  return (
    <div>
      <h2>Child</h2>
      <p>{data}</p>
    </div>
  )
}
