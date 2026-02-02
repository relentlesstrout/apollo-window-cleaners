import React from "react";


function Arrow({ direction, onClick}) {

    const isLeft = direction === "left";

    return (
        <div className="flex justify-center items-center w-full">
            <button
                onClick={onClick}
                className={`
                    absolute top-1/2 transform -translate-y-1/2 
                    ${isLeft ? "left-2" : "right-2"} 
                    bg-white hover:bg-gray-200 
                    rounded-full p-3 flex justify-center items-center
                    z-10
                  `}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="black" className={"w-6 h-6" + " " + (!isLeft ? "rotate-180" : "")}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                </svg>
            </button>
        </div>
    );
}

export default Arrow;
