// components/Services.jsx
import React from "react";
import Apps from "./Apps";
import Graphics from "./Graphics";
import Websites from "./Websites";

export default function Services() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <Apps />
        <Graphics />
        <Websites />
      </div>
    </section>
  );
}
