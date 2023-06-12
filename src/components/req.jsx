shopClick({ target }) {
    const { shopCart } = this.state;
    const { key, title, price, thumbnail } = target;
    const itemCart = { key, title, price, thumbnail };
    shopCart.push(itemCart);
    console.log(shopCart);
  }

  <button
  type="button"
  data-testid="product-add-to-cart"
  onClick={ shopClick }
>
  Comprar
</button>