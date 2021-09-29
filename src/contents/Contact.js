import React,{Component} from "react";

import Social from "../Components/Social";

class Contact extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me <i class="fas fa-address-card"></i></h1>
                <h3>ที่อยู่ปัจจุบัน </h3>
                <h3> 49/176 หมู่บ้านอรินสิริ สปอร์ต วิลเลจ ตำบลบ้านปึก อำเภอเมืองชลบุรี จังหวัดชลบุรี 20130</h3>
                <h3>เบอร์โทรศัพท์ 064-7894442</h3>
                <h3>Email : sasithorntechawannaphong@gmail.com</h3>
                <Social/>
            </div>
        );
    }
}

export default Contact ; 