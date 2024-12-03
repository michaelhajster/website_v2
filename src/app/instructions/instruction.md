
# Product Requirements Document (PRD)

## Project Overview

We are building a modern, professional website for **"xahead,"** a company specializing in AI strategies and workshops. The website aims to prepare businesses for the future of AI by offering foundational services (AI Literacy and Strategy Workshops, Applied AI Use Case Discovery, and Prompt Optimization) and advanced solutions (Retrieval-Augmented Generation and Autonomous AI Agents). The website should effectively communicate the company's offerings, engage potential clients, and facilitate contact and booking through integrated tools.

The platform will be developed using **Next.js**, **Tailwind CSS**, **Shadcn UI components**, and **Lucide Icons**. The design will have a minimalistic, modern style with a **dark mode theme**, similar to [Vercel's](https://vercel.com/) design language.

---

## Core Functionalities

### 1. Homepage

#### 1.1 Hero Section

- **Headline**:  
  *"Bereiten Sie Ihr Unternehmen auf die Zukunft der AI vor"*

- **Subheadline**:  
  *"Mit gezielten AI-Strategien und Workshops unterstützen wir Sie dabei, das Potenzial der heutigen AI zu nutzen und auf die Möglichkeiten von morgen vorzubereiten."*

- **Intro Text**:  
  "Bei xahead bieten wir fundierte Beratung für Unternehmen, die bereit sind, AI zu integrieren – von den Grundlagen bis hin zu fortgeschrittenen Lösungen. Wir bringen Klarheit und Innovation in jede Phase Ihrer AI-Reise."

- **Call-to-Action (CTA)**:
  - *"Starten Sie Ihre AI-Reise"* (links to Foundation Services page)
  - *"Erfahren Sie mehr über Advanced AI Solutions"* (links to Advanced Solutions page)

#### 1.2 Service Highlights

- **Sections**:
  - **Foundation Services**: Brief overview with a link to the detailed Foundation Services page.
  - **Advanced Solutions**: Brief overview with a link to the detailed Advanced Solutions page.

- **Components**:
  - **ServiceHighlight**: Renders a summary of each service category with an icon, title, brief description, and a link to learn more.

### 2. Foundation Services Page

#### 2.1 AI Literacy and Strategy Workshops

- **Title**: *"Foundation Services: Bauen Sie AI Literacy und Strategie auf"*

- **Description**:  
  "Unsere Grundlagen-Workshops vermitteln Ihrem Team die Werkzeuge, um die Möglichkeiten von AI zu verstehen. Sie ermöglichen fundierte Entscheidungen und eine strategische Implementierung. Perfekt für Unternehmen, die ihre AI-Reise beginnen oder internes Wissen erweitern möchten."

- **CTA**: *"Erweitern Sie Ihre AI Literacy"*

- **Components**:
  - **ServiceDetail**: Displays detailed information about the workshop with an engaging layout.
  - **CTAButton**: Encourages users to take action.

#### 2.2 Applied AI: Use Case Discovery and Prompt Optimization

- **Description**:  
  "Für Unternehmen, die AI-Anwendungen erkunden möchten, bieten wir Use Case Discovery und Prompt Optimization. Wir helfen Ihnen, wirkungsvolle Use Cases zu identifizieren und AI-Prompts zu optimieren, um unmittelbaren Mehrwert zu erzielen."

- **CTA**: *"Applied AI machen"*

- **Components**:
  - **ServiceDetail**
  - **CTAButton**

### 3. Advanced Solutions Page

#### 3.1 Overview

- **Title**: *"Advanced Solutions: Für Unternehmen, die mit AI führend sein möchten"*

- **Description**:  
  "Unsere Advanced Solutions sind für Unternehmen konzipiert, die mit AI führend sein möchten. Von Data Enrichment bis hin zu autonomen Agenten bieten wir Lösungen, die wertvolle Einblicke ermöglichen und komplexe Aufgaben effizient gestalten."

#### 3.2 Services

##### 3.2.1 Retrieval-Augmented Generation (RAG)

- **Description**:  
  "Unsere RAG-Systeme nutzen unstrukturierte Daten, um dynamische Einblicke und Echtzeit-Entscheidungen zu ermöglichen und Ihre Daten in verwertbare Intelligenz zu verwandeln."

- **Components**:
  - **ServiceDetail**
  - **CTAButton**

##### 3.2.2 Autonome AI Agents

- **Description**:  
  "Unsere AI-Agents agieren autonom in Workflows und bieten spezialisierte Lösungen für proaktives Task Management. Ideal für fortgeschrittene Unternehmen, die Effizienz und 24/7-Betrieb maximieren möchten."

- **Examples of Agent Applications**:
  - *Data Enrichment und Reporting Agents*: Verwandeln unstrukturierte Daten in verwertbare Einblicke.
  - *Automated Workflow Agents*: Ermöglichen durchgängige Automatisierung von Workflows.
  - *Decision-Making Agents*: Agieren in spezifischen Kontexten, um optimale Ergebnisse zu erzielen.

- **CTA**: *"Bereit für den nächsten Schritt mit AI? Kontaktieren Sie uns für individuelle Lösungen"*

- **Components**:
  - **ServiceDetail**
  - **ExamplesList**: Displays examples of agent applications.
  - **CTAButton**

### 4. Contact and Booking Page

#### 4.1 Contact Options

- **Calendly Integration**: Embed a booking widget for immediate appointment scheduling.

- **Stripe Integration**: Provide payment options for services requiring upfront payment.

- **Contact Form**: For additional inquiries, customized requests, or project ideas.

- **Components**:
  - **ContactForm**
  - **CalendlyWidget**
  - **PaymentButton**

---

## File Structure

The project aims for minimal files without compromising clarity.

```
xahead-website/
├── src/
│   ├── app/
│   │   ├── foundation/
│   │   │   └── page.tsx                  # Foundation Services page
│   │   │                                 # Contains cards with buttons that link to:
│   │   │                                 # - AI Literacy Workshop button → /info-pages/ai-literacy
│   │   │                                 # - Use Case Discovery button → /info-pages/use-cases
│   │   │                                 # - Prompt Optimization button → /info-pages/applied-ai
│   │   │                                 # Each button should lead to its respective informational page.
│   │
│   │   ├── advanced/
│   │   │   └── page.tsx                  # Advanced Solutions page
│   │   │                                 # Contains cards with buttons that link to:
│   │   │                                 # - RAG Systeme entdecken button → /info-pages/rag
│   │   │                                 # - AI Agents implementieren button → /info-pages/autonomous-agents
│   │   │                                 # Each button should lead to its respective informational page.
│   │
│   │   ├── contact/
│   │   │   ├── page.tsx                  # Main Contact page
│   │   │   ├── ContactForm.tsx
│   │   │   └── CalendlyEmbed.tsx
│   │
│   │   ├── info-pages/                   # Folder for informational subpages
│   │   │                                 # These pages are not shown in header navigation; accessed only through buttons on foundation/advanced pages
│   │   │
│   │   │   ├── ai-literacy.tsx           # AI Literacy info page
│   │   │   │                             # Includes a "Contact Us" button → redirects to /contact
│   │   │
│   │   │   ├── use-cases.tsx             # Use Cases info page
│   │   │   │                             # Includes a "Contact Us" button → redirects to /contact
│   │   │
│   │   │   ├── applied-ai.tsx            # Applied AI info page
│   │   │   │                             # Includes a "Contact Us" button → redirects to /contact
│   │   │
│   │   │   ├── rag.tsx                   # Retrieval-Augmented Generation (RAG) info page
│   │   │   │                             # Includes a "Contact Us" button → redirects to /contact
│   │   │
│   │   │   └── autonomous-agents.tsx     # Autonomous AI Agents info page
│   │   │                                 # Includes a "Contact Us" button → redirects to /contact
│   │
│   │   ├── about/
│   │   │   └── page.tsx                  # About Us page (visible in header navigation)
│   │
│   │   ├── impressum/
│   │   │   └── page.tsx                  # Impressum page (linked only in footer for legal purposes)
│   │
│   │   ├── layout.tsx
│   │   └── page.tsx                      # Home page
│   │
│   ├── components/
│   │   ├── Button.tsx                    # Button component, reusable across cards
│   │   ├── ContactLinks.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Footer.tsx                    # Footer with link to Impressum
│   │   ├── Header.tsx                    # Header with link to About Us only
│   │   └── ThemeToggle.tsx
│   │
│   └── styles/
│       └── globals.css
│
├── public/
│   └── images/
├── package.json
├── next.config.js
├── postcss.config.js
└── tailwind.config.js
```

---

## Documentation and Code Examples

### 0. **Libraries, Frameworks, and Tools**

#### 0.1 Frontend

- **Next.js**
  - **Purpose**: Framework for building server-rendered React applications with optimized loading times and SEO capabilities.
  - **Usage**: Page routing, server-side rendering, and static site generation.

- **React**
  - **Purpose**: JavaScript library for building user interfaces.
  - **Usage**: Building reusable UI components.

- **Tailwind CSS**
  - **Purpose**: Utility-first CSS framework.
  - **Usage**: Simplifies styling with consistent spacing, responsive layouts, and dark mode support.

- **Shadcn UI**
  - **Purpose**: Pre-built UI components compatible with Tailwind CSS.
  - **Usage**: Standard UI components like buttons, cards, forms, and grids.

- **Lucide Icons**
  - **Purpose**: Minimalistic icon library.
  - **Usage**: Icons for service cards, CTAs, and visual elements.

- **Framer Motion**
  - **Purpose**: Animation library for React.
  - **Usage**: Smooth hover effects, fade-ins, and animations on interactive elements.

- **React Hook Form**
  - **Purpose**: Form management library.
  - **Usage**: Handling form validation and submission on the contact page.

- **Headless UI**
  - **Purpose**: Unstyled component library for accessible UI elements.
  - **Usage**: Building elements like modals and popovers, styled with Tailwind CSS.

#### 0.2 Backend and Services

- **Firebase**
  - **Purpose**: Backend-as-a-Service (BaaS) for real-time database, authentication, and more.
  - **Usage**:
    - **Firestore**: Storing contact form submissions (e.g., in a `contactSubmissions` collection).
    - **Firebase Functions**: Handling backend processing if needed (e.g., sending confirmation emails).

- **Calendly Embed API**
  - **Purpose**: Embed booking functionality directly into the website.
  - **Usage**: Embedded calendar interface on the Contact page for easy scheduling.

- **Stripe**
  - **Purpose**: Payment processing.
  - **Usage**: Allows upfront booking payments.

### 1. Tailwind CSS Setup

#### Installation

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Configuration

- **`tailwind.config.js`**:

  ```javascript
  module.exports = {
    darkMode: 'class',
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          accent: '#00FFAA', // Example accent color
        },
      },
    },
    plugins: [],
  };
  ```

- **`styles/globals.css`**:

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    @apply bg-[#121212] text-white;
  }
  ```

### 2. Firebase Integration for Contact Form

#### Installation

```bash
npm install firebase
```

#### Firebase Configuration (`firebase.js`)

```javascript
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };
```

#### Usage in ContactForm Component

```javascript
// components/ContactForm.js

