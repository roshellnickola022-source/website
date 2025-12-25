import { useState } from "react";

export default function Whitelist() {
  const [status, setStatus] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/whitelist", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    setStatus(res.ok ? "Application Sent!" : "Error sending application");
  }

  return (
    <div className="container">
      <h1>Whitelist Application</h1>

      <form onSubmit={submitForm}>
        <input name="icname" placeholder="IC Name" required />
        <input name="oocname" placeholder="OOC Name" required />
        <input name="age" placeholder="Age" required />
        <input name="country" placeholder="Country" required />
        <textarea name="experience" placeholder="RP Experience" required />
        <textarea name="reason" placeholder="Why should we whitelist you?" required />
        <button type="submit">Submit Application</button>
      </form>

      <p>{status}</p>
    </div>
  );
}