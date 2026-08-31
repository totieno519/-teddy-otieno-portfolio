"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Business Website",
  "Personal Website",
  "Web Application",
  "Management System",
  "E-commerce Website",
  "Website Redesign",
  "Other",
];

const budgetRanges = [
  "Below KSh 20,000",
  "KSh 20,000 – 50,000",
  "KSh 50,000 – 100,000",
  "KSh 100,000 – 250,000",
  "Above KSh 250,000",
  "I'm not sure yet",
];

export default function HireForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      projectType: String(formData.get("projectType") || "").trim(),
      budget: String(formData.get("budget") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your project inquiry."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Project inquiry error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-[#0b0d10] p-8 sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffd400] text-xl font-bold text-black">
          ✓
        </div>

        <h3 className="mt-7 text-3xl font-black tracking-tight text-white">
          Thanks for reaching out.
        </h3>

        <p className="mt-4 max-w-xl leading-8 text-white/45">
          Your project inquiry has been submitted successfully. I&apos;ll
          review the details and get back to you as soon as possible.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setErrorMessage("");
          }}
          className="mt-7 inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-sm font-bold text-white transition hover:border-[#ffd400]/50 hover:text-[#ffd400]"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-[#0b0d10] p-7 sm:p-10"
    >
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffd400]">
          Project Inquiry
        </p>

        <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Tell me about your project.
        </h3>

        <p className="mt-4 max-w-2xl leading-7 text-white/40">
          Give me a few details about what you want to build. The more
          information you provide, the better I can understand your needs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-white/70"
          >
            Your name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
            className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ffd400]/60 focus:bg-white/[0.05]"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-white/70"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ffd400]/60 focus:bg-white/[0.05]"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-semibold text-white/70"
          >
            Company / Organization
            <span className="ml-2 text-xs font-normal text-white/25">
              Optional
            </span>
          </label>

          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or organization"
            className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ffd400]/60 focus:bg-white/[0.05]"
          />
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block text-sm font-semibold text-white/70"
          >
            Project type
          </label>

          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="h-13 w-full rounded-xl border border-white/10 bg-[#111318] px-4 text-sm text-white outline-none transition focus:border-[#ffd400]/60"
          >
            <option value="" disabled>
              Select project type
            </option>

            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className="md:col-span-2">
          <label
            htmlFor="budget"
            className="mb-2 block text-sm font-semibold text-white/70"
          >
            Estimated budget
          </label>

          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className="h-13 w-full rounded-xl border border-white/10 bg-[#111318] px-4 text-sm text-white outline-none transition focus:border-[#ffd400]/60"
          >
            <option value="" disabled>
              Select a budget range
            </option>

            {budgetRanges.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        {/* Project Description */}
        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-white/70"
          >
            Tell me about your project
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={7}
            placeholder="What are you trying to build? What problem should it solve? Do you have a deadline?"
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/20 focus:border-[#ffd400]/60 focus:bg-white/[0.05]"
          />
        </div>
      </div>

      {/* Error message */}
      {errorMessage && (
        <div
          role="alert"
          className="mt-7 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm leading-6 text-red-300"
        >
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-white/25">
          Your information will only be used to discuss your project.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-13 items-center justify-center rounded-full bg-[#ffd400] px-7 text-sm font-black text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffe45c] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isSubmitting ? "Sending..." : "Send Project Inquiry"}

          <span className="ml-3">
            {isSubmitting ? "..." : "↗"}
          </span>
        </button>
      </div>
    </form>
  );
}