import { useForm } from 'react-hook-form';
import { db } from '../firebase';

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      await db.collection('contactSubmissions').add({
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      // Show success message or redirect
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // Display error message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields with validation */}
    </form>
  );
};

export default ContactForm;
```

**Example Response**:

When a user submits the form, their data is stored in Firestore under the `contactSubmissions` collection with a timestamp.

### 3. Calendly Integration

#### Installation

```bash
npm install react-calendly
```

#### Usage in CalendlyWidget Component

```javascript
// components/CalendlyWidget.js

import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => (
  <div className="calendly-widget">
    <InlineWidget url="https://calendly.com/your-calendly-link" />
  </div>
);

export default CalendlyWidget;
```

### 4. Stripe Payment Integration

#### Installation

```bash
npm install @stripe/stripe-js
npm install stripe
```

#### Setting up the PaymentButton Component

```javascript
// components/PaymentButton.js

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentButton = () => {
  const handlePayment = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', { method: 'POST' });
    const session = await response.json();

    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      console.error('Stripe error:', result.error.message);
      // Display error message to the user
    }
  };

  return (
    <button onClick={handlePayment} className="payment-button">
      Jetzt bezahlen
    </button>
  );
};

export default PaymentButton;
```

**Server-side Code for Creating Checkout Session**

- **`pages/api/create-checkout-session.js`**

```javascript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: 'your_price_id', // Replace with your price ID
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/cancel`,
  });

  res.status(200).json({ id: session.id });
};
```

