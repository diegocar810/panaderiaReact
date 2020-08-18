import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import Flag from 'react-flagkit'
import i18n from '../i18n';
import {  Trans } from 'react-i18next';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    changeLanguage (lng) {
        i18n.changeLanguage(lng);
      }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret color="danger">
                        <span className="fa fa-language fa-lg"></span>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => this.changeLanguage('en')}><Flag country="US" />English</DropdownItem>
                            <DropdownItem onClick={() => this.changeLanguage('es')}><Flag country="CO" />Español</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <div className="container navbar-dark">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src={logo} height="30" width="41" alt="Ristorante con fudion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> {i18n.t('header.home')}
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> {i18n.t('header.about')}
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> {i18n.t('header.menu')}
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> {i18n.t('header.contact')}
                                </NavLink>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}
