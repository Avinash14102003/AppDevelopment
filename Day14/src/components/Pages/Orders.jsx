import React from 'react'
import { Link } from 'react-router-dom'
const Orders = () => {
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

    <main>
        <section class="order-list">
            <h2>Order List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th><br/>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="orderTable">
                    
                </tbody>
            </table>
        </section>
    </main>

    <script src="script.js"></script>
    <footer>
    <div class="footer">2023 Bookmystay</div>
    <div class="footer-r">
     <Link to="/privacy"> Privacy&Policy</Link>
      <Link to="/faq">FAQ</Link><Link to="/terms">Terms</Link>
      </div>
        
    </footer>
    </div>
  )
}

export default Orders