import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom'

import logo from '../../assets/images/logo.png';
import flag from '../../assets/images/flag.png';

const navigationmenu = [
   {id: 1, link: '/', linkText: 'Home'},
   {id: 2, link: '/calculator', linkText: 'Calculator'},
   {id: 4, link: '/api-docs', linkText: 'Developer'},
   {id: 5, linkText: 'Service', child: true,
    submenu: [
        {id: 51, link: '/service', linkText: 'Service'},
        {id: 52, link: '/service-detail',linkText: 'Service Detail'},
    ]
   },
   {id: 6, linkText: 'Login', link: '/login'},
];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redText: false
        };
    }
    // scroll add call
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({isTop: window.scrollY > 110});
        }, false);
    }
    // search
    searchToggle = () => {
        const sb = findDOMNode(this.refs.searchbar);
        const sbb = findDOMNode(this.refs.searchbtn);
        $(sb).toggleClass('search-visible');
        $(sbb).toggleClass('active');
    }
    // nav click
    navToggle = () => {
        const nv = findDOMNode(this.refs.navmenu);
        const nvb = findDOMNode(this.refs.navbtn);
        $(nv).toggleClass('active');
        $(nvb).toggleClass('active');
    }
    //   navigation
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;

        // If there's no selector, return the first sibling
        if (!selector) return sibling;

        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }

    }

    triggerChild = (e) => {
        let subMenu = '';
        subMenu = (this.getNextSibling(e.target, '.sub-menu') !== undefined) ? this.getNextSibling(e.target, '.sub-menu') : null;
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('open') ? 'sub-menu' : 'sub-menu open';
        }
    }
    render() {
        const classNamess = this.state.isTop ? 'sticky' : '';
        return (
            <header className="header-style-1">
                {/* Start Topbar */}
                <div className="topbar-style-1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="left-side">
                                    <div className="language-box">
                                        <div className="language p-relative">
                                            <img src={flag} alt="flag" />
                                            <select>
                                                <option>English</option>
                                                <option>German</option>
                                                <option>Japanese</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="right-side">
                                    <ul className="custom">
                                        <li><Link to="#" className="text-custom-white fs-14"><i className="fab fa-facebook-f" /></Link>
                                        </li>
                                        <li><Link to="#" className="text-custom-white fs-14"><i className="fab fa-twitter" /></Link>
                                        </li>
                                        <li><Link to="#" className="text-custom-white fs-14"><i className="fab fa-linkedin" /></Link>
                                        </li>
                                        <li><Link to="#" className="text-custom-white fs-14"><i className="fab fa-youtube" /></Link>
                                        </li>
                                        <li className="search" onClick={this.searchToggle} ref="searchbtn">
                                            <Link to="#" className="text-custom-white fs-14"><i className="fas fa-search" /></Link>
                                        </li>
                                        <li className="topbar-search" ref="searchbar">
                                            <form method="get">
                                                <input type="search" className="form-control form-control-custom" name="search" placeholder="Search..." defaultValue />
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Topbar */}
                {/* Start Navigation */}
                <div className={`main-navigation-style-1 ${classNamess}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="navigation">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={logo} style={{width: "240px"}} className="img-fluid image-fit" alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="main-menu" ref="navmenu">
                                        <div className="mobile-logo">
                                            <Link to="/">
                                                <img src={logo} className="img-fluid image-fit" alt="Logo" />
                                            </Link>
                                        </div>
                                        <nav>
                                            <ul className="custom">
                                                {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                        {item.child ? <Link onClick={e => e.preventDefault()} to="/" className="text-custom-white"> {item.linkText} </Link> : <Link to={item.link} className="text-custom-white"> {item.linkText} </Link>}
                                                        {item.child ?
                                                            <ul className="custom sub-menu" role="menu">
                                                                {item.submenu.map((sub_item, i) => (
                                                                    <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/" className="text-light-grey"> {sub_item.linkText} </Link> : <Link to={sub_item.link} className="text-light-grey"> {sub_item.linkText} </Link>}
                                                                        {sub_item.third_menu ?
                                                                            <ul className="custom sub-menu">
                                                                                {sub_item.third_menu.map((third_item, i) => (
                                                                                    <li className="menu-item" key={i}><Link
                                                                                        to={third_item.link} className="text-light-grey">{third_item.linkText}</Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul> : null}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            : null
                                                        }
                                                    </li>
                                                )) : null}
                                            </ul>
                                        </nav>
                                        <div className="right-side">
                                            <div className="cta-btn"> <Link to="/create-account" className="btn-first btn-submit"> CREATE ACCOUNT </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hamburger-menu" onClick={this.navToggle}  ref="navbtn">
                                        <div className="menu-btn"> <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Navigation */}
            </header>
        );
    }
}

export default Header;