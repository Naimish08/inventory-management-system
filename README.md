# Inventory Management System  

Team Name: SnackOverflow  
Problem Statement: StockMaster  
Reviewer Name: Aman Patel  

Demo Video Link: https://drive.google.com/drive/folders/1BEsrX8lcMJQ0Drq5W99Dy70buojQKH69?usp=sharing  

A modern, full-stack inventory management system built with Next.js, Express, and Neon PostgreSQL. Manage warehouses, track stock levels, process receipts and deliveries, and monitor inventory movements in real-time.

---

## 🚀 Features

### 📊 Dashboard
- Real-time KPI metrics (total stock, low stock items, pending operations)
- Warehouse capacity monitoring
- Fast-moving SKU tracking
- Recent activity feed
- Alerts and exceptions management

### 📦 Inventory Operations
- *Receipts*: Process incoming inventory with validation
- *Deliveries*: Manage outbound shipments
- *Transfers*: Move stock between warehouses
- *Stock Adjustments*: Handle inventory corrections

### 🏢 Warehouse Management
- Multiple warehouse support
- Location-based stock tracking
- Capacity monitoring
- Low stock alerts

### 👥 User Management
- Secure authentication with JWT
- Role-based access control
- Password reset functionality

---

## 🛠 Tech Stack

### **Frontend**
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **HTTP Client**: Fetch API

### **Backend**
- **Runtime**: Node.js
- **Framework**: Express.js (TypeScript)
- **Database**: Neon PostgreSQL (Serverless)
- **Authentication**: JWT + bcrypt
- **Email Service**: Nodemailer

---

## ⚙ Getting Started

### **Prerequisites**
- Node.js 18+
- pnpm (or npm/yarn)
- Neon PostgreSQL database

### **Installation**

#### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd inventory-management-system
