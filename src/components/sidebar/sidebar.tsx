"use client";

import React, { useState } from "react";
import { LuFlag, LuX } from "react-icons/lu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="w-96 bg-neutral-950 text-white rounded-xl shadow-xl p-6 z-50">
      <div className="flex justify-between items-start">
        <h2 className="text-teal-700 text-lg font-semibold">
          Welcome to Lyric Music
        </h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-teal-400"
        >
          <LuX className="cursor-pointer" />
        </button>
      </div>
      <div className="mt-4 space-y-4 text-sm text-neutral-500 leading-relaxed">
        <p>
          We&apos;re thrilled to have you join us on this musical journey! Lyric
          Music is your gateway to a fresh and immersive way to enjoy the bands
          and artists you love. Whether you&apos;re searching for your all-time
          favorite tracks, exploring curated playlists crafted to fit every
          mood, or discovering new songs that will soon become your go-to
          anthems, Lyric Music is here to elevate your listening experience.
        </p>
        <p>
          Imagine having the perfect soundtrack for every moment of your life,
          from energizing workouts to peaceful evenings under the stars. With an
          intuitive interface designed to make finding music effortless and
          enjoyable, you&apos;ll spend less time searching and more time
          grooving. Best of all, it&apos;s completely free—because we believe
          that great music should be accessible to everyone.
        </p>
        <p>
          At Lyric Music, we&apos;re passionate about creating a community where
          music lovers like you can explore, connect, and celebrate the power of
          sound. So dive in, press play, and let the music move you. Welcome to
          your new favorite way to listen.
        </p>
      </div>
      <div className="flex justify-between items-start mt-6 bg-[#1f1f1f] rounded-lg p-4">
        <LuFlag className="text-teal-700" size={60} />
        <div className="container w-40">
          <p className="text-teal-700 font-semibold">COMING SOON</p>
          <p className="text-gray-400 text-xs mt-1">
            Check out what’s new for 2025 from the Lyric team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
