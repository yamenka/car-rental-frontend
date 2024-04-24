import React, { useState, useEffect } from 'react';
import Employees from './EmployeesFolder/Employees';
import Clients from './ClientsFolder/Clients';
import Departments from './DepartmentsFolder/Departments';
import Projects from './ProjectsFolder/Projects';
import Expenses from './ExpensesFolder/Expenses';
import Register from './RegisterFolder/Register';
import Login from './LoginFolder/Login';

const TabbedNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Register');  // Default tab

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setSelectedTab('Register'); // Redirect to Register page on logout
  };

  const handleLoginSuccess = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    setSelectedTab('Employees');
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        
          <>
            <li className="nav-item">
              <a className={`nav-link ${selectedTab === 'Logout' ? 'active' : ''}`} onClick={handleLogout}>
                Logout
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${selectedTab === 'Employees' ? 'active' : ''}`} onClick={() => handleTabClick('Employees')}>
                Employees
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${selectedTab === 'Clients' ? 'active' : ''}`} onClick={() => handleTabClick('Clients')}>
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${selectedTab === 'Departments' ? 'active' : ''}`} onClick={() => handleTabClick('Departments')}>
                Departments
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${selectedTab === 'Projects' ? 'active' : ''}`} onClick={() => handleTabClick('Projects')}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${selectedTab === 'Expenses' ? 'active' : ''}`} onClick={() => handleTabClick('Expenses')}>
                Expenses
              </a>
            </li>
          </>
         
          <>
            <li className="nav-item">
              <a className={`nav-link ${selectedTab === 'Register' ? 'active' : ''}`} onClick={() => handleTabClick('Register')}>
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${selectedTab === 'Login' ? 'active' : ''}`} onClick={() => handleTabClick('Login')}>
                Login
              </a>
            </li>
          </>
        
      </ul>
      <div className="tab-content">
        {selectedTab === 'Register' && <Register />}
        {selectedTab === 'Login' && <Login handleLoginSuccess={handleLoginSuccess} />}
        {isLoggedIn && selectedTab === 'Employees' && <Employees />}
        {isLoggedIn && selectedTab === 'Clients' && <Clients />}
        {isLoggedIn && selectedTab === 'Departments' && <Departments />}
        {isLoggedIn && selectedTab === 'Projects' && <Projects />}
        {isLoggedIn && selectedTab === 'Expenses' && <Expenses />}
      </div>
    </div>
  );
};

export default TabbedNavigation;