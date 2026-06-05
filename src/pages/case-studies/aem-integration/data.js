export const AEM = {
  hero: {
    title: "Enterprise DAM Integration",
    subtitle: "Turning a $4M manual creative-ops workflow into a self-serve platform capability.",
    company: "DaVinci Commerce",
    duration: "2024 – 2025",
    role: "Senior Product Manager — end-to-end ownership from business scoping through delivery",
    tags: ["Enterprise Platform", "DAM Integration"],
  },

  problem: {
    stats: [
      { v: "70–100", l: "editorial creatives / day" },
      { v: "175–200", l: "hours of manual labor / day" },
      { v: "~$4M", l: "annual manual-ops cost" },
    ],
    paragraphs: [
      "A Fortune 100 fashion retailer produces 70–100 editorial creatives every day — hero banners, category pages, email assets, paid and organic social. Unlike PDP imagery, editorial work requires human creative judgment. That judgment can't be automated away; the manual work surrounding it can.",
      "Two bottlenecks consumed ~$4M a year: transforming each editorial image into a dozen aspect ratios, and assembling the finished creative. DaVinci's template-based assembly could deliver both speed and creative control — but only if assets could move in and out of DaVinci without re-creating the bottleneck elsewhere.",
      "The catch: every asset lived in Adobe Experience Manager, their enterprise DAM and source of truth. Any solution that still required manually downloading from AEM and re-uploading finished creatives would just relocate the manual cost.",
    ],
  },

  platform: {
    intro: "The obvious path was a one-off integration. I pushed back — the economics only worked if the integration became a reusable platform capability.",
    constraints: [
      {
        label: "Reusability",
        title: "Config-only setup for any AEM client",
        text: "AEM is the Fortune 500 DAM standard. A hardcoded connector for one client would get rebuilt for every next one. Configurable folder paths, metadata filtering, and writeback logic were non-negotiable.",
      },
      {
        label: "Self-Serve",
        title: "No DaVinci ops in the loop",
        text: "If every import/export required a support ticket, we'd just convert the client's manual cost into ours. The whole flow — connect, browse, import, assemble, export — had to run without engineering involvement.",
      },
    ],
  },

  architecture: {
    intro: "Bidirectional sync between AEM and DaVinci, with metadata integrity preserved in both directions and the flow self-serve end-to-end.",
  },

  decisions: [
    {
      label: "Configurable metadata writeback",
      text: "Finished creatives land back in AEM with the right taxonomy tags, channel codes, and usage-rights flags or downstream workflows break. Instead of hardcoding this client's schema, admins define writeback fields and derivation logic at setup. +2 weeks to build. Zero engineering for the next AEM client.",
    },
    {
      label: "UUID-based smart fetch",
      text: "The client's product feeds referenced AEM Asset IDs, not URLs. A DAM reorganization could silently break every creative. An internal API resolves UUIDs to current URLs and metadata at fetch time — eliminating an entire class of failures right when client confidence is being earned.",
    },
    {
      label: "Delete-and-recreate setup",
      text: "Initial configuration provisions dedicated S3 infra — folders, access paths, caches — tightly coupled to the connection params. Supporting in-place edits meant rebuilding provisioning for partial updates. A one-time setup constraint was the right trade; it's a rare, documented action.",
    },
    {
      label: "Export path lock",
      text: "Destinations are configurable at setup, but locked during an active export. Changing the folder mid-run risks partial writes and assets landing in the wrong place in a production DAM. Reliability > flexibility — the lock releases the moment the job completes.",
    },
  ],

  alignment: {
    stakeholders: [
      { label: "Creative team", want: "Speed" },
      { label: "IT team", want: "Metadata integrity" },
      { label: "Brand team", want: "Quality control" },
    ],
    poc: "Before committing to the build, I pushed for a client-side POC — their team ran the proposed workflow on real assets. That forced the three stakeholder groups to agree the flow worked for their process before a line of code was written.",
    phases: [
      { n: "Phase 1", title: "Config + UUID smart fetch", text: "Shipped the setup page and UUID-based asset resolution. Let the client's team begin using DaVinci on their Holiday POC campaign immediately." },
      { n: "Phase 2", title: "Full bidirectional sync", text: "AEM folder browsing, metadata-filtered import, bulk asset ingestion, and configurable metadata writeback on export." },
    ],
  },

  outcomes: [
    { value: "~$2M", label: "Annual savings", detail: "Against the ~$4M baseline — combination of template assembly and eliminated transfer overhead." },
    { value: "~30K", label: "Manual uploads eliminated / yr", detail: "Bidirectional sync — assets flow without anyone downloading, renaming, or re-uploading." },
    { value: "Reusable", label: "Platform capability", detail: "Any AEM-backed client now onboards with config-only setup. No custom engineering." },
  ],

  skills: [
    { skill: "Business & Market Sense", detail: "Commercial framing drove the product scope. I identified the $4M cost structure during discovery — not from the brief, but from direct workflow observation. Bidirectional sync was scoped specifically because import-only wouldn't deliver enough value to justify adoption." },
    { skill: "Product Sense", detail: "Rejected the one-off integration approach. Designed configurable writeback, metadata filtering, and UUID-based fetch as reusable capabilities — the first client's needs became configuration, not code." },
    { skill: "Communication", detail: "Aligned three stakeholder groups with conflicting goals (speed vs. metadata integrity vs. quality control). Forced a client-side POC to surface misalignment before the build. Phased delivery kept engagement high and feedback continuous." },
  ],
};
