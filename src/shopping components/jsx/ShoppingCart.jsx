import { Button, Container, Table } from "react-bootstrap";
import "../css/shoppingCart.css";

import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import PageFooter from "../../LandPage/jsx/PageFooter";
function ShoppingCart() {
  const url = import.meta.env.VITE_APP_URL
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const remove = (id) => {
    removeItem(id);
  };
  if (isEmpty)
    return (
      <div className='containers'>
        <p>Your cart is empty</p>;
      </div>
    );
  return (
    <>
    <div className='containers'>
      <div id='no-more-tables'>
        <h2>shopping cart</h2>
        <h1>Cart ({totalUniqueItems})</h1>
        <Table striped>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>image</th>
              <th scope='col'>item</th>
              <th scope='col'>price</th>
              <th scope='col'>Sub</th>
              <th scope='col'>QTY</th>
              <th scope='col'>Add</th>
              <th scope='col'>TOTAL</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td data-title='#'>{index + 1}</td>
                <td data-title='image'>
                  <img src={url + item.image} width={40} height={50} />
                </td>
                <td data-title='item' scope='row'>
                  {item.title}
                </td>

                <td data-title='price'>{item.price}</td>

                <td data-title='Sub'>
                  <Button
                    className='btn'
                    variant='danger'
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </Button>
                </td>
                <td data-title='QTY'>{item.quantity}</td>
                <td data-title='Add'>
                  <Button
                    className='btn '
                    variant='dark'
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </td>
                <td data-title='TOTAL'>{item.itemTotal}</td>

                <td>
                  <Button
                    className='btn remove'
                    variant='danger'
                    onClick={() => remove(item.id)}
                  >
                    remove items
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={2}></td>
              <td colSpan={5}>total coast</td>
              <td colSpan={1}>{cartTotal}</td>
              <td colSpan={1}>
                <Button
                  onClick={emptyCart}
                  variant='danger'
                  className='btn remove'
                >
                  clear cart{" "}
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

    </div>
       <PageFooter style={{ zIndex: 90 }} /></>
  );
}

export default ShoppingCart;
