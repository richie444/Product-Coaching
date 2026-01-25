# Product Coaching Platform

A modern, full-featured product management coaching and learning platform built with Next.js 14, TypeScript, and Shadcn UI.

## Features

- 🎯 **Personalized Onboarding** - Career stage assessment and customized learning paths
- 📚 **Course Library** - Expert-led courses with video lessons and exercises
- 📊 **Progress Tracking** - Real-time dashboard with stats and achievements
- 💳 **Flexible Checkout** - One-time or installment payment options
- 👥 **Community** - Connect with fellow product managers
- 🎓 **Certifications** - Earn recognized PM certificates

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd product-coaching-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
product-coaching-web/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Home/Landing page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── signup/                  # Sign up page
│   ├── onboarding/              # Onboarding flow
│   │   ├── welcome/
│   │   ├── career-stage/
│   │   ├── goals/
│   │   ├── time-commitment/
│   │   └── recommendation/
│   ├── dashboard/               # Learner dashboard
│   ├── courses/[slug]/          # Course detail pages
│   └── checkout/                # Checkout flow
│       ├── page.tsx
│       └── success/
├── components/
│   └── ui/                      # Shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       ├── progress.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts                 # Utility functions
└── public/                      # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## User Flows

### 1. Onboarding Flow
1. Sign up → Welcome → Career Stage → Goals → Time Commitment → Recommendation → Dashboard

### 2. Checkout Flow
1. Browse Courses → Course Detail → Checkout → Payment → Success

### 3. Learning Flow
1. Dashboard → Continue Course → Watch Lesson → Complete Exercise → Progress Update

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## License

MIT
