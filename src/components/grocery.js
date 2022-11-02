import React, { useState} from 'react';
import { Box, Container } from '@mui/material';
import Products from './products';

const Grocery = () => {
    const [products, setProducts] = useState([
        {
          "id": "C2-00",
          "name": "Mustard seeds",
          "price": 80,
          "unit": "150 gms",
          "image": "http://img1.exportersindia.com/product_images/bc-small/dir_54/1611062/mustard-seeds-1208829.jpg"
        },
        {
          "id": "C2-01",
          "name": "Pepper",
          "price": 120,
          "unit": "100 gms",
          "image": "http://img1.exportersindia.com/product_images/bc-small/dir_23/674664/black-pepper-seed-1680115.jpg"
        },
        {
          "id": "C2-02",
          "name": "Cumin seeds/jeera",
          "price": 180,
          "unit": "100 gms",
          "image": "http://puritytest.in/public/img/product_images/jeera1_1_1.jpg"
        },
        {
          "id": "C2-03",
          "name": "Poppy seeds/Khus khus",
          "price": 180,
          "unit": "100 gms",
          "image": "http://img1.exportersindia.com/product_images/bc-small/dir_113/3382222/2-khas-khas-poppy-seeds-2203115.jpg"
        },
        {
          "id": "C2-04",
          "name": "Coriander seeds/Dhania",
          "price": 180,
          "unit": "100 gms",
          "image": "http://img1.exportersindia.com/product_images/bc-small/dir_105/3122483/watermark/eagle-coriander-seeds-1201536.jpg"
        },{
          "id": "C2-05",
          "name": "Fennel seeds",
          "price": 180,
          "unit": "50 gms",
          "image": "http://img1.exportersindia.com/product_images/bc-small/dir_115/3440565/fennel-seeds-1693027.jpg"
        },{
          "id": "C2-06",
          "name": "Dry ginger piece or powder",
          "price": 180,
          "unit": "100 gms",
          "image": "http://img1.exportersindia.com/product_images/bc-small/dir_62/1835594/ginger-powder-677521.jpg"
        }
      ])

    return (
        <>
            <Products products={products} />
        </>
        
    )
}

export default Grocery