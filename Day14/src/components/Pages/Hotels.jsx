import React from 'react';
import { Link } from 'react-router-dom';

const Hotels = () => {

    const products = [
        {
          name: 'Hotel A',
          price: '$25.99',
          imageSrc: 'https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1549888553/Hotel/New%20Delhi/00001732/Overview_vigQZC.jpg',
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