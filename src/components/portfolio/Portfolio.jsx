import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
    mriPortfolio,
    freesurferPortfolio,
    mtPortfolio,
    
    pythonPortfolio,
} from "../../data";

export default function Portfolio() {
   
    const[selected, setSelected] =useState("mri");
    const[data, setData] =useState([]);
    const list = [
        {
            id: "mri",
            title:"MRI"
        },
        {
            id: "freesurfer",
            title: "Freesurfer"
        },
        {
            id:"python",
            title: "Python"
        },
        {
            id: "mt",
            title: "More Tools"
        },
    ];

    useEffect(() => {
        switch(selected){
            case "mri":
                setData(mriPortfolio);
                break;
                case "freesurfer":
                setData(freesurferPortfolio);
                break;
                case "mt":
                setData(mtPortfolio);
                break;
                case "python":
                setData(pythonPortfolio);
                break;
                default:
                    setData(freesurferPortfolio);
        }
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                    {data.map(d=>(
                <div className="item">
                    <img
                      src={d.img}
                      alt=""/>
                      <h3>{d.title}</h3>
                </div>
                    ))}
            </div>

        </div>
    );
}