**Example Response**:

User is redirected to the Stripe Checkout page to complete the payment securely.

---

## Developer Alignment Details

### Authentication and API Keys

- **Environment Variables**: Store sensitive keys in `.env.local` (not committed to version control).

  ```env
  FIREBASE_API_KEY=your_firebase_api_key
  FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
  FIREBASE_PROJECT_ID=your_firebase_project_id
  FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
  FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
  FIREBASE_APP_ID=your_firebase_app_id

  STRIPE_SECRET_KEY=your_stripe_secret_key
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
  ```

- **Access in Code**:

  ```javascript
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ```

### Error Handling and Validation

- **Form Validation**:

  - Use `react-hook-form` for handling form state and validation.
  - Provide real-time feedback on input fields.

- **API Error Handling**:

  - Gracefully handle errors from Firebase and Stripe APIs.
  - Log errors to the console and inform the user appropriately.

### Styling and Theming

- **Tailwind CSS**:

  - Utilize utility classes for rapid styling.
  - Ensure consistency in spacing, fonts, and colors.

- **Dark Mode**:

  - Set dark mode in `tailwind.config.js` and apply global styles in `globals.css`.

- **Responsive Design**:

  - Use responsive variants (`sm:`, `md:`, `lg:`, `xl:`) to adjust layouts on different screen sizes.

### Accessibility and SEO

- **Accessibility**:

  - Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`).
  - Include `aria` attributes where necessary.
  - Ensure color contrast meets WCAG guidelines.

- **SEO**:

  - Use Next.js Head component to set meta tags for titles and descriptions.
  - Optimize images with `alt` attributes.

### Performance Optimization

- **Code Splitting**:

  - Leverage Next.js dynamic imports for components like CalendlyWidget and PaymentButton if they are not critical to initial load.

- **Asset Optimization**:

  - Optimize images using Next.js Image component for automatic image optimization.

- **Lazy Loading**:

  - Implement lazy loading for images or components that are not immediately visible.

### Security Considerations

- **Firebase Security Rules**:

  - Set up Firestore rules to allow only authenticated reads/writes if applicable.

- **Stripe Webhooks**:

  - Secure webhook endpoints to verify events from Stripe.

- **Preventing XSS**:

  - Sanitize user inputs and outputs.

### Testing

- **Unit Tests**:

  - Use Jest and React Testing Library for unit testing components.

- **Integration Tests**:

  - Test API routes and services.

- **End-to-End Tests**:

  - Use Cypress for testing user flows.
