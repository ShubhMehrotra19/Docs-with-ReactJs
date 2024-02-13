import React, {useRef, useState} from "react";
import Card from "./Card.jsx";


function Foreground() {

    const ref = useRef(null)

    const data = [{desc: "This is the background color of the card that will be displayed",
        filesize: ".9mb",
        close: true,
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
        {desc: "This is the background color of the card that will be displayed",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {desc: "This is the background color of the card that will be displayed",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Upload", tagColor: "green"},
        },
    ];
    return (
        <div ref = {ref} className='fixed z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) =>(
                <Card data={item} refrence={ref} />
            ))}
        </div>
    );
}

export default Foreground