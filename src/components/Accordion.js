import React, {useState } from 'react';


const Accordion = ({ items }) => {
    //initialize state
    const [activeIndex, setActiveIndex] = useState(null);


    //helper function to be called on click below
    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    //main function
    const renderedList = items.map( (item, index) => {
        const active = index === activeIndex ? 'active' : '';


        return <React.Fragment key={item.title}>
                <div className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
    });
    return (
        <div className="ui styled accordion">
            {renderedList}
        </div>
    )
}

export default Accordion;