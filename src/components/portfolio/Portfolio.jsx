import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss"
import {useState,useEffect} from "react";
import {
    featuredPortfolio,
    webPortfolio
  
  } from "../../data";

function Portfolio() {
    const [selected,setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web Apps",
        }

    ];
    useEffect(() => {
        switch (selected) {
          case "featured":
            setData(featuredPortfolio);
            break;
          case "web":
            setData(webPortfolio);
            break;
          default:
            setData(featuredPortfolio);
        }
      }, [selected]);
    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <ul>
               {list.map((item) => (
                   <PortfolioList  title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>

               )

               )}
                
            </ul>
            <div className="container">
            {data.map((d) => (
                <div className="item">
                    <a href={d.link}><img
                    src={d.img}
                    alt=""
                    />
                    </a>
                    <h3>{d.title}</h3>
                </div>
             ))}
            </div>
            
        </div>
    )
}

export default Portfolio
