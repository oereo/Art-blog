import React from 'react';
import MenuIcon from "../assets/images/menu_icon.jpg"
import styled from "styled-components";

const StyledDoor = styled.span`
    display: flex;
    height: 120px;
    margin:40px 50px 0 0;
    width: 70px;
    float: right;
    
    &:hover {
    opacity : 0.4;
    }
`

class Submenu extends React.Component {
    render() {
        return (
            <ul className="nav__submenu" style={{float:"right", margin: "160px -95px 0 0"}}>
                <li className="nav__submenu-item " style={{listStyle:"none"}}>
                    <a>Chamber Project</a>
                </li>

            </ul>
        )
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAboutMenu: false
        };
    }

    handleHover = (event) => {
        this.setState({showAboutMenu: true});
    };

    handleLeave = (event) => {
        this.setState({showAboutMenu: false});
    };

    render() {
        return (
            <nav className="nav">
                <ul className="nav__menu" style={{listStyle:"none"}}>
                    <li className="nav__menu-item" onMouseLeave={this.handleLeave} style={{listStyle:"none", paddingLeft:"0px"}}>
                        <a onMouseEnter={this.handleHover}>
                            <StyledDoor>
                                <img style={{width: "100%", height: "100%"}} src={MenuIcon} alt="menu"/>
                            </StyledDoor>
                        </a>
                        <div className="submenu-container">
                            {this.state.showAboutMenu && <Submenu/>}
                        </div>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default Menu;