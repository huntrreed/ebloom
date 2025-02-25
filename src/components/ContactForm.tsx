"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      action="https://formsubmit.co/huntrreed@gmail.com"
      method="POST"
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 border rounded-md bg-[#fef9f3] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45] w-full"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 border rounded-md bg-[#fef9f3] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45] w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        className="p-3 border rounded-md bg-[#fef9f3] text-[#4e3d34] focus:outline-none focus:ring-2 focus:ring-[#b77c45] w-full"
        required
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      {/* Hidden fields to disable captcha and redirect on success */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://emberedblooms.com/thank-you" />

      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-4 px-6 py-3 rounded-md font-semibold transition bg-[#b77c45] text-white hover:bg-[#8f5f33]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
