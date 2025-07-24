"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../styles/ProfileTabs.css";

const tabs = [
  { id: "recipes", label: "Recipes", href: "/profile/recipes" },
  { id: "blogs", label: "Blog Posts", href: "/profile/blogs" },
  { id: "saved", label: "Saved", href: "/profile/saved" },
];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("recipes");

  return (
    <div className="tab-container">
      {tabs.map((tab) => (
        <Link
          href={tab.href}
          key={tab.id}
          className={`tab-link ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}