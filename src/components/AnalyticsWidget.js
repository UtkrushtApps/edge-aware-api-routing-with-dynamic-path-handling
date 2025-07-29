import React from 'react';

export default function AnalyticsWidget() {
  // Candidate: Check user role/authorization to display sensitive analytics
  return (
    <section>
      <h3>Analytics Widget</h3>
      <div>Widget content for authorized users</div>
    </section>
  );
}
