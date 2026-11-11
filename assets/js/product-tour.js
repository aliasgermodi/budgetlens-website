/* BudgetLens product carousel — change slide data here to add or reorder images. */
(function () {
  "use strict";
  const slides = [
    { image: "assets/screenshots/general-manager-overview.webp", alt: "General Manager Dashboard interface with sample demonstration data", title: "General Manager Dashboard", description: "An executive view of net sales, purchases, targets, priority alerts and the decisions management should review next.", category: "Executive", features: [["▥","Executive KPIs","Put core business measures in one place."],["◎","Targets and alerts","See progress, exceptions and attention areas."],["✦","Action-oriented overview","Connect findings to management priorities."]] },
    { image: "assets/screenshots/sales-performance.webp", alt: "Sales KPI Dashboard interface with sample demonstration data", title: "Sales KPI Dashboard", description: "Track sales activity, returns and core performance measures without rebuilding a spreadsheet for every review.", category: "Commercial", features: [["↗","Sales performance","Read headline commercial indicators."],["▤","Returns and activity","Keep sales movements in context."],["◎","Consistent reporting","Work from standardized ERP exports."]] },
    { image: "assets/screenshots/purchase-performance.webp", alt: "Purchase KPI Dashboard interface with sample demonstration data", title: "Purchase KPI Dashboard", description: "Review purchase volumes, returns and supplier activity through a focused purchasing performance workspace.", category: "Commercial", features: [["▥","Purchasing KPIs","Understand high-level buying activity."],["↗","Returns visibility","Keep adjustments in the reporting picture."],["◎","Supplier context","Link purchasing measures to relationships."]] },
    { image: "assets/screenshots/item-intelligence.webp", alt: "Item Intelligence interface with sample demonstration data", title: "Item Intelligence", description: "Connect item-level sales and purchasing to explore coverage, estimated gross profit and product contribution.", category: "Commercial", features: [["▣","Item-level performance","Move beyond totals to individual products."],["↗","Estimated profitability","Review calculated gross-profit measures."],["◎","Joined reporting","Compare purchasing and selling information."]] },
    { image: "assets/screenshots/item-directory.webp", alt: "Item KPIs & Drilldowns interface with sample demonstration data", title: "Item KPIs & Drilldowns", description: "Explore the searchable item directory and product-level indicators to investigate the products behind the numbers.", category: "Commercial", features: [["⌕","Find the right item","Quickly navigate the catalog."],["▤","Item detail","Examine product-specific summaries."],["◎","Operational context","Support more focused product reviews."]] },
    { image: "assets/screenshots/purchase-intelligence.webp", alt: "Purchase Intelligence interface with sample demonstration data", title: "Purchase Intelligence", description: "Look deeper into purchasing trends and supply-side metrics to support better buying and supplier decisions.", category: "Commercial", features: [["↗","Purchase trends","Understand how buying evolves."],["▤","Supplier-side context","Use purchase metrics in context."],["◎","Focused analysis","Investigate beyond headline totals."]] },
    { image: "assets/screenshots/customer-intelligence.webp", alt: "Customer Intelligence interface with sample demonstration data", title: "Customer Intelligence", description: "Explore customer measures and a searchable directory to discover patterns across the sales base.", category: "Commercial", features: [["▤","Customer directory","Locate accounts for investigation."],["↗","Commercial patterns","Review customer contribution."],["◎","More informed follow-up","Turn account data into context."]] },
    { image: "assets/screenshots/supplier-intelligence.webp", alt: "Supplier Intelligence interface with sample demonstration data", title: "Supplier Intelligence", description: "Review supplier KPIs and purchase relationships in one dedicated supplier workspace.", category: "Commercial", features: [["▥","Supplier KPIs","Inspect supply-side performance."],["▤","Supplier directory","Find and review individual suppliers."],["◎","Relationship context","Understand buying concentration."]] },
    { image: "assets/screenshots/salesperson-performance.webp", alt: "Salesperson KPIs interface with sample demonstration data", title: "Salesperson KPIs", description: "Give sales leaders a focused view of salesperson activity and contribution for more effective performance reviews.", category: "Commercial", features: [["↗","Team performance","Compare salesperson contribution."],["▤","Role-oriented reporting","Support sales manager reviews."],["◎","Accountability","Bring activity into a clearer context."]] },
    { image: "assets/screenshots/ask-budgetlens.webp", alt: "Ask BudgetLens · AI Workspace interface with sample demonstration data", title: "Ask BudgetLens · AI Workspace", description: "Ask business questions in everyday language through an AI workspace designed around the same governed local analytics as the dashboards.", category: "AI", features: [["✦","Natural-language questions","Ask for trends, comparisons and context."],["▤","Governed analytics","Reference structured business measures."],["◎","Decision support","Make the next investigation easier."]] },
    { image: "assets/screenshots/admin-overview.webp", alt: "Administration Overview interface with sample demonstration data", title: "Administration Overview", description: "A central overview of customers, subscriptions, licenses and installations for the teams administering BudgetLens.", category: "Administration", features: [["▤","Central oversight","Review key administrative entities."],["◎","Installation context","See the controlled deployment model."],["✓","Operations view","Keep licensing workflows organized."]] },
    { image: "assets/screenshots/license-management.webp", alt: "Licenses & Entitlements interface with sample demonstration data", title: "Licenses & Entitlements", description: "See how license plans, activation states and entitlements are organized in the administrative console.", category: "Administration", features: [["▣","License management","Track license status and records."],["✓","Entitlements","Manage access and installation limits."],["◎","Subscription context","Support customer lifecycle operations."]] }
  ];
  const root = document.getElementById("bl-product-carousel");
  if (!root) return;
  const image = document.getElementById("bl-tour-image");
  const count = document.getElementById("bl-tour-count");
  const title = document.getElementById("bl-tour-title");
  const description = document.getElementById("bl-tour-description");
  const features = document.getElementById("bl-tour-features");
  const dotsContainer = document.getElementById("bl-tour-dots");
  const dots = slides.map((s, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "bl-tour-dot";
    dot.setAttribute("aria-label", "Show " + s.title + " (" + (i + 1) + " of " + slides.length + ")");
    dotsContainer.append(dot);
    return dot;
  });
  const full = document.getElementById("bl-tour-full");
  const prev = document.getElementById("bl-tour-prev");
  const next = document.getElementById("bl-tour-next");
  let active = 0;

  function preloadNearby() {
    [slides[(active + 1) % slides.length], slides[(active + slides.length - 1) % slides.length]].forEach(s => { const img = new Image(); img.src = s.image; });
  }

  function render(index) {
    active = (index + slides.length) % slides.length;
    const slide = slides[active];
    preloadNearby();
    image.src = slide.image;
    image.alt = slide.alt;
    full.href = slide.image;
    full.setAttribute("aria-label", "Open full-size " + slide.title + " screenshot");
    count.textContent = "PRODUCT TOUR · " + String(active + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    title.textContent = slide.title;
    description.textContent = slide.description;
    features.replaceChildren();
    slide.features.forEach(([symbol, heading, detail]) => {
      const item = document.createElement("div");
      item.className = "bl-tour-feature";
      const ico = document.createElement("span");
      ico.className = "bl-tour-feature-symbol";
      ico.setAttribute("aria-hidden", "true");
      ico.textContent = symbol;
      const body = document.createElement("div");
      const strong = document.createElement("strong");
      strong.textContent = heading;
      const caption = document.createElement("span");
      caption.textContent = detail;
      body.append(strong, caption);
      item.append(ico, body);
      features.append(item);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === active);
      if (i === active) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  prev.addEventListener("click", () => render(active - 1));
  next.addEventListener("click", () => render(active + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => render(i)));
  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") { event.preventDefault(); render(active + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); render(active - 1); }
  });
  let startX = null;
  const screen = root.querySelector(".bl-laptop-screen");
  screen.addEventListener("touchstart", e => { startX = e.changedTouches[0]?.screenX ?? null; }, {passive:true});
  screen.addEventListener("touchend", e => {
    if (startX === null) return;
    const dx = (e.changedTouches[0]?.screenX ?? startX) - startX;
    startX = null;
    if (Math.abs(dx) > 55) render(active + (dx < 0 ? 1 : -1));
  }, {passive:true});
  document.querySelectorAll('[data-tour-target="ask"]').forEach(link => {
    link.addEventListener("click", () => render(slides.findIndex(s => s.category === "AI")));
  });
  render(0);
})();
