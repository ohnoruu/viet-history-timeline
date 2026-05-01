import { useState, useEffect } from 'react';
import { Card,Button } from "react-bootstrap";
import { timelineData } from "../timeline";

import TimelineCard from "./TimelineCard";
import "./Timeline.css"

export default function Timeline({ focused, setFocused }) {
    const [index, setIndex] = useState(0);
    const [exiting, setExiting] = useState(false);

    const handleNext = () => {
        setIndex((prev) => Math.min(prev + 1, timelineData.length - 1));
    };

    const handlePrev = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        const handleKey = (event) => {
            // focus controls 
            if (focused) {
                if (event.key === "Escape") {
                    setExiting(true);

                    setTimeout(() => {
                        setFocused(false);
                        setExiting(false);
                    }, 500); //match exit animation duration of text
                }
                return;
            }

            //timeline navigation
            if (event.key === "ArrowRight" || event.key === "d") handleNext();
            if (event.key === "ArrowLeft" || event.key === "a") handlePrev();
            if (event.key === " ") setFocused(true);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [focused]);

    return (
        <div className="timeline-wrapper">
            <button 
                className="timeline-nav-btn timeline-nav-left"
                onClick={handlePrev}
                disabled={index === 0}
                aria-label="Previous timeline event"
            >
                &#8249;
            </button>
            {timelineData.map((item, i) => (
                <TimelineCard
                    key={i}
                    item={item}
                    index={i}
                    active={index}
                    focused={focused && i === index}
                    exiting={exiting && i === index}
                    setFocused={setFocused}
                />
            ))}
            <button 
                className="timeline-nav-btn timeline-nav-right"
                onClick={handleNext}
                disabled={index === timelineData.length - 1}
                aria-label="Next timeline event"
            >
                &#8250;
            </button>
        </div>
    );
}