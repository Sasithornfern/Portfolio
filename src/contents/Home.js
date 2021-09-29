import React, {Component} from "react";
import Social from '../Components/Social';
// import pic from '../img/pic.jpg';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component{
    render(){
        return(
            <div className="condiv home">
                <img src= "https://scontent.futp1-1.fna.fbcdn.net/v/t1.6435-9/127281952_1035962823570507_6855102375096109787_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TAnjt4ucOAkAX8ivImp&_nc_ht=scontent.futp1-1.fna&oh=9b5ede7d5a107cdc718ae4dab779877a&oe=616F1BCB" alt="profile" className="profile" />
                <ReactTypingEffect text={['My portfolio','I am Sasithorn']}speed={80} eraseDelay={100} className="typingeffect"/>
                <Social/>
            </div>
        )   
    }
}

export default Home;