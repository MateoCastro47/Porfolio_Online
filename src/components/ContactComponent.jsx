import "./css/ContactComponent.css";

function ContactComponent() {
    return (
        <section className="contact-section">
            <article className="contact-container">
                <div className="contact-header">
                    <h1>Get in touch</h1>
                    <p>A short form to contact me</p>
                </div>

                <form className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="your@email.com" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Subject">Subject</label>
                        <select name="subject" className="form-input">
                            <option>Internship opportunity</option>
                            <option>Freelance Project</option>
                            <option>Job offer</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </article>
        </section>
    )
}