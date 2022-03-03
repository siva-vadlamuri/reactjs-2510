import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const productState = useSelector((state)=>state)
    // console.log(productState)
   const cartData = productState?.productsData?.cartData
   console.log(cartData)
  return (
    <section>
    <section className="container mt-3 border border-black">
        { cartData && cartData.length>0?(
            cartData.map((item)=>(
                <section className="row mt-2">
                    <section className="col-md-4">
                        <img src={item.image} alt={item.title} className="img-fluid" />
                    </section>
                </section>
            ))
        ):(
            <p>Please add some products</p>
        ) }
    </section>
    </section>
  )
}

export default Cart