import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import FakeStoreApi from '../../_api/FakeStoreApi';


const Products = ()=>{
    // FakeStoreApi
    const [productsData,setProductsData ] = useState([])
    const getTheProductsData = async()=>{
       const { data} = await FakeStoreApi.get('/products');
       console.log(data)
       setProductsData(data);
    }
    useEffect(()=>{
     getTheProductsData()
    },[])
    return(
        <section>
            <section className="container py-3">

              <section className="row">
                  {
                      productsData && productsData.length>0 && productsData.map((product)=>(
                         <section className="col-md-3" key={product.id}>
                             <Link to={`/product/${product.id}`}>
                             <section className="card my-2 text-dark">
                                 <img src={product.image} alt={product.title} className="card-img-top img-fluid" />
                                  <section className="card-body">
                                      <h4 className="card-title">{product.title}</h4>
                                      <p className="product__category">{product.category}</p>
                                  </section>
                             </section>
                             </Link>
                         </section> 
                      ))
                  }
              </section>
            </section>
            
        </section>
    )
}

export default Products;

// there are two types of exports, can you name them