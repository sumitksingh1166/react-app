import React, { useState } from 'react'
import smartphones from './dummyData';

const ProductList = () => {

    const [productData,setProductData] = useState(smartphones);

    const brands =['samsung','OnePlus','Apple',]

    const displayProducts = () => {
        return productData.map((phone) => {
            return <div className='col-md-3 mb-4'>
                <div className='card'>
                    <img style ={{height :'200px',objectFit:'cover'}} className='card-img-top' src = {phone.img} alt ="" />
                    <div className='card-body'>
                        <h5>{phone.brand}</h5>
                        <h3>{phone.model}</h3>
                        <h2>{phone.price}</h2>
                    </div>
                </div>
            </div>
        })

    };

    const searchProduct = (e) => {
        const search = e.target.value;
        setProductData(
            smartphones.filter((phone) => {return phone.brand.toLowerCase().includes(search.toLowerCase())})
        );
    };

    const filterBrands = (e) => {
        const search = e.target.value;
        setProductData(
            smartphones.filter((phone) => {
                return phone.brand ===search;
            })
        )
    }



    return (
        <div>
        <header className='bg-body-secondary'>
            <div className='container py-5'>
                <h1 className='text-center'>Product List Page</h1>
                <input  onChange ={searchProduct} type="text" className='form-control form-control-lg' placeholder = 'search product Name...' />
                <select onChange={filterBrands}>
                    {brands.map((brand) => (
                        <option value={brand}>{brand}</option>
                    ))}

                </select>
            
            </div>
        </header>
        <div className='container'>
            <div className='row'>
                {displayProducts()}
            </div>

        </div>
        </div>
    )
}

export default ProductList;