"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center py-24"
    >
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
    </section>
  );
};

export default EmailSection;