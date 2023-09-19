/*Refine the shopping total calculator to include a product list that can be dynamically loaded.
Utilize an asynchronous function called getProducts() to retrieve the list of products.
Incorporate data loading into the component. Data should only be loaded once during the initial rendering of the component.*/

//Product.jsx
const Product = (props) => {
  const {
    product,
    countProduct,
    handleIncrement,
    handleDecrement,
  } = props;
  const { name, id, price } = product;

  return (
    <li data-testid={id} key={id}>
      <div className="col-2 ">
        {`${name}. Price: ${price} р.`}
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" data-testid={`decrement-${id}`} type="button" onClick={() => handleDecrement(product)}>-</button>
        </div>
        <input type="number" value={countProduct || ''} disabled placeholder="0" className="col-1" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" data-testid={`increment-${id}`} type="button" onClick={() => handleIncrement(product)}>+</button>
        </div>
      </div>
      <hr />
    </li>
  );
};

//products.json 
[
  {
    "name": "Bread",
    "id": 1,
    "price": 25,
    "count": 0
  },
  {
    "name": "Milk",
    "id": 2,
    "price": 45,
    "count": 0
  },
  {
    "name": "Tea",
    "id": 3,
    "price": 150,
    "count": 0
  }
]

//utils.js

export default async () => {
  const response = await fetch('/src/products.json');
  return response.json();
};

//Products.jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Product from './Product.jsx';
import getProducts from './utils.js';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [countProducts, setCountProducts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = ({ id, price }) => {
    const count = countProducts[id] ?? 0;
    setTotalPrice(totalPrice + price);

    const newCountProducts = { ...countProducts, [id]: count + 1 };
    setCountProducts(newCountProducts);
  };

  const handleDecrement = ({ id, price }) => {
    const count = countProducts[id] ?? 0;
    if (count === 0) {
      return;
    }
    setTotalPrice(totalPrice - price);

    const newCountProducts = { ...countProducts, [id]: count - 1 };
    setCountProducts(newCountProducts);
  };

  useEffect(() => {
    const requestData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    requestData();
  }, []);

  return (
    <>
      <ul data-testid="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            countProduct={countProducts[product.id]}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </ul>
      <div>
        {`Total price: ${totalPrice}`}
      </div>
    </>
  );
};

ReactDOM.render(<Products />, document.getElementById("container"));
