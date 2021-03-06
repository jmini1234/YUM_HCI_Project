import React from 'react';
import './MenuTemplate.css';
import logo from './yum_logo.png';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuTemplate = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <main className = "menu-template">
        <div className = "menubar">

        <Link to='/YUM_HCI_Project/' >
            <img src = {logo} alt = 'logo' className="yumicon"/>
        </Link>
            <div className = "menulist">

              <p>INTERIOR MOOD</p>

              <ul>
                <li><NavLink
                  activeClassName = "selected"
                  activeStyle={{
                    background: "white"
                  }}
                  to='/YUM_HCI_Project/white/'>
                    #WHITE
                </NavLink></li>

                <li><NavLink
                  activeClassName = "selected"
                  activeStyle={{
                    background: "white"
                  }}
                  to='/YUM_HCI_Project/wood/' >
                    #WOOD
                </NavLink></li>

                <li><NavLink
                  activeClassName = "selected"
                  activeStyle={{
                    background: "white"
                  }}
                  to='/YUM_HCI_Project/blue/' >
                    #BLUE
                </NavLink></li>

                <li><NavLink
                  activeClassName = "selected"
                  activeStyle={{
                    background: "white"
                  }}
                  to='/YUM_HCI_Project/simple/' >
                    #SIMPLE
                </NavLink></li>

                <li><NavLink
                  activeClassName = "selected"
                  activeStyle={{
                    background: "white"
                  }}
                  to='/YUM_HCI_Project/vintage/' >
                    #VINTAGE
                </NavLink></li>

                <li><NavLink
                  activeClassName = "selected"
                  activeStyle={{
                    background: "white"
                  }}
                  to='/YUM_HCI_Project/nordic/' >
                    #NORDIC
                </NavLink></li>

              </ul>

              <div className = "helpmsg">
                <span className = "msg"> If you want to<br/>post your post?<br/> </span>

                <button variant = "success" className = "helpbtn" onClick={handleShow}>CLICK</button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>If you want to post your post?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>If you add the "tag" starting "#YUM_" to the blog post,
                  the post is posted on YUM hompage to promote it.</Modal.Body>
                </Modal>

              </div>

            </div>
        </div>
      </main>


    </div>
  );
};

export default MenuTemplate;
