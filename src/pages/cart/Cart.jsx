import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const productState = useSelector((state)=>state)
    // console.log(productState)
   const cartData = productState?.productsData?.cartData
   const totalPrice = cartData.reduce((total,item)=>{
       return parseInt(total) + parseInt(item.price)
   },0)
   console.log(cartData)
  return (
    <section>
    <section className="container mt-3 border border-black">
        {
            cartData && cartData.length>0?(
                <section className="container my-3">
                    <h3>Total Price:{totalPrice}</h3>
                </section>
            ):null
        }
        { cartData && cartData.length>0?(
            cartData.map((item)=>(
                <section className="row mt-5">
                    <section className="col-md-4">
                        <img style={{height:"250px"}} src={item.image} alt={item.title} className="img-fluid" />
                    </section>
                    <section className="col-md-6">
                        <section className="p-2">
                            <h3 className="my-2">{item.title}</h3>
                             <p className="py-4">{item.description}</p>
                        </section>
                    </section>
                    <section className="col-md-2">
                        <section className="my-5">
                            <span className="d-block my-5">Price $ : {item.price}</span>
                        </section>
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