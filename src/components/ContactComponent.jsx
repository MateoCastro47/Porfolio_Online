import "./css/ContactComponent.css";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactComponent() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            'service_s498l46',      // ← Reemplaza con tu Service ID
            'template_diia8qs',     // ← Reemplaza con tu Template ID
            form.current,
            '2Epwaa5ONpjqzb2rF'       // ← Reemplaza con tu Public Key
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            setSubmitStatus('success');
            setIsSubmitting(false);
            form.current.reset(); // Limpia el formulario
            
            // Mensaje de éxito desaparece después de 5 segundos
            setTimeout(() => setSubmitStatus(null), 5000);
        }, (error) => {
            console.log('Error sending email:', error.text);
            setSubmitStatus('error');
            setIsSubmitting(false);
            
            setTimeout(() => setSubmitStatus(null), 5000);
        });
    };

    return (
        <section className="contact-section-modern">
            <div className="contact-main-wrapper">
                <div className="contact-container-modern">
                    <div className="contact-content-grid">
                        <div className="contact-form-wrapper">
                            <form ref={form} onSubmit={sendEmail} className="contact-form-modern">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <div className="input-wrapper">
                                            <svg className="input-icon">...</svg>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="user_name"  
                                                placeholder="Mateo Castro" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <div className="input-wrapper">
                                            <svg className="input-icon">...</svg>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="user_email"  
                                                placeholder="email@example.com" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        rows="6" 
                                        placeholder="Hi, I'm interested in your profile..."
                                        required
                                    ></textarea>
                                </div>
                                
                                {/* Mensajes de estado */}
                                {submitStatus === 'success' && (
                                    <div className="alert alert-success">
                                        ✅ Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}
                                
                                {submitStatus === 'error' && (
                                    <div className="alert alert-error">
                                        ❌ Oops! Something went wrong. Please try again.
                                    </div>
                                )}

                                <div className="form-footer">
                                    <p className="form-note">Typically replies within 24 hours</p>
                                    <button 
                                        type="submit" 
                                        className="btn-submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <svg>...</svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactComponent;