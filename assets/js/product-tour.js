/* BudgetLens product carousel — change slide data here to add or reorder images. */
(function () {
  "use strict";
  const slides = [
    {
      image: "assets/screenshots/general-manager-overview.webp",
      alt: "General Manager dashboard: sample executive KPIs, target health and priority alerts",
      title: "General Manager Dashboard",
      description: "A single management view of net sales, purchasing, target health, priority alerts, and recommended actions.",
      features: [
        ["▥", "Executive KPIs", "See sales, purchasing, and management performance together."],
        ["◎", "Targets and exceptions", "Identify progress, warnings, and priority alerts."],
        ["✦", "Management actions", "Focus on the next decisions that matter."]
      ]
    },
    {
      image: "assets/screenshots/sales-performance.webp",
      alt: "BudgetLens sales KPI dashboard using demonstration data",
      title: "Sales Performance",
      description: "Bring sales totals, returns and activity into one clear view—without repeatedly assembling spreadsheets.",
      features: [
        ["↗", "Sales KPIs", "Review turnover, returns, and operating indicators."],
        ["▤", "Faster reporting", "Move from raw ERP exports to a structured KPI view."],
        ["◎", "Better visibility", "Give commercial teams a consistent starting point."]
      ]
    },
    {
      image: "assets/screenshots/item-intelligence.webp",
      alt: "BudgetLens item intelligence with connected sales and purchase summaries",
      title: "Item Intelligence",
      description: "Connect product-level sales and purchasing to understand item coverage, estimated gross profit and trading patterns.",
      features: [
        ["▣", "Product-level analysis", "See item performance beyond top-line totals."],
        ["↗", "Profitability insights", "Review estimated gross profit and relevant measures."],
        ["◎", "Connected data", "Bring sales and purchasing information into context."]
      ]
    },
    {
      image: "assets/screenshots/ask-budgetlens.webp",
      alt: "Ask BudgetLens natural-language question workspace with demonstration data",
      title: "Ask BudgetLens",
      description: "Explore a natural-language question workspace designed to make governed local business analytics easier to understand.",
      features: [
        ["✦", "Business questions", "Work with management questions in natural language."],
        ["▤", "Governed context", "Build on the same analytical foundation as the dashboards."],
        ["✓", "Local-first approach", "Keep the analytical workspace under company control."]
      ]
    }
  ];
  const root = document.getElementById("bl-product-carousel");
  if (!root) return;
  const image = document.getElementById("bl-tour-image");
  const count = document.getElementById("bl-tour-count");
  const title = document.getElementById("bl-tour-title");
  const description = document.getElementById("bl-tour-description");
  const features = document.getElementById("bl-tour-features");
  const dots = Array.from(document.querySelectorAll("#bl-tour-dots button"));
  const full = document.getElementById("bl-tour-full");
  const prev = document.getElementById("bl-tour-prev");
  const next = document.getElementById("bl-tour-next");
  let active = 0;

  slides.forEach(s => { const preload = new Image(); preload.src = s.image; });

  function render(index) {
    active = (index + slides.length) % slides.length;
    const slide = slides[active];
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
  render(0);
})();
