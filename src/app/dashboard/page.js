import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Sensitive widget loaded dynamically for authorized users only
const AnalyticsWidget = dynamic(
  () => import('../../components/AnalyticsWidget'),
  { ssr: false }
);

export default function DashboardHome() {
  // Widget loading/authorization is unfinished for candidate
  return (
    <main>
      <h2>Dashboard Home</h2>
      <Suspense fallback={<div>Loading widgets...</div>}>
        <AnalyticsWidget />
      </Suspense>
    </main>
  );
}
