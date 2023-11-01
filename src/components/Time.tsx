import { useState, useEffect } from "react";

export const Time = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);
    return (
        <>
            <h1 className="font-bold">
                {time.getHours().toString().padStart(2, '0')} : {time.getMinutes().toString().padStart(2, '0')} : {time.getSeconds().toString().padStart(2, '0')}
            </h1>
        </>
    );
}