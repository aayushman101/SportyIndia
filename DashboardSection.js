import React from 'react';

const DashboardSection = () => {
    return (
        <section id="athlete-dashboard" className="dashboard-section">
            <div className="container">
                <h2>Athlete Dashboard</h2>
                <div className="dashboard">
                    <div className="profile-section">
                        <h3>Profile</h3>
                        <div className="profile-info">
                            <p><strong>Name:</strong> <span id="athleteName">John Doe</span></p>
                            <p><strong>Age:</strong> 22</p>
                            <p><strong>Sports:</strong> <span id="athleteSports">Football, Hockey</span></p>
                        </div>
                    </div>
                    <div className="performance-section">
                        <h3>Performance Tracker</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Match</th>
                                    <th>Goals/Points</th>
                                    <th>Assists/Saves</th>
                                </tr>
                            </thead>
                            <tbody id="performanceTable">
                                {/* Dynamic content will be loaded here */}
                            </tbody>
                        </table>
                    </div>
                    <div className="submission-section">
                        <h3>Submit Your Performance</h3>
                        <form id="submitForm">
                            <label htmlFor="sport">Sport:</label>
                            <select id="sport" name="sport" required>
                                <option value="">Select Sport</option>
                                <option value="Football">Football</option>
                                <option value="Hockey">Hockey</option>
                                <option value="Athletics">Athletics</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Javeline">Javeline</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Shooting">Shooting</option>
                                <option value="Weight-lifting">Weight-lifting</option>
                            </select>
                            <label htmlFor="date">Date:</label>
                            <input type="date" id="date" name="date" required />
                            <label htmlFor="match">Match/Event:</label>
                            <input type="text" id="match" name="match" placeholder="Enter match or event name" required />
                            <label htmlFor="performance">Performance:</label>
                            <textarea id="performance" name="performance" placeholder="Describe your performance" required></textarea>
                            <label htmlFor="video">Upload Video:</label>
                            <input type="file" id="video" name="video" />
                            <label htmlFor="photo">Upload Photo:</label>
                            <input type="file" id="photo" name="photo" />
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardSection;
