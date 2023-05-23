import './App.css';

function App() {
  return (
    <main id="order">

 
    <div className="">
      <div className="order-wrapper">
        <section className="menu-section">
          <div className="">
            <h2>Menu:</h2>
            <ol className="">
               <li className="menu-item">
                <span><span   className="dish-price">dish.price</span>
                  <span className="">dish.item Cheeseburger</span>
                </span><span className="">
                  <span className="quantity-buttons">
                    <button disabled className="quantity" data-dish="{index}">-</button>
                  </span><span className="quantity">cart.menu[index].quantity</span>
                  <span className="quantity"><button className="quantity" data-dish="{index}" >+</button></span>
                  <span className="amount">cart.menu[index].quantity * cart.menu[index].price</span></span>
              </li>
             </ol>
          </div>
          <div className="total">Total: total </div>
          <button className="order-button"  >Order now</button>
        </section>
        <section className="restaurant-section">
          <h2 className="restaurant-name"> restaurant.name </h2>
          <figure className="">
            <img src="https://content.demo.microfrontends.com{restaurant.imageSrc}" alt="A photo of a burger with fries and a milkshake" className="" />
            <figcaption className=""> restaurant.descriptio </figcaption>
          </figure>
        </section>
      </div>
    </div>
 
</main>
  )
}

export default App;