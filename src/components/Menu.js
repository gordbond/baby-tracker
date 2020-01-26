// import React from 'react';
import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

// const Menu = (props) => {
class Menu extends Component{
 
    handleClick = (e) => {
      e.preventDefault();
      switch(e.target.title){
        case "snooze": this.props.displayForm("snooze");
        break;
        case "chow": this.props.displayForm("chow");
        break;
        case "butt": this.props.displayForm("butt");
        break;
      }
      console.log("CLICK TEST");
    }
    
    render(){
      return (
          <>
            <Navbar bg="dark" variant="dark" style={{borderRadius: '5px'}}>
              <Nav className="mx-auto">
                <Nav.Link title="snooze" onClick={this.handleClick} style={{fontSize:'1.5rem'}}>Sleep</Nav.Link>
                <Nav.Link title="chow" onClick={this.handleClick} style={{fontSize:'1.5rem'}}>Eat</Nav.Link>
                <Nav.Link title="butt" onClick={this.handleClick} style={{fontSize:'1.5rem'}}>Poop</Nav.Link>
              </Nav>
            </Navbar>
          </>
    
          
            
        );
      }
    }
  

  export default Menu;