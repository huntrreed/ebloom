import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ Correct import

export default function ContactForm(): JSX.Element {
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ EmailJS Config
  const serviceID = "service_vn3ptoo";  
  const templateID = "template_x58rb0v";  
  const publicKey = "jc98jMa-m9nhsM0Zh";  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: name,  
      from_email: email, 
      message,           
    };

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        { publicKey }
      );
      
      console.log("EmailJS Response:", response); // ✅ Log response

      setResponseMessage("Message sent successfully! ✅");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error); // ✅ Log error
      setResponseMessage("Failed to send message. Please try again. ❌");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="text-[#4e3d34] font-semibold">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="p-3 border rounded-md bg-[#eadfcb] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45]"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="text-[#4e3d34] font-semibold">Your Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="p-3 border rounded-md bg-[#eadfcb] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45]"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="text-[#4e3d34] font-semibold">Your Message</label>
      <textarea
        id="message"
        name="message"
        className="p-3 border rounded-md bg-[#eadfcb] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45]"
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
