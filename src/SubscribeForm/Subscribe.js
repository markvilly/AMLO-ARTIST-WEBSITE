import React, { useState } from "react";
import axios from "axios"; // If you're using Axios for HTTP requests

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the email to your mailing list service
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint of your service
      await axios.post("YOUR_API_ENDPOINT", { email });

      // Clear the input field after successful submission
      setEmail("");
      alert("Thanks for subscribing!");
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscribeForm;
