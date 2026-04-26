# 🚀 Dynamic Multi-Category Product Catalog

## 📌 Overview

This project is a responsive web application that displays a **multi-category product catalog**.
It dynamically renders products from a JSON dataset and allows users to explore detailed information for each item.

---

## 🎯 Features

### 🏠 Home Page (Category Overview)

* Displays multiple categories:

  * Cars
  * Bikes
  * Phones
  * Computers
* Each category shows a preview of items
* Clean and well-structured layout for easy navigation

---

### 📄 Item Detail Page

* Click any item to view its detailed information
* Displays:

  * Item Name
  * Category
  * Image
  * All dynamic properties
* Dynamically renders attributes using:

```js
item.itemprops.map(...)
```

---

### 🔄 Navigation

* Seamless page navigation using **React Router**
* Back button added for better user experience

---

### 📱 Responsive Design

* Fully responsive layout
* Works on:

  * Mobile 📱
  * Tablet 💻
  * Desktop 🖥️
* Uses flexible grid system

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Routing:** React Router DOM
* **Styling:** CSS
* **Data Source:** JSON

---

## 📂 Project Structure

```
catalog-app/
│
├── public/
├── src/
│   ├── components/
│   │    ├── CategorySection.jsx
│   │    ├── ItemCard.jsx
│   │    ├── Navbar.jsx
│   │    └── Loader.jsx (optional)
│   │
│   ├── pages/
│   │    ├── Home.jsx
│   │    └── ItemDetails.jsx
│   │
│   ├── data/
│   │    └── data.json
│   │
│   ├── utils/
│   │    └── groupByCategory.js
│   │
│   ├── styles/
│   │    └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── index.html
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
```

### 2️⃣ Navigate to project folder

```bash
cd catalog-app
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the application

```bash
npm run dev
```

### 5️⃣ Open in browser

```
http://localhost:5173/
```

---

## 📌 Key Highlights

* Dynamic category grouping (no hardcoding)
* Fully dynamic item detail rendering
* Clean and reusable component-based architecture
* Responsive and user-friendly UI
* Efficient routing using React Router

---

## ✅ Assignment Requirements Covered

* ✔ Multi-category display
* ✔ Dynamic rendering using JSON
* ✔ Category-wise UI separation
* ✔ Item detail page with dynamic properties
* ✔ Responsive design
* ✔ Clean UI and navigation

---

## ⭐ Additional Enhancements

* Back button for navigation
* Hover effects on item cards
* Improved UI styling

---

## 👨‍💻 Author

**Your Name Here**

---

## 📎 Notes

This project was built as part of a frontend assignment to demonstrate:

* Dynamic UI rendering
* Component-based architecture
* Responsive design
* Clean and maintainable code practices
