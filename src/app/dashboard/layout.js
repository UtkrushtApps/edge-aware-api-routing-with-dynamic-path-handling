import React from 'react';
import { getTenantFromHeaders } from '../../utils/tenant';

export default async function DashboardLayout({ children }) {
  // Intended to retrieve tenant context for dashboard
  const tenant = getTenantFromHeaders();
  return (
    <section>
      <header>
        <h1>Tenant Dashboard</h1>
        {tenant && <span>Organization: {tenant}</span>}
      </header>
      <div>{children}</div>
    </section>
  );
}
