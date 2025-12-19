<!-- @format -->

# I Got Mind – Automated QA Suite

## 1. Project Overview

This repository contains the **Playwright Automation Suite** for
👉 **[https://igotmind.ca](https://igotmind.ca)**

It performs **full-site functional testing and visual regression** across **23 endpoints**, covering both **public pages** and the **authenticated student dashboard**.

---

## 2. Architecture

The suite uses a **parallelized test architecture** for speed and reliability.
Tests are split into two independent specifications to allow **concurrent execution**.

| File                          | Description                                   | Scope                              |
| ----------------------------- | --------------------------------------------- | ---------------------------------- |
| `tests/public.spec.js`        | Validates public-facing marketing pages       | 12 URLs                            |
| `tests/authenticated.spec.js` | Validates login flow and restricted dashboard | 11 internal pages (single session) |

---

## 3. Configuration & Specifications

### Global Settings (`playwright.config.js`)

- **Base URL:** `https://igotmind.ca`
- **Execution Mode:** Fully parallel (`fullyParallel: true`)
- **Workers:** 2 (one worker per spec file)
- **Global Timeout:** 60 seconds
- **Visual Tolerance:** `maxDiffPixelRatio: 0.02` (2%) to allow minor font/rendering differences

## 4. Test Scope

### A. Public Pages (12 Endpoints)

- `/` – Home
- `/about/` – About Us
- `/sports/` – Sports Programs
- `/business/` – Corporate Programs
- `/4-the-boys/` – Scholarship
- `/book-now/` – Contact Us
- `/forsportsandeducation/` – Non-Profit
- `/my-courses/` – Login Page
- `/my-courses/lost-password/` – Password Reset
- `/tlw/` – The Little Warriors
- `/membership/front-of-line-membership/` – Membership Flow
- `/purchase/` – Purchase Flow

---

### B. Authenticated Journey

#### Dashboard Pages Covered

- `/my-courses/`
- My Courses
- My Grades
- My Memberships
- Private Area
- Achievements
- Certificates
- My Notes
- Notifications
- Edit Account
- Redeem Voucher
- Order History

---

---

## 5. Installation & Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **NPM** (included with Node.js)

---

### Step 1: Clone Repository

```bash
git clone https://github.com/sowlab/playwright-visual-suite.git
cd <REPOSITORY_FOLDER>
```

---

### Step 2: Configure Environment Variables

Create a `.env` file in the project root with your test credentials

Then edit `.env` and add your credentials:

```env
TEST_EMAIL=your_test_email@example.com
TEST_PASSWORD=your_test_password
```

---

### Step 3: Run the Automated Setup & Tests (Windows)

Simply run the batch file (double click on run-tests):

```bash
run-tests.bat
```

This will automatically:

- Install all dependencies
- Install Playwright browsers
- Run all tests
- Open the HTML report

---
