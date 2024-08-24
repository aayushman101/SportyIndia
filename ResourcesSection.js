import React from 'react';

const ResourcesSection = () => {
    return (
        <section id="resources" className="resources-section">
            <div className="container">
                <h2>Sport-specific Resources</h2>
                <div className="resources-grid">
                    <div className="resource-item">
                        <h3>Diet and Nutrition</h3>
                        <p>Get recommended diet plans and nutritional tips for your sport.</p>
                    </div>
                    <div className="resource-item">
                        <h3>Fitness Tips</h3>
                        <p>Access sport-specific fitness routines and workout plans.</p>
                    </div>
                    <div className="resource-item">
                        <h3>Training Programs</h3>
                        <p>Find out about upcoming training programs, camps, and workshops.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;
