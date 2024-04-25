import React, { useState, useEffect } from 'react';
import CarsList from './CarFolder/CarList';
import Clients from './ClientFolder/Client';
import Register from './RegisterFolder/Register';
import ClientSearch from './ClientFolder/ClientSearch';
import CarSearch from './CarFolder/CarSearch';
import TransactionsList from './TransactionsFolder/TransactionsList'; // Import TransactionsList
import styles from './../NavBar.module.css';  // Importing the CSS module

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedTab, setSelectedTab] = useState('CarManagement');

    useEffect(() => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      setSelectedTab('Register');
    };

    const handleLoginSuccess = (token) => {
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      setSelectedTab('CarManagement');
    };

    const handleTabClick = (tab) => {
      setSelectedTab(tab);
    };

    return (
      <div>
        <ul className={styles.navTabs}>
          {isLoggedIn ? (
            <>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} ${selectedTab === 'Logout' ? styles.active : ''}`} onClick={handleLogout}>
                  Logout
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} ${selectedTab === 'CarManagement' ? styles.active : ''}`} onClick={() => handleTabClick('CarManagement')}>
                  Car Management
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} ${selectedTab === 'ClientManagement' ? styles.active : ''}`} onClick={() => handleTabClick('ClientManagement')}>
                  Client Management
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} ${selectedTab === 'CarSearch' ? styles.active : ''}`} onClick={() => handleTabClick('CarSearch')}>
                  Car Search
                </a>
              </li>
              <li className={styles.navItem}>  {/* Add this line */}
                <a className={`${styles.navLink} ${selectedTab === 'TransactionManagement' ? styles.active : ''}`} onClick={() => handleTabClick('TransactionManagement')}>
                  Transaction Management
                </a>
              </li>
            </>
          ) : (
            <>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} ${selectedTab === 'Register' ? styles.active : ''}`} onClick={() => handleTabClick('Register')}>
                  Register
                </a>
              </li>
            </>
          )}
        </ul>
        <div className={`${styles.tabContent}`}>
          {selectedTab === 'Register' && <Register />}
          {isLoggedIn && selectedTab === 'CarManagement' && <CarsList />}
          {isLoggedIn && selectedTab === 'ClientManagement' && <Clients />}
          {isLoggedIn && selectedTab === 'CarSearch' && <CarSearch />}
          {isLoggedIn && selectedTab === 'TransactionManagement' && <TransactionsList />}  {/* Render TransactionsList component */}
        </div>
      </div>
    );
};

export default NavBar;
