import React from "react";

const Carousel = ({ children}) => {
    const childrenArray = React.Children.toArray(children);
    
    return (
        <div className="relative overflow-hidden flex">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-bp-white to-transparent" />
            <ul className="flex gap-2 animate-infinite-scroll">
                {[...childrenArray, ...childrenArray].map((child, index)=>(
                    <li key={index}>{child}</li>
                ))}
            </ul>
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-48 bg-gradient-to-l from-bp-white to-transparent" />
        </div>
    )
}

export default Carousel;