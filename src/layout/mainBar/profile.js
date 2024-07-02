import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState('');
    const [savedDescription, setSavedDescription] = useState('');

    const handleSave = () => {
        setSavedDescription(description);
        setIsEditing(false);
    };

    return (
        <main className="profile-container d-flex flex-column align-items-center col-md-10 ms-sm-auto col-lg-10 px-md-4 p-4">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" className="w-25 h-25" width="980.000000pt" height="982.000000pt" viewBox="0 0 980.000000 982.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,982.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M4245 9794 c-555 -85 -1182 -291 -1662 -544 -236 -125 -499 -292 -656 -418 -299 -238 -701 -639 -942 -940 -371 -462 -706 -1171 -880 -1857 -93 -366 -110 -584 -102 -1290 6 -487 11 -553 68 -824 247 -1169 922 -2232 1874 -2952 440 -333 905 -571 1475 -757 549 -178 805 -209 1645 -199 529 7 632 16 920 88 252 63 596 175 811 265 1519 631 2599 1960 2943 3618 52 249 56 313 56 921 -1 608 -7 712 -61 970 -48 225 -158 584 -261 845 -365 931 -1025 1743 -1865 2294 -488 320 -1002 545 -1570 686 -254 63 -416 87 -683 100 -310 15 -998 11 -1110 -6z m1030 -584 c551 -39 968 -152 1483 -400 216 -105 322 -164 496 -278 440 -286 809 -633 1124 -1057 373 -502 673 -1173 771 -1721 52 -291 74 -687 60 -1074 -23 -663 -140 -1094 -479 -1779 l-116 -234 -99 93 c-228 211 -513 393 -950 606 -312 152 -495 228 -1082 450 l-62 24 -103 -88 c-336 -283 -551 -419 -813 -514 -223 -81 -322 -93 -690 -85 -264 6 -315 13 -460 62 -286 98 -514 237 -843 513 l-132 111 -68 -25 c-534 -201 -765 -297 -1067 -444 -448 -217 -742 -405 -964 -616 -54 -51 -95 -83 -101 -78 -14 15 -227 467 -275 582 -165 404 -269 823 -316 1277 -19 177 -16 626 4 815 46 415 139 791 289 1165 221 550 533 1019 965 1450 440 439 893 738 1453 958 406 160 853 272 1185 297 133 10 584 4 790 -10z"/>
                <path d="M4677 8090 c-510 -64 -981 -345 -1311 -784 -204 -271 -340 -615 -387 -976 -17 -136 -15 -420 5 -570 44 -331 144 -641 313 -972 279 -548 675 -937 1131 -1113 380 -146 777 -116 1137 87 259 146 519 386 717 663 274 383 468 862 530 1305 20 148 17 568 -6 704 -87 523 -414 1037 -851 1335 -233 159 -465 254 -747 307 -97 18 -428 27 -531 14z"/></g>
        </svg>
            
            <h1>Alejo777</h1>
            <div className="m-2">
                <a>9 ⚡</a>
                <a>2 ❤️</a>
            </div>

            {savedDescription && (
                <p id="profileDescription">{savedDescription}</p>
            )}

            {isEditing ? (
                <div className="description-area mt-2">
                    <textarea 
                        className="form-control" 
                        placeholder="Escribe tu descripción" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    <button 
                        className="btn btn-success mt-2" 
                        onClick={handleSave}
                    >
                        Guardar
                    </button>
                </div>
            ) : (
                <button 
                    className="btn btn-primary mt-2" 
                    onClick={() => setIsEditing(true)}
                >
                    Agregar descripción
                </button>
            )}

            <div>
                <div className="position p-2">
                    <div className="weekly-challenge-container text-white p-3 mt-4 rounded" style={{background: "#67728C"}}>
                        <h4>Completa los desafíos semanales y gana experiencia adicional</h4>
                        <div className="progress-bar mt-2">
                            <div className="progress-bar-fill" style={{ width: `${20}%` }}></div>
                        </div>
                        <p className="mt-2">2 / 10</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;
