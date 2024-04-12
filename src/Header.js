import React from "react";
import { Component } from "react";
import { BiSearch } from 'react-icons/bi';
import { FaGlobe } from 'react-icons/fa';
import  './styleHeader.css';
 
class Language extends Component {
    render(){
    return(
        <div>
            <div>
            <FaGlobe />
            <select name="language" id="language">
                <option value="en">English</option>
                <option value="fr">France</option>
                <option value="sp">Spainish</option>
                <option value="it">Italian</option>
                <option value="en">English</option> 
            </select>
            </div>

        </div>
    )
}
    
}

class Search extends Component  {
    render(){
    return(
        <div>
            <div>
              <BiSearch size={24} />
              <input type="text" placeholder="Search here...." />
            </div>
            <div>

            </div>
        </div>
    )
}
    
}

class Header extends Component {
     state={clicked: false};
     handelclicked=()=>{
        this.setState({clicked: !this.state.clicked})
     }
    render(){
    return(
        <div>
            <div className="header">
                <Language />
                <Search />
            </div>

            <div>
                <div className="header2">
                    <ul id="Navbar">
                        <i id="home" class="fas fa-home"></i>
                        <li><a className="active" href="#" >Home</a></li>
                        <i id="place" class="fas fa-map-marker"></i>
                        <li><a className="active" href="#" >Place</a></li>
                        <i id="hotel" class="fas fa-hotel"></i>
                        <li><a className="active" href="#">Hospitality</a></li>
                        <i id="package" class="fas fa-box"></i>
                        <li><a className="active" href="#" >Package</a></li>
                        <i id="book" class="fas fa-calendar-check"></i>
                        <li><a className="active" href="#" >Book</a></li>
                        <i id="bell" class="fas fa-bell"></i>
                        <li><a className="active" href="#" >Notification </a></li>
                        <i id="about" class="fas fa-info-circle"></i>
                        <li><a className="active" href="#" >About</a></li>
                        <i id="logout" class="fas fa-sign-out-alt"></i>
                        <li><a className="active" href="#" >Logout</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handelclicked}>
                        <i id="bar" className={this.state.clicked? "fas fa-times": "fas fa-bars"}></i>
                    </div>
            </div>     
        </div>
    ) 
} 
}
export default Header;