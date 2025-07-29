import React from 'react';
import { Metadata } from 'next';
import { getReportMetadata } from '../../../utils/seo';

export async function generateMetadata({ params }) {
  // Candidate must implement tenant-specific report metadata
  return getReportMetadata(params.report);
}

export default function ReportPage({ params }) {
  // Candidate: Fetch and render report for tenant & report params
  return (
    <main>
      <h2>Report: {params.report}</h2>
      {/* Render report widget/content here */}
    </main>
  );
}
