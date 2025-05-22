import React, { useState } from 'react';
import './career.css';
import backgroundImage from '../assets/background.jpg';
import Header from '../components/home/jsx/header';
import Footer from "../components/Footer";
import NavBar from '../components/home/jsx/navbar';


const Career = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        jobTitle: '',
        cv: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'cv') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <Header />
            <NavBar />

            {/* HERO SECTION AVEC FORMULAIRE */}
            <section
                className="hero-form-section"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="overlay-1">
                    <h1 className="form-title">Formulaire de candidature</h1>
                    <p className="form-subtitle">Rejoignez notre équipe !</p>

                    <form className="overlay-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nom *</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Prénom *</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Téléphone *</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Intitulé du poste souhaité</label>
                            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>CV (PDF)/ Lettre de motivation *</label>
                            <input type="file" name="cv" accept=".pdf" onChange={handleChange} required />
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </section>

            {/* WHY YOU / WHY US */}
            <section className="why-section">
                <div className="why-card">
                    <img
                        src="https://imgs.search.brave.com/Yq-DB7Tyd4ELbnvnfRVlQ5rgElI0vZFaru19qqGr8p4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95b3VuZy1naXJs/LXNocnVnZ2luZy1z/aG91bGRlcnMtaS1r/bm93LXdoeS1hcmUt/eW91LXNob3V0aW5n/LW1lXzI2MjI4OC0z/NjM1LmpwZz9zZW10/PWFpc19oeWJyaWQ"
                        alt="Why You"
                        className="why-image"
                    />
                    <div className="why-text">
                        <h2>Why You?</h2>
                        <p>
                            Because our success depends on yours! You're passionate about cybersecurity, data protection is one of your priorities, you're looking to develop your skills in a stimulating and constantly evolving sector, and you're looking for a rich and varied experience...
                        </p>
                    </div>
                </div>

                <div className="why-card">
                    <img
                        src="https://imgs.search.brave.com/BDCvbjnYJLXvoA58FbapycD3R4RM6XEsoCo8E6DeZJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODI2/NDQxMjY2L3Bob3Rv/L3doeS1jaG9vc2Ut/dXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPV9OR0RZUy1l/S2wxQmh0UUdJTXNQ/UGY4d251WlpaVHk0/eFVxdkhZa2JTeXM9"
                        alt="Why Us"
                        className="why-image"
                    />
                    <div className="why-text">
                        <h2>Why Us?</h2>
                        <p>
                            At BEAMTEL, employees are valued and empowered. We have much more than a job to offer you: A collaborative work environment that promotes diversity and mutual respect, assignments that stimulate your intellectual curiosity, and the opportunity to grow and flourish in a career with a future.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Career;



