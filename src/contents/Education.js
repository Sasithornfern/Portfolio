import React, { Component } from "react";
import Widecard from "../Components/Widecard";

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education <i class="fas fa-graduation-cap"></i></h1>
                <Widecard title="มัธยมศึกษาตอนต้น" where="โรงเรียนชลกันยานุกูล" from="2011" to="2013" />
                <Widecard title="มัธยมศึกษาตอนปลาย" where="โรงเรียนชลกันยานุกูล" from="2014" to="2016" />
                <Widecard title="ปริญญาตรี" branch="สาขาวิทยาการคอมพิวเตอร์" faculty="คณะวิทยาศาสตร์" where="มหาวิทยาลัยขอนแก่น" from="2017" to="2021" />
            </div>
        )
    }
}
export default Education;