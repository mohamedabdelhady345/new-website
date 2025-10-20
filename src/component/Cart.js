function Cart({ cart, DeletItem }) {
  return (
    <div>
      <h2>سلة المشتريات</h2>
      {cart.length === 0 ? (
        <p>السلة فارغه</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.image} width="80px" />
              <p>{item.image}</p>
              <p>{item.price}</p>
              <button onClick={() => DeletItem(item.id)}>امسح المنتج</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Cart;
