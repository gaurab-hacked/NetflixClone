import React, { useState } from 'react'
import './CSS/Content.css'

const Eachsection = (props) => {
    const { element } = props;
    const [clickOption, setCLickOption] = useState("");
    const [cardhideoption, setCardhideoption] = useState(false);
    const cardTitleclk = (e) =>{
        const name = e.target.getAttribute("name");
        setCLickOption(name)
        if(cardhideoption){
            setCardhideoption(false);
        }else{
            setCardhideoption(true)
        }

    }

    return (
        <div id='cards'>
            <div className="heading" name={element.name} onClick={cardTitleclk}>
                <div className="CardsHeading" name={element.name}>{element.heading}</div>
                <div className="icon"  name={element.name}>
                    <div className={cardhideoption?"uperrow rotate":"uperrow"}  name={element.name}></div>
                </div>
            </div>
            <div className={ cardhideoption ? clickOption=== element.name ?`cardsDis  ${element.name}`:`cardsDis cardHide`:`cardsDis`}>{element.dis}</div>
        </div>
    )
}

export default Eachsection
