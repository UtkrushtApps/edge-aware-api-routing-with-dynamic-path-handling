## Task Overview
This assessment covers a multi-tenant analytics dashboard built with Next.js. The application must securely isolate tenant data using subdomain-based routing, enforce tenant context via middleware, dynamically load sensitive widgets, validate both tenant and role on API access, and ensure consistent UX by using error boundaries throughout navigation. The project should be fully containerized and production-ready.

## Guidance  
- The application supports SaaS tenants accessed via their respective subdomains.
- All code should remain inside the provided Next.js project structure, leveraging the App Router.
- Middleware is expected to enforce tenant restrictions and proper context propagation on all relevant routes.
- Sensitive analytics widgets should only be dynamically loaded when authorized and necessary.
- Error boundaries should be globally present to catch widget or navigation errors.
- API routes must verify tenant and role before serving data.
- SEO metadata for dynamic report pages must respect the tenant and report context.
- Use only built-in Next.js and JavaScript features, without third-party libraries beyond what's in the package.

## Objectives
- Repair the routing so each tenant organization only sees its own data and dashboard, with no cross-tenant data visible under any circumstances.
- Implement or correct middleware that blocks or redirects requests lacking a valid tenant context on all protected paths.
- Ensure dynamic widget components are securely loaded only for eligible users based on current tenant and user roles.
- Integrate a robust error boundary that catches errors in navigation or component rendering, preventing blank/unstable widget states.
- Update all API endpoints to strictly verify the tenant and role context before granting access to data or actions.
- Ensure report pages calculate and render precise SEO metadata according to the specific tenant and report being viewed.

## How to Verify
- Confirm that visiting dashboard or API endpoints without a valid tenant context is always redirected or denied as appropriate.
- Check that viewing dashboards under different subdomains never exposes data or widgets from another tenant, regardless of navigation path.
- Test dynamic widget loading: sensitive analytics widgets must appear only for authorized users and never leak across tenant/role checks.
- Introduce errors in a widget or navigation path and verify the error boundary reliably renders the fallback UI.
- Attempt API data requests with missing, incorrect, or mismatched tenant/role context and confirm access restrictions are correctly enforced.
- Evaluate report pages to ensure SEO meta tags match the viewed report and tenant, never defaulting to generic or incorrect info.
