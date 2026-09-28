"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const { error } = await supabase
      .from("Enquiry")
      .insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          goal: formData.goal || null,
          message: formData.message || null,
          status: "new",
        },
      ]);

    if (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    setSuccess(
      "Your enquiry has been submitted successfully. We'll contact you soon!"
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      goal: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-white"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
          className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-white"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-white"
        />
      </div>

      {/* Goal */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Fitness Goal
        </label>

        <select
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-white"
        >
          <option value="">Select your goal</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Muscle Gain">Muscle Gain</option>
          <option value="Strength & Fitness">
            Strength & Fitness
          </option>
          <option value="General Fitness">General Fitness</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Message
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for..."
          rows={4}
          className="w-full resize-none rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-white"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Success */}
      {success && (
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-400">
          {success}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Send Enquiry"}
      </button>
    </form>
  );
}