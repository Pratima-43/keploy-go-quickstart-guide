# Keploy + Go Echo Tutorial

A beginner-friendly Next.js + MDX documentation website explaining how to record real API interactions, generate test cases and PostgreSQL dependency mocks, and replay tests using **Keploy**.

Built as part of the **Keploy DevRel Candidate Assignment**.

---

## 🌟 Features

- **Next.js App Router + MDX Integration**: Clean, interactive documentation pages rendered directly from MDX.
- **Custom UI Component Suite**:
  - `Callout`: Contextual developer callouts (`info`, `tip`, `warning`, `success`).
  - `CodeBlock`: Dark terminal cards with syntax-friendly layout and `CopyButton`.
  - `StepCard`: Numbered walkthrough cards with badges and step indicators.
  - `HowItWorksDiagram`: Interactive tabbed flow diagram illustrating Keploy Record vs Test modes.
  - `TroubleshootingAccordion`: Interactive solution cards for common Docker, network, and CLI issues.
  - `TableOfContents`: Sticky section navigator tracking page scroll positions.
- **Dark / Light Theme Toggle**: Persistent dark mode styling inspired by Keploy branding.
- **Responsive & Accessible**: Optimized for mobile (375px+), tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router & Turbopack)
- **Content Format**: [MDX](https://mdxjs.com/) with `@next/mdx`
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

---

## 📁 Project Structure

```text
keploy-devrel-guide/
├── app/
│   ├── globals.css         # Custom CSS theme variables, scrollbars & base styles
│   ├── layout.tsx          # Root HTML layout, SEO metadata, Header & Footer wrappers
│   └── page.mdx            # Main MDX tutorial & documentation page
│
├── components/
│   ├── Callout.tsx         # Contextual callout banners (info, tip, warning, success)
│   ├── CodeBlock.tsx       # Dark terminal container with CopyButton integration
│   ├── CopyButton.tsx      # Copy-to-clipboard component with active feedback state
│   ├── Footer.tsx          # Documentation footer with external reference links
│   ├── Header.tsx          # Sticky navigation bar with theme toggle & GitHub link
│   ├── HowItWorksDiagram.tsx # Interactive diagram comparing Record vs Test phases
│   ├── StepCard.tsx        # Step-by-step tutorial card wrapper
│   ├── TableOfContents.tsx # Desktop sticky section tracking sidebar
│   └── TroubleshootingAccordion.tsx # Expandable troubleshooting guide
│
├── mdx-components.tsx      # MDX component mapping registry
├── next.config.mjs         # Next.js MDX loader configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Local Development

Follow these steps to run the documentation website locally:

### 1. Clone the Repository

```bash
git clone https://github.com/yprat/keploy-go-quickstart-guide.git
cd keploy-go-quickstart-guide
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live site.

---

## 📦 Production Build

To verify and test the production build locally:

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

---

## 📖 Quickstart Reference Covered

The tutorial is based on the official Keploy sample:
- **Sample Repository**: `https://github.com/keploy/samples-go`
- **Target Directory**: `samples-go/echo-sql`
- **Stack**: Go + Echo Framework + PostgreSQL + Docker Compose
