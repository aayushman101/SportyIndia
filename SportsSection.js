import React from 'react';

const sportsData = [
    { img: '/football.jpeg', title: 'Football', description: 'Showcase your football skills and track your performance.' },
    { img: '/hockey.avif', title: 'Hockey', description: 'Submit your hockey performance and achievements.' },
    { img: '/javeline.jpeg', title: 'Javeline', description: 'Submit your Javeline performance and achievements.' },
    { img: '/shooting.webp', title: 'Shooting', description: 'Submit your Shooting performance and achievements.' },
    { img: '/cricket.webp', title: 'Cricket', description: 'Submit your Cricket performance and achievements.' },
    { img: '/athletics.jpeg', title: 'Athletics', description: 'Track your athletics achievements and progress.' },
    { img: '/wl.avif', title: 'Weight-lifting', description: 'Track your weight-lifthing achievements and progress.' },
    { img: '/pv.jpg', title: 'Pole Vault', description: 'Track your weight-lifthing achievements and progress.' },
    { img: '/wrestling.avif', title: 'Long/High Jump', description: 'Track your weight-lifthing achievements and progress.' },
];

const SportsSection = () => {
    return (
        <section id="sports" className="sports-section">
            <div className="container">
                <h2>Sports We Cover</h2>
                <div className="sports-grid">
                    {sportsData.map((sport, index) => (
                        <div className="sport-item" key={index}>
                            <img src={sport.img} alt={sport.title} />
                            <h3>{sport.title}</h3>
                            <p>{sport.description}</p>
                            <a href="#athlete-dashboard" className="btn">Go to Dashboard</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SportsSection;
