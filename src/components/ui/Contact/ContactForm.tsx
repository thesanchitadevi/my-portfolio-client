// components/ContactForm.tsx
"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://my-portfolio-server-alpha-ruby.vercel.app/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitSuccess(true);
      formRef.current?.reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to send message"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your.email@example.com"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Your message..."
          rows={4}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
          disabled={isSubmitting}
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 transition-colors disabled:bg-orange-300 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {submitSuccess && (
        <p className="text-green-600 text-sm">Message sent successfully!</p>
      )}
      {submitError && <p className="text-red-600 text-sm">{submitError}</p>}
    </form>
  );
}
