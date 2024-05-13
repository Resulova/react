import React from 'react'
import  styles from '../Header/Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
           <h1>COZA   <span>STORE</span> </h1>
           <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
           </nav>

        </div>
        
        </div>
        
  )
}

export default Header
