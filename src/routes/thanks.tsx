import React from "react";

export default function Thanks() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-display mb-6">Thank you</h1>
        <p className="mb-6 text-muted-foreground">
          Your message was received. A partner will contact you within one business day.
        </p>
        <a href="/" className="inline-block rounded-sm bg-brand-blue-light px-6 py-3 text-white">Return home</a>
      </div>
    </main>
  );
}
