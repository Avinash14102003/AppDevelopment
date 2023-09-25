import React from 'react';
import { Link } from 'react-router-dom';

const Hotels = () => {

    const products = [
        {
          name: 'Hotel A',
          price: '$25.99',
          imageSrc: 'https://www.holidify.com/images/cmsuploads/compressed/151915519_20220511215707.jpg',
        },
        {
          name: 'Hotel V',
          price: '$19.99',
          imageSrc: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/e9/f0/0f/exterior.jpg',
        },
        {
          name: 'Hotel I',
          price: '$19.99',
          imageSrc: 'https://www.vivantahotels.com/content/dam/vivanta/hotels/VBT-Surya_Coimbatore/images/Quick_Peek/Facade_16x7.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
        },
        {
          name: 'Hotel N',
          price: '$19.99',
          imageSrc: 'https://daahy6akrtcj2.cloudfront.net/hotelsincoimbatore.net/logos/vivanta_by_taj_surya.jpg',
        },
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
    <div class="footer">2023 E-Restaurant</div>
    <Link to="/privacy">
    
    <div class="footer-r">
     <Link to="/privacy"> Privacy&Policy</Link>
      <Link to="/faq">FAQ</Link><Link to="/terms">Terms</Link>
      </div>
</Link>
        
    </footer>
    </div>
  )
}

export default Hotels