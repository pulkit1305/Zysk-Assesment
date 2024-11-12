import React from "react";
import FeatureCard from "./FeatureCard";
import "./Features.css"; // Importing the features.css file

// Assuming images are stored in the `assets` folder
import msg from "../../assets/msg.png";
import light from "../../assets/light.png";
import chart from "../../assets/chart-breakout-square.png";
import smile from "../../assets/smile.png";
import square from "../../assets/square.png";
import heart from "../../assets/heart.png";

function Features() {
  return (
    <div className="features-section">
      <hr
        style={{
          borderColor: "#eaecf0",
          borderTopWidth: "1px",
          borderTopStyle: "solid",
        }}
      />
      <h5 className="features-title">Features</h5>
      <h1 className="main-title">
        Analytics that feels like it’s from the future
      </h1>
      <p className="subtitle">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="features-grid">
        <FeatureCard
          icon={msg}
          title="Share team inboxes"
          description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <FeatureCard
          icon={light}
          title="Deliver instant answers"
          description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        />
        <FeatureCard
          icon={chart}
          title="Manage your team with reports"
          description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks."
        />
        <FeatureCard
          icon={smile}
          title="Connect with customers"
          description="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
        />
        <FeatureCard
          icon={square}
          title="Connect the tools you already use"
          description="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
        />
        <FeatureCard
          icon={heart}
          title="Our people make the difference"
          description="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
        />
      </div>
    </div>
  );
}

export default Features;
