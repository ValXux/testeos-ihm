import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NUM_CIRCLES = 5; // Cambia esto para agregar más círculos

const HomeMain = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const initialProgress = location.state?.progresses || Array(NUM_CIRCLES).fill(0).map((_, i) => (i === 0 ? 25 : 0));
    const [progresses] = useState(initialProgress);

    const handleButtonClick = (id) => {
        navigate("/home/excercise/" + `${id}`, { state: { progresses } });
    };

    //Patrón de desplazamiento
    const offsetPattern = [0, -30, -60, -30, 0, 30, 60, 30, 0];

    return (
        <main className="d-flex flex-column align-items-center col-md-6 ms-sm-auto col-lg-6 px-md-4 p-4">
            <h1 className="h2">Aprendiendo HTML - Leccion</h1>
            <div className="d-flex flex-column align-items-center">
                {Array.from({ length: NUM_CIRCLES }, (_, i) => {
                    const offsetX = offsetPattern[i % offsetPattern.length];

                    return (
                        <div
                            key={i}
                            className="circle-percentage d-flex justify-content-center align-items-center m-3"
                            style={{ transform: `translate(${offsetX}px)` }}
                        >
                            <div className="circle-1 d-flex justify-content-center align-items-center">
                                <button
                                    className="circle-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleButtonClick(i + 1);
                                    }}
                                    disabled={progresses[i] === 0}
                                >
                                    {i + 1}
                                </button>
                            </div>
                            <svg className="progress-ring" width="150" height="150">
                                <circle
                                    className="progress-ring__circle"
                                    stroke="#67728C"
                                    strokeWidth="10"
                                    fill="transparent"
                                    r="65"
                                    cx="75"
                                    cy="75"
                                    style={{
                                        strokeDasharray: 2 * Math.PI * 65,
                                        strokeDashoffset: 2 * Math.PI * 65 * (1 - progresses[i] / 100)
                                    }}
                                />
                            </svg>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default HomeMain;