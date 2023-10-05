import React from 'react';
import { Link } from 'react-router-dom';

const Rooms = () => {

    const products = [
        {
          name: 'Room A',
          price: '$25.99',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkhtq61RC8csyAyZ5gTNnr4CBJqh8iXsu38EIBvW-pcamCfNGZ9rPSctpUlawn7bds24&usqp=CAU',
        },
        {
          name: 'Room V',
          price: '$30.00',
          imageSrc: 'https://housing.com/news/wp-content/uploads/2022/11/image1-53.jpg',
        },
        {
          name: ' I',
          price: '$20.00',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbUClo9mHtEeHCy8KItcrg-viZqz33MWeiA&usqp=CAU',
        },
       
        // Add more products here
      ];
  return (
    <div>

<header>
        <h1>Bookmystay Dashboard</h1>
    </header>
    <aside class="sidebar">
        <nav>
            <ul>
                <br/><br/><br/><br/><br/>
                <li><Link to="/tdash">Dashboard</Link></li>
                <li><Link to="/order">Orders</Link></li>
                <li><Link to="/Hotels">Hotels</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    </aside>
    <div className="transparent-container">
    
      
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <img src={product.imageSrc} alt={product.name} />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">{product.price}</p>
          <p className="product-features">{product.features}</p>
        </div>
      ))}
    </div>
  
</div>

    <script src="script.js"></script>
    <footer>
    <div class="footer">2023 Bookmystay</div>
    
    
    <div class="footer-r">
     <Link to="/privacy"> Privacy&Policy</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/terms">Terms</Link>
      </div>

        
    </footer>
    </div>
  )
}

export default Rooms