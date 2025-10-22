import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
    <h1 className="text-2xl font-bold tracking-wide">Wardrobia</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-pink-500">Home</Link>
      <Link to="/moodboard" className="hover:text-pink-500">Moodboard</Link>
      <Link to="/ai-outfit" className="hover:text-pink-500">AI Outfit</Link>
      <Link to="/community" className="hover:text-pink-500">Community</Link>
      <Link to="/tips" className="hover:text-pink-500">Tips & Quizzes</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="text-center mt-16 px-4">
    <h2 className="text-5xl font-semibold mb-6">Your AI-Powered Fashion Universe</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-8">Curate your looks, generate outfits, connect with fashion lovers, and let AI style your day. Welcome to the next era of digital couture.</p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link to="/moodboard" className="px-6 py-3 bg-pink-500 text-white rounded-2xl hover:bg-pink-600">Create Moodboard</Link>
      <Link to="/ai-outfit" className="px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800">AI Outfit Generator</Link>
      <Link to="/community" className="px-6 py-3 bg-gray-200 rounded-2xl hover:bg-gray-300">Join the Community</Link>
    </div>
  </div>
);

const Moodboard = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-semibold mb-4">Moodboard Creator</h2>
    <p className="text-gray-600 mb-6">Upload and arrange your inspiration photos. Build your aesthetic vision.</p>
    <div className="border-2 border-dashed border-gray-300 p-8 rounded-2xl text-gray-400">Drop images here or click to upload</div>
  </div>
);

const AIOutfit = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-semibold mb-4">AI Outfit Generator</h2>
    <p className="text-gray-600 mb-6">Describe your outfit and let AI bring it to life using your uploaded wardrobe items.</p>
    <textarea className="border rounded-xl w-full max-w-xl p-3 mb-4" rows="4" placeholder="Describe your look (e.g., black crop top, denim skirt, silver hoops)"></textarea>
    <div className="flex justify-center gap-4">
      <button className="bg-pink-500 text-white px-6 py-3 rounded-2xl hover:bg-pink-600">Upload Closet Pics</button>
      <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800">Generate Look</button>
    </div>
  </div>
);

const Community = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-semibold mb-4">Fashion Community</h2>
    <p className="text-gray-600 mb-8">Meet other fashionistas, share tips, and connect through your love of style.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {["Ava Styles", "Luca Mode", "Mina Vogue"].map((name) => (
        <div key={name} className="p-6 border rounded-2xl shadow-sm hover:shadow-md">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600">Message</button>
        </div>
      ))}
    </div>
  </div>
);

const Tips = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-semibold mb-4">Tips & Quizzes</h2>
    <p className="text-gray-600 mb-6">Get beauty, fashion, and accessory tips or test your style knowledge.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {["Makeup Magic", "Accessory Vibes", "Find Your Core Aesthetic"].map((tip) => (
        <div key={tip} className="p-6 border rounded-2xl shadow-sm hover:shadow-md">
          <h3 className="text-lg font-semibold mb-2">{tip}</h3>
          <button className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800">Explore</button>
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moodboard" element={<Moodboard />} />
        <Route path="/ai-outfit" element={<AIOutfit />} />
        <Route path="/community" element={<Community />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </Router>
  );
}