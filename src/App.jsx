import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar";
import parse from 'html-react-parser';

const serverUrl = "http://80.78.255.150";

function App() {
  
const [blockData, setBlockData] = useState([]);
useEffect(() => {
  try {
    axios
      .get(
        serverUrl + "/api/blocks/"
        // ,{ headers: { Authorization: `Token da0d550bcc813a1b1cc6b905551cb11e3bf95046` } }
        // ,{headers: { "Content-Type": "multipart/form-data" }}
      )
      .then((response) => {
        console.log(response.data);
        setBlockData(response.data);
      });
  } catch (error) {
    console.log(error);
  }
}, []);
  return (
    <section className="Section">
      <div className="Content">
        <div className="Header">
          <div className="LogoWrapper">
          <div className="Logo">
            <img
              className="LogoImage"
              src="spacex-logo-png_kopiya.png"
              alt="spaceX"
            />
          </div>
          </div>
          <Navbar />
        </div>
        <div className="Moon"></div>
        <div className="Container">
          <div className="Text">
            <span className="TextUpper">ПУТЕШЕСТВИЕ</span>
            <br />
            <span className="TextLower">на красную планету</span>
          </div>
          <div className="Button">
            <span>Начать путешествие</span>
          </div>
          <div className="Blocks">
          {blockData.map((element, index) => {
              return (
                <div className={`Block-${element.block_sort}`} key={element.block_sort}><div className="TextBlock" >{parse(element.text_block)}</div></div>
              );
            })} 
            {/* <div className="Block-1"><div className="TextBlock">Мы <br /><span>1</span><br /> на рынке </div></div>
            <div className="Block-2"><div className="TextBlock">Гарантируем <br /><span>50%</span><br />  безопасность</div></div>
            <div className="Block-3"><div className="TextBlock">Календарик за <br /> <span>2001</span>г.<br />  в подарок</div></div>
            <div className="Block-4"><div className="TextBlock">Путешествие за <br /> <span>597</span><br /> дней</div></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
