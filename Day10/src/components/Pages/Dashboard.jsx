import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../redux/UserSlice'





const Dashboard = () => {
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

export default Dashboard