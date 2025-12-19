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
| :---------------------------- | :-------------------------------------------- | :--------------------------------- |
| `tests/public.spec.js`        | Validates public-facing marketing pages       | 12 URLs                            |
| `tests/authenticated.spec.js` | Validates login flow and restricted dashboard | 11 internal pages (single session) |

---

## 3. Configuration & Specifications

### Global Settings (`playwright.config.js`)

- **Base URL:** `https://igotmind.ca`
- **Execution Mode:** Fully parallel (`fullyParallel: true`)
- **Workers:** 2 (one worker per spec file)
- **Global Timeout:** 60 seconds (Default)
- **Visual Tolerance:** `maxDiffPixelRatio: 0.02` (2%) to allow minor font/rendering differences.

### Critical Overrides

- **Authenticated Timeout:** Explicitly set to **10 Minutes** (`600,000ms`) in `authenticated.spec.js` to accommodate server latency on the Dashboard.
- **Bot Evasion:** Login input uses a **100ms typing delay** to prevent Wordfence (403/503) blocking.

---

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

### B. Authenticated Journey (Dashboard)

- `/my-courses/` (Dashboard)
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

## 5. Execution Option A: Cloud Dashboard (Recommended)

**For Support Team & Managers:** No installation required.

1.  Navigate to the **GitHub Repository**.
2.  Click the **Actions** tab at the top.
3.  Select **QA Automation Suite** from the left sidebar.
4.  Click the **Run workflow** button (right side).
5.  Wait for completion (~25-30 mins on Free Tier).
6.  Download the **`playwright-report`** artifact to view the results.

> **Note on Credentials:** Cloud execution uses **GitHub Secrets**.
> Ensure `TEST_EMAIL` and `TEST_PASSWORD` are configured in **Settings > Secrets and variables > Actions**.

---

## 6. Execution Option B: Local Setup (Developer Mode)

**For Developers:** Follow these steps to run the suite on your own machine.

### Prerequisites

- **Node.js** (v14 or higher)
- **NPM** (included with Node.js)

### Step 1: Clone & Install

```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_FOLDER>

# Install Dependencies
npm install

# Install Browser Drivers
npx playwright install
```

````

### Step 2: Configure Local Credentials

Create a `.env` file in the project root:

```env
TEST_EMAIL=test@gmail.com
TEST_PASSWORD=your_secure_password

```

### Step 3: Run Tests

Execute the full suite across all browsers:

```bash
npm run test

```

### Optional Commands

- **Update Snapshots:** `npm run update-snapshots` (Overwrites baseline images)
- **View Report:** `npx playwright show-report`

---

```

```
````
