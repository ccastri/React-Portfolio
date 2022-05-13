import './testimonials.scss'
import { useState } from "react"

export default function Testimonials() {
    const[currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            icon: "assets/ig.png", 
            img: "assets/yan.jpg",
            title: "Biomedical engineer",
            desc: "calibration and metrology specialist, a really freaky nigga aka 'la carpa'",
            name: "Yan",
            
        },
        {
            id: 2,
            icon: "assets/in.png",
            img: "assets/luis.png",
            title: "Biomedical engineer",
            desc: "Nanomedicine specialist and color lover, he also have got the best perez ever",
            name: "Luis",
            featured: true,
        },
        {
            id: 3,
            icon: "assets/youtube.png", 
            img: "assets/she.png",
            title: "Biomedical engineer",
            desc: "Yan's girlfriend, she looks like a palm but she's pretty smart",
            name: "Vanessa",
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
            {data.map((d)=>(

            
                <div className ={d.featured ? "card featured": "card" }>
                    <div className="top">
                        <img src="assets/right_arrow.png" className="left" alt=""/>
                        <img 
                        className="user"
                            src={d.img}
                            alt=""

                        />
                        <img className="right" src={d.icon} alt=""/>
                    </div>
                    <div className="center">
                        {d.desc}

                    </div>
                    <div className="bottom">
                    <h3>{d.name}</h3>
                    <h4>{d.title}</h4>

                    </div>
                </div>))}
            </div>
            
        </div>
    )
}
