import React from 'react';
import './partners.css';
import NavBar from '../components/home/jsx/navbar';
import Header from '../components/home/jsx/header';
import Footer from "../components/Footer";

import at from "../assets/WHO/at.png";
import C9 from "../assets/WHO/C9.png";
import MS from "../assets/WHO/MS.png";
import TS from "../assets/WHO/TS.png";
import C10 from "../assets/WHO/C10.png";
import C11 from "../assets/WHO/C11.png";
import soo from "../assets/WHO/soo.png";
import fort from "../assets/WHO/fort.png";
import fire from "../assets/WHO/fire.png";
import ext2 from "../assets/WHO/ext2.png";
import BOSCH from "../assets/WHO/BOSCH.png"
import Sophos from "../assets/part/Sophos-Logo.png";
import Fortinet from "../assets/part/Fortinet-Logo.svg";
import crowdstrike from "../assets/part/crowdstrike-logo.png";
import kas1 from "../assets/WHO/kas1.png";
import aws from "../assets/WHO/aws.png";
import cisco from "../assets/WHO/cisco.png";
import GS from "../assets/WHO/GS.png";
import ltera from "../assets/WHO/ltera.png";
import junper from "../assets/WHO/junper.png";
import BL from "../assets/WHO/BL.png";
import HP from "../assets/WHO/HP.png";
import TrendMicro from "../assets/part/TrendMicro-Logo.png";

const Partners = () => {
      const partners = [
        /*{ name: 'Sophos', logo: Sophos },
        { name: 'Fortinet', logo: Fortinet },
        { name: 'CrowdStrike', logo: crowdstrike },
        { name: 'TrendMicro', logo: TrendMicro }*/
    ];

    const referenceItems = [

        {
            logo: cisco,
            description: "BEAMTEL est partenaire officiel et Intégrateur de solutions de Cisco"
        },
        {
            logo: ext2,
            description: "BEAMTEL partenaire officiel"
        },
        {
            logo:junper,
            description:"Routing & SwitchingProvider Partnership"
        },

        {
            logo: C11,
            description: "Nous sommes Intégrateur de solutions de connectivités Nokia"
        },
        {
            logo: HP,
            description: " BEAMTEL partenaire de HPE Aruba et Intégrateur de solution 5G Privée."

        },
        {
            logo: soo,
            description: "BEAMTEL intégrateur de solutions Cyber Sécurité de SOPHOS"
        },
        {
            logo: fort,
            description: "Revendeur, Intégrateur & Partenaire Autorisé"
        },



        {
            logo: C10,
            description: "Contrat Cadre : Consultants en Ingénierie / Conseils / R&D Labs"
        },

        {
            logo:aws,
            description:" Programme Startup Innovation Afrique\n" +
                "\n" +
                "ID : 358232"
        },

        {
            logo:GS,
            description: "BEAMTEL intégrateur de solutions de connectivité notamment WiFi"
        },

        {
            logo: ltera,
            description: "BEAMTEL collabore avec ce fournisseur en GPON LAN"
        },
        {
            logo: BL,
            description: "Contrat 2 ans:Consultants en Transformation Digitale »\n" +
                "\n" +
                "Client : Ministère de la Santé au Maroc",
        },





        /*{
            logo: at,
            description: "Nous sommes Intégrateur de la 5G privée de Athonet"
        },*/
       /* {
            logo: fire,
            description: "Nous sommes Intégrateur des solutions 5G de Firecell"
        },*/


        {
            logo: BOSCH,
            description: "BEAMTEL collabore avec ce fournisseur en GPON LAN"
        },
        {
            logo: TS,
            description: "Accès control systems"
        },
        {
            logo:MS,
            description:"BEAMTEL intégrateur de solutions Cyber Sécurité de Nucleon"
        }




    ];

    return (
        <div className="Partners-page">
            <Header />
            <NavBar />

            <div className="Partners-container">
                <h2 className="section-title">BEAMTEL'S PARTNERS</h2>


                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-card">
                            <div className="partner-logo">
                                <img
                                    alt={partner.name}
                                    src={partner.logo}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/logos/default.png';
                                    }}
                                />
                            </div>
                            <div className="partner-name">{partner.name}</div>
                        </div>
                    ))}
                </div>


                <div className="Partners-grid1">
                    {referenceItems.map((ref, index) => (
                        <div key={index} className="reference-card">
                            <div className="reference-logo">
                                <img
                                    src={ref.logo}
                                    alt={`Reference ${index + 1}`}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/logos/default.png';
                                    }}
                                />
                            </div>
                            <div className="reference-content">
                                <p>{ref.description}</p>
                                {ref.client && <p className="client"><strong>Client :</strong> {ref.client}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Partners;
