import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../redux/UserSlice'





const Tdashboard = () => {
 const user=useSelector(selectUser);
 const email=user.user && user.user.email?user.user.email:'Guest';

    
  return (
    <div>
            <header>
        <h1>welcome {email} </h1>
       
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



   
    <div className="dashboard-container">
        <h1>Welcome to Your Dashboard</h1>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h2>Orders</h2>
            <p>2,500</p>
          </div>
          <div className="stat-card">
            <h2>Revenue</h2>
            <p>$15,0000</p>
          </div>
          <div className="stat-card">
            <h2>Customers</h2>
            <p>500</p>
          </div>
        </div>
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>Received a new order from our customer</li>
            <li>total orders: 100</li>
            <li>New customer registered</li>
          </ul>
        </div>
      </div>

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

export default Tdashboard