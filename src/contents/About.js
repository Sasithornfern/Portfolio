import React,{Component} from "react";


class About extends Component{
    render(){
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me </h1>
                <img src= "https://scontent.futp1-1.fna.fbcdn.net/v/t1.6435-9/127281952_1035962823570507_6855102375096109787_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TAnjt4ucOAkAX8ivImp&_nc_ht=scontent.futp1-1.fna&oh=9b5ede7d5a107cdc718ae4dab779877a&oe=616F1BCB" alt="profile" className="profile" />
                    <div align="center">
                        <div class="card-body">
                            <h3>สวัสดีค่ะ ดิฉันนางสาวศศิธร เตชะวรรณพงษ์</h3>
                            <p> ชื่อเล่น เฟิร์น เกิดวันที่ 14 สิงหาคม พ.ศ. 2541 อายุ 23 ปี สัญชาติไทย </p>
                        </div>
                        <div class="card-body">
                            <h3>ประสบการณ์การทำงานระหว่างการศึกษา</h3>
                            <p>- ส่งผลงานเข้าร่วมการแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่ 23 </p>
                            <p>- ดูแลและให้คำแนะนำผู้ที่เข้าร่วมงานวันวิทยาศาสตร์คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น</p>
                            <p>- ทำหน้าที่ลงทะเบียน ผู้เข้าร่วมงานอะตอมเกมส์ มหาวิทยาลัยขอนแก่น </p>
                            <p>- ฝึกงานที่การไฟฟ้าส่วนภูมิภาคอำเภอบ้านบึง จังหวัดชลบุรี ฝ่ายบริการลูกค้า</p>
                        </div>
                        <div class="card-body">
                            <h3>ทักษะส่วนบุคคล</h3>
                        <p>มีพื้นฐานด้านภาษาเกาหลี ระดับพื้นฐาน และภาษาอังกฤษ ระดับพื้นฐาน</p>
                        </div>
                        <div class="card-body">
                            <h3>งานอดิเรก</h3>
                        <p><i class="fas fa-film"> ดูหนัง </i></p> 
                        <p><i class="fas fa-music"> ฟังเพลง </i></p>
                        <p><i class="fas fa-gamepad"> เล่นเกม</i></p> 
                        </div>
                    </div>                                   
            </div>
        );
    }
}

export default About;