"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center py-24"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
  <Link href="https://github.com/zahar2324" target="_blank" rel="noopener noreferrer">
    <Image src={GithubIcon} alt="Github Icon" />
  </Link>
  <Link href="https://www.linkedin.com/in/zahar-manko-59b82b30a" target="_blank" rel="noopener noreferrer">
    <Image src={LinkedinIcon} alt="Linkedin Icon" />
  </Link>
</div>
      </div> */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-96 h-96 bg-gradient-to-br from-primary-500 via-secondary-500 to-transparent opacity-30 rounded-full blur-3xl animate-pulse absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="z-10 flex flex-col items-center text-center bg-[#18191E]/80 rounded-3xl px-8 py-12 shadow-2xl border border-primary-700 max-w-xl w-full">
        <h5 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary-400 via-secondary-500 to-primary-400 bg-clip-text text-transparent animate-gradient-x">
          Let&apos;s Connect!
        </h5>
        <p className="text-[#ADB7BE] text-lg sm:text-xl mb-8 font-medium ">
          I am always open to new opportunities and interesting projects.<br />
          <div className="mt-10">
            <span className="text-white font-semibold ">Email:</span>{" "}
          <a
            href="mailto:frontend2024zahar@gmail.com"
            className="text-primary-400 underline hover:text-secondary-400 transition-colors duration-200"
          >
            frontend2024zahar@gmail.com
          </a>
          </div>
          <br />
          <span className="text-white font-semibold">Telegram:</span>{" "}
          <a
            href="https://t.me/zaharFront"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 underline hover:text-secondary-400 transition-colors duration-200"
          >
            @zaharFront
          </a>
        </p>
        <div className="flex flex-row gap-6 mt-4">
          <Link href="https://github.com/zahar2324" target="_blank" rel="noopener noreferrer">
            <Image
              src={GithubIcon}
              alt="Github Icon"
              className="w-10 h-10 hover:scale-110 transition-transform duration-200"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/zahar-manko-59b82b30a" target="_blank" rel="noopener noreferrer">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="w-10 h-10 hover:scale-110 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
      {/* <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div> */}
    </section>
  );
};

export default EmailSection;
