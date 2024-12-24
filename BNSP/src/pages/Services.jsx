import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import "../css/Services.css"

const Services = () => {
    return (
        <div className="service-container">
            <div className="service-header">
                <h1>SERVICE</h1>
                <p>Butuh estimasi biaya? Pilih jenis layanan kamu sekarang</p>
            </div>
            <div className="service-options">
                <div className="service-item">
                    <img src="/src/picture/Instalasi.jpeg" alt="Instalasi" />
                    <p>Instalasi</p>
                </div>
                <div className="service-item">
                    <img src="/src/picture/Ac.jpg" alt="Service AC" />
                    <p>Service AC</p>
                </div>
                <div className="service-item">
                    <img src="/src/picture/Freezer.jpg" alt="Freezer" />
                    <p>Service Freezer</p>
                </div>
                <div className="service-item">
                    <img src="/src/picture/ColdStorage.jpg"alt="Cold Storage" />
                    <p>Cold Storage</p>
                </div>
                <div className="service-item">
                    <img src="/src/picture/poli.jpg" alt="Polycold" />
                    <p>Service Polycold</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
