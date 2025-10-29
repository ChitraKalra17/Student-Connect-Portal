import React, { useState } from 'react';

const Connect = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! We will help you find connections. (This is a demo)');
    };

    const handleInterestClick = (interest) => {
        setSelectedInterests(prevInterests => {
            if (prevInterests.includes(interest)) {
                return prevInterests.filter(item => item !== interest);
            } else {
                return [...prevInterests, interest];
            }
        });
    };

    return (
        <section className="connect-section" style={{ padding: '5rem 0', backgroundColor: '#f5f7fb' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Connect with Peers</h2>
                    <p>Tell us about yourself and what you're looking for, and we'll help you find the perfect connections.</p>
                </div>
                <div className="connect-form">
                    <form id="connectForm" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">University Email</label>
                                <input type="email" className="form-control" id="email" placeholder="your.name@chitkara.edu.in" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label" htmlFor="program">Program/Course</label>
                                <select className="form-control" id="program" required>
                                    <option value="">Select your program</option>
                                    <option value="btech">B.Tech</option>
                                    <option value="bba">BBA</option>
                                    <option value="mba">MBA</option>
                                    <option value="mca">MCA</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="year">Year of Study</label>
                                <select className="form-control" id="year" required>
                                    <option value="">Select your year</option>
                                    <option value="1">1st Year</option>
                                    <option value="2">2nd Year</option>
                                    <option value="3">3rd Year</option>
                                    <option value="4">4th Year</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Areas of Interest</label>
                            <div className="interests-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                                {[
                                    'Programming', 'Design', 'Business', 'Marketing', 'AI/ML', 
                                    'Research', 'Sports', 'Music', 'Art', 'Leadership', 
                                    'Entrepreneurship', 'Writing'
                                ].map(interest => (
                                    <div
                                        key={interest}
                                        className={`interest-item ${selectedInterests.includes(interest) ? 'selected' : ''}`}
                                        data-interest={interest}
                                        onClick={() => handleInterestClick(interest)}
                                    >
                                        {interest}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="goal">Connection Goal</label>
                            <select className="form-control" id="goal" required>
                                <option value="">What are you looking for?</option>
                                <option value="project">Project Collaboration</option>
                                <option value="study">Study Group</option>
                                <option value="mentor">Mentorship</option>
                                <option value="networking">General Networking</option>
                                <option value="startup">Startup Team</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Tell us more about what you're looking for</label>
                            <textarea className="form-control" id="message" rows="4"
                                placeholder="Describe your interests, goals, and what kind of connections you're hoping to make..."></textarea>
                            <div className="char-count"></div>
                        </div>

                        <div className="form-submit" style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <button type="submit" className="btn btn-primary">Find Connections</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Connect;
