import React, { useState } from "react";
import "./Contact.css";
import bottomLeftDesign from "../assets/bottomLeftDesign.png";
import topRightDesign from "../assets/topRightDesign.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // ✅ for animated success UI

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !message || !phone) {
      setStatusMessage("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsSuccess(false);
    setStatusMessage(""); // ✅ removed “Submitting...” from appearing below

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000); // hide animation after 3s
      } else {
        setStatusMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      {/* ✅ Decorative Mandalas */}
      <img src={bottomLeftDesign} alt="Decorative Top Right" className="top-right-design" />
      <img src={topRightDesign} alt="Decorative Bottom Left" className="bottom-left-design" />

      <div className="contact-left">
        <p>
          Whether you have an idea, a question, or simply want to explore how V can work with you — we’re just a message away.
          <br />
          Let’s catch up over coffee. <br />
          Great stories always begin with a good conversation.
        </p>
      </div>

      <div className="contact-right">
        <div className="contact-header">
          <h2>Join the Story</h2>
          <p>Ready to bring your vision to life? Let’s talk.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message*"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? (
              <span className="loading">
                <span className="spinner"></span> Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        {/* ✅ Animated success toast */}
        {isSuccess && (
          <div className="success-toast">
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
            <p>Form Submitted Successfully!</p>
          </div>
        )}

        {/* ✅ Keep status message only for errors */}
        {!isSubmitting && statusMessage && !isSuccess && (
          <p className="status-message">{statusMessage}</p>
        )}

        <div className="contact-footer">
          <span>vernita@varnanfilms.co.in</span>
          <div className="divider"></div>
          <span>+91 98736 84567</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
