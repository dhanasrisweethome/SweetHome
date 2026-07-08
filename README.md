# Dhanasri Sweet Home

**Traditional Andhra Putarekulu — E-Commerce Platform**

A production-grade full-stack e-commerce website built for Dhanasri Sweet Home, a family business specializing in traditional Andhra Putarekulu (paper sweets). This platform supports retail, bulk, wedding, and corporate orders, with a customer-facing storefront and an admin dashboard for managing products, orders, and inventory.

---

## Table of Contents

- [About the Business](#about-the-business)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Core Features](#core-features)
- [Planned Future Features](#planned-future-features)
- [Security Practices](#security-practices)
- [Contributing / Workflow](#contributing--workflow)

---

## About the Business

Dhanasri Sweet Home produces traditional Andhra Putarekulu, a delicate paper-thin sweet native to Andhra Pradesh, India. This platform is being built to take the business online — enabling retail purchases, bulk orders for events, and wedding/corporate catering orders, with a long-term goal of serving customers across India.

## Tech Stack

**Frontend**
- HTML5, CSS3, JavaScript (vanilla)
- Tailwind CSS for styling
- GSAP + AOS for animations and scroll effects
- Fully responsive, mobile-first design

**Backend**
- Node.js + Express.js
- MongoDB (via Mongoose)
- JWT-based authentication
- Cloudinary for image storage/delivery
- Razorpay for payments
- WhatsApp Business API integration for order notifications

## Project Structure

```
dhanasri-sweet-home/
│
├── frontend/
│   ├── public/          # Static HTML pages (home, products, cart, checkout, etc.)
│   ├── admin/           # Admin dashboard interface
│   ├── css/             # Stylesheets
│   ├── js/              # Client-side JS (components, utils, API wrappers)
│   └── assets/          # Images and icons
│
├── backend/
│   ├── server.js        # Entry point
│   ├── app.js           # Express app configuration
│   ├── config/          # DB, Cloudinary, Razorpay config
│   ├── models/          # Mongoose schemas
│   ├── controllers/     # Route logic
│   ├── routes/          # API route definitions
│   ├── middleware/      # Auth, error handling, validation
│   ├── services/        # WhatsApp, email, payment services
│   ├── utils/           # Helpers, logger, response formatting
│   └── uploads/         # Temporary file storage before Cloudinary upload
│
├── database/
│   └── seed/            # Sample/seed data scripts
│
├── docs/
│   ├── API.md           # API documentation
│   └── ARCHITECTURE.md  # System architecture notes
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

> Detailed setup instructions will be finalized once `package.json` and backend config files are generated. Placeholder for now:

1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env` and fill in real credentials
4. Run `npm run dev` to start the backend in development mode
5. Open `frontend/public/index.html` (or the configured dev server URL)

## Environment Variables

Sensitive configuration (database URI, JWT secret, Cloudinary keys, Razorpay keys, WhatsApp API tokens) is never committed to the repository. See `.env.example` for the required variable names — actual values must be obtained by the business owner from each respective service (MongoDB Atlas, Cloudinary, Razorpay, WhatsApp Business API).

## Available Scripts

> Will be documented here once `package.json` is created in the next step.

## Core Features

- Customer storefront: Home, About, Products, Product Details, Gallery, Testimonials, FAQ, Contact
- Ordering flows: Cart, Checkout, Wishlist, Order Tracking, Customer Profile
- Specialized order types: Bulk Orders, Wedding Orders, Corporate Orders
- Legal/policy pages: Privacy Policy, Refund Policy, Shipping Policy, Terms
- Admin: Secure login, Admin Dashboard for products/orders/inventory

## Planned Future Features

The architecture is designed to accommodate, without major rework:

- Android & iOS apps
- AI chatbot for customer support
- Inventory management & analytics/sales dashboard
- Coupons, referral system, affiliate system, loyalty points
- Courier tracking, email & SMS notifications
- Voice search, multi-language support

## Security Practices

- JWT-based authentication with proper token expiry and refresh handling
- Environment-based secrets management (never hardcoded)
- Input validation and sanitization on all API endpoints
- Rate limiting on sensitive routes (login, checkout, payment)
- HTTPS enforced in production
- Least-privilege access control between customer and admin roles

## Contributing / Workflow

This project is built incrementally, one file at a time, in dependency order, to maintain a clean and reviewable history. Each new file is introduced with its purpose, its dependencies, and how to test it before moving to the next.
