import React, { Component } from "react";

class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myskills: [
        "HTML",
        "CSS",
        "JS",
        "ReactJS",
        "PHP",
        "SQL",
        "PYTHON",
        "JAVA",
      ],
    };
    this.state1 = {
      myskills1: [
        "Django Python",
        "Android Studio",
        "RapidMiner",
        "Heroku",
        "Netlify",
        "Social media ",
        "โปรแกรมพื้นฐาน Microsoft Office เช่น Word, Excel, PowerPoint",
      ],
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">
          My Skills <i class="fas fa-desktop"></i>
        </h1>
        <h3 className="subtopic">
          ทักษะทางด้านคอมพิวเตอร์มีพื้นฐานภาษาดังต่อไปนี้
        </h3>
        <ul>
          {this.state.myskills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
        <h3 className="subtopic">มีประสบการณ์ในการใช้</h3>
        <ul>
          {this.state1.myskills1.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
        <h3 className="subtopic">ผลงานที่เคยทำในระหว่างเรียน</h3>
        <ul>
          <li>
            <p>เว็บขายเครื่องประดับ AmitiShop </p>
          </li>
          <li>
            <p>เว็บระบบหน้าร้านขายข้าว</p>
          </li>
          <li>
            <p>แอพพลิเคชันข้อมูลอุทยานแห่งชาติและพิพิธภัณฑ์ในจังหวัดขอนแก่น</p>
          </li>

          <li>
            <p>
              <a
                href="https://webobesity.herokuapp.com/"
                target="_blank"
                rel="noopender noreferrer"
              >
                เว็บไซต์ทำนายการเกิดโรคอ้วนและโรคที่เกิดจากโรคอ้วน
              </a>
            </p>
          </li>
        </ul>
        <h3 className="subtopic">Workshop ที่เคยทำ</h3>
        <ul>
          <li>
            <p>
              <a
                href="https://incomeandexpensecal.netlify.app/"
                target="_blank"
                rel="noopender noreferrer"
              >
                แอพรายรับ - รายจ่าย{" "}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://web-weatherr.netlify.app/"
                target="_blank"
                rel="noopender noreferrer"
              >
                เว็บสภาพอากาศ{" "}
              </a>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skill;
