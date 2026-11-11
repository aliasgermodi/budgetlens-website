# BudgetLens website assets

- `css/styles.css` — website styles.
- `images/budgetlens-logo.png` — shared brand logo used in the header, hero, and footer.
- `icons/favicon.png` — browser tab icon.
- `screenshots/` — add screenshots of BudgetLens features and dashboards here.

Use paths relative to the repository root, e.g. `<img src="assets/screenshots/dashboard-overview.webp" alt="BudgetLens dashboard">`.

Keep image file names lowercase with hyphens; prefer optimized WebP/PNG images and meaningful alt text. No screenshots are included yet.

## Product tour assets

The website's product showcase section lives in `index.html#screenshots`.
Screenshots are cropped from real BudgetLens demonstration capture files and saved as optimized WebP images in `assets/screenshots/`.

- `general-manager-overview.webp` — featured General Manager dashboard
- `sales-performance.webp`, `purchase-performance.webp` — commercial KPIs
- `item-intelligence.webp`, `purchase-intelligence.webp`, `item-directory.webp` — detailed analysis
- `customer-intelligence.webp`, `supplier-intelligence.webp`, `salesperson-performance.webp` — entity KPIs
- `ask-budgetlens.webp` — Ask BudgetLens interface
- `admin-overview.webp`, `license-management.webp` — cloud administration

Use demo-only screenshots without actual customer data. Every image links to the larger asset and has descriptive alt text. When replacing a capture, retain its filename to update the deployed site without changing HTML.
