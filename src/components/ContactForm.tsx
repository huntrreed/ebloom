import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const formData = { name, email, message };
  
    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setResponseMessage(
          "Thanks! I'm excited to hear about your idea. I'll get in touch via email within 24-48 hours!"
        );
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
  
    setIsSubmitting(false);
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="p-3 border rounded-md bg-[#fef9f3] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45]"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-3 border rounded-md bg-[#fef9f3] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45]"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your Message"
        className="p-3 border rounded-md bg-[#fef9f3] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45]"
        required
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        className={`mt-4 px-6 py-3 rounded-md font-semibold transition ${
          isSubmitting
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-[#b77c45] text-white hover:bg-[#8f5f33]"
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Send Message"}
      </button>

      {responseMessage && <p className="text-green-600 mt-2">{responseMessage}</p>}
    </form>
  );
}
