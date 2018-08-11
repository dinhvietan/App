import React, {Component} from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import '../Style/header.css'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            logged: false,
            userinfo: {
                email: "",
                name: ""
            }
        };

        let section = this.getSession();
        if(section !== null){
            // window.location.href = "/login";
        } else {
            this.state.userinfo.email = session.email;
            this.state.userinfo.name = section.name;
            this.state.logged = true;
        }
    }

    componentDidMount() {
        if(this.state.userinfo.email === false){
            if(window.location.pathname != "/login"){
                window.location.href = "/login";
            }
        }
    }
    
    getSession() {
        let session = window.localStorage.getItem("session");
        if(session != null){
            return JSON.parse(section);
        }
        return null;
    }

    onLogout(event) {
        window.localStorage.removeItem("session");
        window.location.href = "/login";
        event.preventDefault();
    }

    render() {
        let menus = [];
        let headerTempalte = [];
        if (this.state.logged = "true") {
            menus = this.buildMenus();
            headerTempalte.push((
                <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">An</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} title="Account Management" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="/Account">Account</MenuItem>
                            <MenuItem eventKey={3.2}>Contact</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/login">
                            Login
                            { menus }
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            ))
        }
        return (
            <div>
                { headerTempalte }
            </div>
         
        );
    }
}
export default Header;