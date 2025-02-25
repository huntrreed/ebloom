"use client";
import { useState } from "react";

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
  
    console.log("Submitting form with data:", formData); // 🔍 DEBUG LOG
  
    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      console.log("Response received:", response); // 🔍 DEBUG LOG
  
      const result = await response.json();
      console.log("Server response:", result);
  
      if (response.ok) {
        setResponseMessage("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-md bg-[#fef9f3] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45] w-full"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-md bg-[#fef9f3] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45] w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <textarea
        placeholder="Your Message"
        className="p-3 border rounded-md bg-[#fef9f3] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45] w-full"
        required
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <div className="flex justify-center">
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
      </div>

      {responseMessage && (
        <p className="text-green-600 mt-2 text-center">{responseMessage}</p>
      )}
    </form>
  );
}
