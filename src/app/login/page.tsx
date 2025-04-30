"use client";

import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Show loading state to user
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Handle cookies properly
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login
        console.log("Login successful!", data);
        // Here you could:
        // - Store auth token
        // - Update global auth state
        // - Redirect user to dashboard
      } else {
        // Handle specific error cases
        const errorMessage = data.message || "Login failed. Please try again.";
        console.error("Login failed:", errorMessage);
        // Here you could:
        // - Show error message to user
        // - Clear password field
        // - Focus email field
      }
    } catch (error) {
      // Handle network/unexpected errors
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      console.error("Error during login:", errorMessage);
      // Here you could:
      // - Show network error message
      // - Enable retry mechanism
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <h2>Welcome Back!</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "8px" }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "8px" }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
