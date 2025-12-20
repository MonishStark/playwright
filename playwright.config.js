/** @format */
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0, // Reduced retries to save time
	workers: process.env.CI ? 2 : undefined,
	reporter: "html",
	timeout: 3600000, // 🔴 60 Minutes Timeout (Needed for 20+ devices)
	use: {
		baseURL: "https://igotmind.ca",
		trace: "on-first-retry",
		screenshot: "only-on-failure",
	},
	projects: [
		// ============================================================
		// 1. DESKTOP BASELINE
		// ============================================================
		{ name: "Desktop Chrome", use: { ...devices["Desktop Chrome"] } },
		{ name: "Desktop Safari", use: { ...devices["Desktop Safari"] } },

		// ============================================================
		// 2. iPHONE 17 FAMILY (iOS 19 Simulation)
		// ============================================================
		{
			name: "iPhone 17",
			use: {
				browserName: "webkit",
				userAgent:
					"Mozilla/5.0 (iPhone; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/604.1",
				viewport: { width: 393, height: 852 },
				deviceScaleFactor: 3,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "iPhone 17 Air", // Rumored "Slim" model
			use: {
				browserName: "webkit",
				viewport: { width: 390, height: 844 }, // Slightly narrower
				deviceScaleFactor: 3,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "iPhone 17 Pro",
			use: {
				browserName: "webkit",
				viewport: { width: 393, height: 852 },
				deviceScaleFactor: 3,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "iPhone 17 Pro Max",
			use: {
				browserName: "webkit",
				viewport: { width: 430, height: 932 },
				deviceScaleFactor: 3,
				isMobile: true,
				hasTouch: true,
			},
		},

		// ============================================================
		// 3. SAMSUNG S25 FAMILY (Android 15 Simulation)
		// ============================================================
		{
			name: "Galaxy S25",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 360, height: 780 },
				deviceScaleFactor: 3,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "Galaxy S25 Plus",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 384, height: 824 },
				deviceScaleFactor: 3,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "Galaxy S25 Ultra",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 412, height: 915 },
				deviceScaleFactor: 3.5,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "Galaxy S25 Edge", // Conceptual Curved
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 385, height: 850 },
				deviceScaleFactor: 3,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "Galaxy S25 FE", // Fan Edition
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 412, height: 915 }, // Usually shares Ultra/Plus width
				deviceScaleFactor: 3,
				isMobile: true,
				hasTouch: true,
			},
		},

		// ============================================================
		// 4. APPLE iPADS (Tablets)
		// ============================================================
		{
			name: "iPad Pro 11-inch",
			use: {
				browserName: "webkit",
				viewport: { width: 834, height: 1194 },
				deviceScaleFactor: 2,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "iPad Pro 13-inch",
			use: {
				browserName: "webkit",
				viewport: { width: 1024, height: 1366 },
				deviceScaleFactor: 2,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "iPad Air (Standard)",
			use: {
				browserName: "webkit",
				viewport: { width: 820, height: 1180 },
				deviceScaleFactor: 2,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "iPad Air M3 2025 13-inch",
			use: {
				browserName: "webkit",
				viewport: { width: 1024, height: 1366 }, // Matches Pro 13 sizes
				deviceScaleFactor: 2,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "iPad (Base)",
			use: {
				browserName: "webkit",
				viewport: { width: 810, height: 1080 },
				deviceScaleFactor: 2,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "iPad mini",
			use: {
				browserName: "webkit",
				viewport: { width: 744, height: 1133 },
				deviceScaleFactor: 2,
				isMobile: true,
				hasTouch: true,
			},
		},

		// ============================================================
		// 5. SAMSUNG GALAXY TABS
		// ============================================================
		{
			name: "Galaxy Tab S11 Ultra", // Massive Tablet
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 1468, height: 2086 }, // Approx Large Viewport
				deviceScaleFactor: 2.5,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "Galaxy Tab S11", // Standard
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 800, height: 1280 },
				deviceScaleFactor: 2.5,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "Galaxy Tab S10 Ultra 5G",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 1200, height: 1920 }, // High Res
				deviceScaleFactor: 2.5,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "Galaxy Tab S10 FE 5G",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 601, height: 962 }, // Typical FE Viewport
				deviceScaleFactor: 2.5,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "Galaxy Tab S10 FE Plus 5G",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 800, height: 1280 },
				deviceScaleFactor: 2.5,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: "Galaxy Tab S9 FE",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 800, height: 1280 },
				deviceScaleFactor: 2.5,
				isMobile: true,
				hasTouch: true,
			},
		},
	],
});
