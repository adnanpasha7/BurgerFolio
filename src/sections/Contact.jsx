import React from "react";

const ContactPage = () => {
  return (
    <section id="contact">
<div className="min-h-screen flex flex-col items-center justify-center bg-secondary p-6">
      <div className="max-w-xl w-full bg-primary bg-opacity-10 p-8 rounded-lg shadow-lg text-primary">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

        {/* Social & Contact Info */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center gap-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.73 1.05 4.27 4.27 0 00-7.28 3.9A12.12 12.12 0 013 4.7a4.27 4.27 0 001.32 5.7 4.22 4.22 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.18 4.28 4.28 0 01-1.92.07 4.28 4.28 0 003.99 2.97A8.56 8.56 0 012 19.54a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.7 8.7 0 0022.46 6z" />
            </svg>
            <a
              href="https://twitter.com/yourtwitterhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @yourtwitterhandle
            </a>
          </div>

          <div className="flex items-center gap-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            <a
              href="https://instagram.com/yourinstagramhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @yourinstagramhandle
            </a>
          </div>

          <div className="flex items-center gap-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16 8a6 6 0 11-8 0 6 6 0 018 0zM2 20a10 10 0 0116 0v-3a4 4 0 10-8 0v3a10 10 0 01-8 0z" />
            </svg>
            <a
              href="https://linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/yourlinkedinprofile
            </a>
          </div>

          <div className="flex items-center gap-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <a href="mailto:your.email@example.com" className="hover:underline">
              your.email@example.com
            </a>
          </div>
        </div>

        {/* Placeholder for Contact Form */}
        <div className="border-t border-primary pt-8 text-center text-primary italic">
          Contact form coming soon...
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactPage;
