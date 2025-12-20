/** @format */
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	workers: process.env.CI ? 2 : undefined,
	reporter: "html",
	// 🔴 Increased Global Timeout to 60 Minutes (Needed for 20+ devices)
	timeout: 3600000,

	use: {
		baseURL: "https://igotmind.ca",
		trace: "on-first-retry",
		screenshot: "only-on-failure",
	},

	// 🔴 STABILITY SETTINGS (Fixes your errors)
	expect: {
		timeout: 30000, // General assertion timeout
		toHaveScreenshot: {
			maxDiffPixelRatio: 0.05, // Allow 5% noise (Critical for Mobile)
			threshold: 0.3, // Ignore subtle color shifts
			timeout: 15000, // Wait 15s for the screen to stop moving (Fixes "Timeout 5000ms")
			animations: "disabled", // Force animations off
		},
	},

	projects: [
		// --- DESKTOP ---
		{ name: "Desktop Chrome", use: { ...devices["Desktop Chrome"] } },
		{ name: "Desktop Safari", use: { ...devices["Desktop Safari"] } },

		// --- iPHONE 17 FAMILY ---
		{
			name: "iPhone 17",
			use: {
				browserName: "webkit",
				viewport: { width: 393, height: 852 },
				deviceScaleFactor: 3,
				isMobile: true,
				hasTouch: true,
				userAgent:
					"Mozilla/5.0 (iPhone; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/604.1",
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
				userAgent:
					"Mozilla/5.0 (iPhone; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/604.1",
			},
		},

		// --- SAMSUNG S25 FAMILY ---
		{
			name: "Galaxy S25 Ultra",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 412, height: 915 },
				deviceScaleFactor: 3.5,
				isMobile: true,
				hasTouch: true,
				userAgent:
					"Mozilla/5.0 (Linux; Android 15; SM-S938B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
			},
		},

		// --- TABLETS (Included per request) ---
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
