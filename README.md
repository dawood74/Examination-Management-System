<div align="center">

# 🎓 Exam Management System

<p>
  <strong>A comprehensive, end-to-end web application for creating and managing academic exams, built with Angular and ASP.NET Core.</strong>
</p>

![Angular](https://img.shields.io/badge/Angular-v20-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![.NET Core](https://img.shields.io/badge/.NET-Core_8-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

</div>

---

## 📝 Overview

The Exam Management System is a robust, full-stack solution designed to streamline the process of creating, distributing, and managing exams. It features a modern, responsive frontend built with **Angular** and a powerful, secure backend powered by **ASP.NET Core Web API**. The system implements role-based access control, ensuring that administrators have full control over exam content while students have a simple interface to view their assigned exams.

This project serves as a practical demonstration of building modern web applications with a decoupled architecture, RESTful principles, and secure authentication.

---



## 🚀 Key Features

### 🔐 Authentication & Authorization
-   **User Registration & Login:** Secure endpoint for user account creation and sign-in.
-   **JWT-Based Authentication:** Stateless and secure authentication using JSON Web Tokens.
-   **Role-Based Access Control:** Distinct privileges for **Admin** and **Student** roles.
-   **Protected Routes:** Angular Route Guards (`AuthGuard`, `RoleGuard`) prevent unauthorized access to pages.

### 👨‍🏫 Admin Portal
-   **CRUD Operations:** Full capabilities to **C**reate, **R**ead, **U**pdate, and **D**elete exams.
-   **Dynamic Question Builder:** Easily add questions with multiple-choice options to any exam.
-   **Admin Dashboard:** A central hub to view exam statistics, see the total number of questions, and perform quick actions.

### 👩‍🎓 Student Portal
-   **View Available Exams:** A clean, user-friendly list of all exams available to the student.
-   **Student Dashboard:** Shows upcoming or pending examinations.
-   **[Optional Extension] Take Exams:** Functionality for students to take an exam within a timed environment.
-   **[Optional Extension] View Results:** Check scores and review answers after submission.

---

## 🛠️ Technology Stack

The application is built using a modern, industry-standard technology stack.

| Area      | Technology                                                                                                  | Description                                         |
| :-------- | :---------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| **Frontend** | **Angular 20** | A powerful framework for building dynamic SPAs.         |
|           | **Reactive Forms** | For building scalable and testable forms.           |
|           | **Bootstrap** | For responsive design and pre-built components.     |
|           | **JWT Decode** | For decoding JWT tokens on the client-side.         |
| **Backend** | **ASP.NET Core 8 Web API** | A cross-platform framework for building RESTful APIs. |
|           | **Entity Framework Core 8** | ORM for database interaction.                       |
|           | **AutoMapper** | For simplified object-to-object mapping (DTOs).     |
| **Database** | **SQL Server** | A robust relational database management system.     |
| **Auth** | **JWT Bearer Authentication** | Standard for securing API endpoints.                |

---




## 📜 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

<div align="center">
  <p>Developed with ❤️ by Omar Dawood</p>
</div>
