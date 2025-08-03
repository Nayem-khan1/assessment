# 🛍️ E-commerce Product Showcase (Task 1)

## 🚀 Setup Guide

```bash
git clone https://github.com/your-username/ecommerce-task.git
cd ecommerce-task
npm install
npm run dev
```
## 📂 Project Overview
Built with Next.js 15 (App Router)

Products fetched from FakeStore API

Fully responsive with Tailwind CSS

### Pages:

- Home page

- Product details page

- Cart page

- Checkout page

- Order summary

## 🔧 Folder Structure
```bash
/app
  /product/[productId]     → Product details
  /cart                    → Shopping cart
  /checkout                → Checkout flow
/components               → Reusable UI components
/store                    → Redux store
/public                   → Static files (images, SEO files)
```
## ✨ Features
- Product list from FakeStore API

- SEO optimized with meta tags

- Shopping cart with Redux

- Order summary and confirmation page

- Dark/light mode

- Responsive design

## 🔍 SEO Techniques Used
- Dynamic `<title>` and `<meta>` with next/head

- `robots.txt` and `sitemap.xml` included in `/public`

- Semantic HTML (`<main>`, `<section>`, `<article>`, etc.)

- Image optimization using `next/image`

- Clean URLs with App Router
