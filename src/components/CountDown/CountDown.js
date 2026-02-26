"use client";
import React, { useEffect, useState } from 'react'
import styles from "./CountDown.module.css"
function CountDown() {
    const targetDate = new Date("2026-03-07T00:00:00")
    const [timeLeft, setTimeLeft] = useState(
        {
            days: "--",
            hours: "--",
            minutes: "--",
            seconds: "--",
        }
    )
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            const difference = targetDate - now;
            if (difference <= 0) {
                clearInterval(interval)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000)
        return () => clearInterval(interval);
    }, [])
    return (
        <div>
            <div className={styles.countdown}>
                <span>{timeLeft.days} gün </span> 
                <span>{timeLeft.hours} saat : </span> 
                <span>{timeLeft.minutes} dk : </span>
                <span>{timeLeft.seconds} sn </span>
            </div>
        </div>
    )
}

export default CountDown