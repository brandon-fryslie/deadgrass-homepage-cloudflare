// pages/index.tsx
import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Deadgrass Ltd. - Coming Soon</title>
          <meta name="description" content="A unique fusion of Grateful Dead-era music and horses." />
        </Head>

        {/* Hero Section */}
        <section className="flex-1 bg-cover bg-[url('/hero-background.jpg')] text-white text-center flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>
          <p className="text-xl mb-8">A mysterious blend of jam bands and equine elegance.</p>
          <form className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-2 rounded-l" />
            <button type="submit" className="bg-purple-500 p-2 rounded-r">Subscribe</button>
          </form>
        </section>

        {/* About Section */}
        <section className="bg-gray-100 p-8 text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg">Delving into a world where music meets the majesty of horses.</p>
        </section>

        {/* Contact Section */}
        <section className="p-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <form className="flex flex-col items-center">
            <input type="text" placeholder="Name" className="p-2 my-2 w-1/2" />
            <input type="email" placeholder="Email" className="p-2 my-2 w-1/2" />
            <textarea placeholder="Message" className="p-2 my-2 w-1/2 h-40"></textarea>
            <button type="submit" className="bg-green-500 p-2 rounded">Send</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white text-center p-4">
          © 2024 Deadgrass Ltd. All rights reserved.
        </footer>
      </div>
  );
};

export default Home;
