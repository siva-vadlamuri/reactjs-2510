import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/ProductActions/ProductActions";
import FakeStoreApi from "../../_api/FakeStoreApi";
import loader from '../../assets/images/loader.gif'



function Product() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const productState = useSelector((state)=>state)
  console.log(productState)
  const [productDetail, setProductDetail] = useState({});

  const getTheProductDetailPage = async () => {
    const { data } = await FakeStoreApi.get(`/products/${id}`);
    setProductDetail(data);
  };
  useEffect(() => {
    getTheProductDetailPage();
  }, []);
  return (
    <section className="container">
      
      { Object.keys(productDetail).length>0?(<section className="row border border-primary mt-2">
        <section className="col-md-6 pt-3">
          <section className="productDetail__img_section">
            <img
              src={productDetail?.image}
              alt={productDetail?.title}
              className="img-fluid p-4"
            />
          </section>
        </section>
        <section className="col-md-6 border-start border-primary border">
          <section className="product__title mt-2">
            <h3 className="p-2">{productDetail.title}</h3>
            <section className="product_price">
              <span className="bg-info text-light p-1">
                price $:{productDetail.price}
              </span>
            </section>
            <section className="product__category pt-2">
                <p>Category: {productDetail.category}</p>
            </section>
            <section className="product__desc p-3">
                <p className="p-2">{productDetail.description}</p>
            </section>
            <section className="product__add_to_cart mt-3">
              {console.log(addToCart(productDetail))}
                <button className="btn btn-info px-3 py-2 text-light" onClick={()=>{dispatch(addToCart(productDetail))}}>Add to cart</button>
            </section>
          </section>
        </section>
      </section>):<section>
               <img src={loader} alt="Loader Image"/>
        </section> }
      
    </section>
  );
}

export default Product;
