/**
 * SEO helper for generating dynamic metadata per report page
 */
export async function getReportMetadata(reportId) {
  // Candidate must implement dynamic metadata logic based on report and tenant
  return {
    title: 'Report: ' + reportId,
    description: 'Tenant-specific analytics report.',
  };
}
