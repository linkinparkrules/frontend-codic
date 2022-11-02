import { useRef, useState, useEffect } from "react";

export function CountDownClock(props) {
    const time = useRef(10)
    // hiển thị thời gian trên giao diện ng dùng, giá trị ban đầu là time.current
    const [countdownTime, setCountdownTime] = useState(time.current);
    useEffect(() => {
        // đếm ngược thời gian về 0
        let countDown = setInterval(() => {
            setCountdownTime((prev) => {
                time.current = prev - 1
                // console.log(props.time);
                return prev - 1
            });
        }, 1000)
        if (time.current === 0) {
            clearInterval(countDown)
        }
    }, )
   

    return (
        <div id="time">{countdownTime}</div>
    )
};