import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-purple-900 via-black to-pink-900 bg-[length:200%_200%]"></div>
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center text-center py-24 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
            AI-Powered Code Reviewer
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl">
            Instantly analyze and improve your code with our smart AI assistant. 
            Save time, write better code, and learn best practices all in one place.
          </p>
          <a
            href="/review"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition duration-300"
          >
            Start Reviewing Your Code
          </a>
        </header>

        {/* Features Section */}
        <section className="flex flex-wrap justify-center gap-8 px-6 py-12 max-w-6xl mx-auto">
          <FeatureCard
            title="⚡ Instant Feedback"
            description="Get immediate suggestions and improvements on your code without any wait."
          />
          <FeatureCard
            title="📚 Learn Best Practices"
            description="Understand coding standards and improve your skills over time."
          />
          <FeatureCard
            title="🌐 Multi-Language Support"
            description="Review code written in JavaScript, Python, Java, and many more."
          />
          <FeatureCard
            title="🔒 Secure & Private"
            description="Your code is processed securely and never stored permanently."
          />
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-400 border-t border-gray-700 mt-auto text-sm">
  <div>&copy; {new Date().getFullYear()} AI Code Reviewer. All rights reserved.</div>
  <div>
    Made with <span className="text-red-500">❤️</span> by{" "}
    <a
      href="https://your-portfolio-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      Aditya
    </a>
  </div>
</footer>

      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="flex flex-col items-center bg-gray-800 bg-opacity-90 rounded-xl shadow-md p-6 max-w-xs text-center transition transform hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-3xl mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
