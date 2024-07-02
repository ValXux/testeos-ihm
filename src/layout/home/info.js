import React from 'react';

const Info = ({ progress }) => {
    return (
        <nav className="col-md-4 d-none d-md-block text-white p-4 ">
            <i data-feather="star"></i>
            <i data-feather="heart"></i>
            <div>
                <div className="position">
                    <div className="weekly-challenge-container text-white p-3 mt-4 rounded" style={{background: "#67728C"}}>
                        <h4>Completa los desafíos semanales y gana experiencia adicional</h4>
                        <div className="progress-bar mt-2">
                            <div className="progress-bar-fill" style={{ width: `${20}%` }}></div>
                        </div>
                        <p className="mt-2">2 / 10</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Info;
