import React from 'react'
const ProductCard = ({item,onclick}) => {
  return (
    <div>
      
        <p>{item.title}</p>
        <button onClick={onclick}>buttons</button>
    
    </div>
  )
}

export default ProductCard