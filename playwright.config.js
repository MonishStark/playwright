/** @format */
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: 0, // No retries to save time
	workers: process.env.CI ? 2 : undefined,
	reporter: "html",
	timeout: 3600000, // 60 Minutes Global Timeout

	use: {
		baseURL: "https://igotmind.ca",
		trace: "on-first-retry",
		screenshot: "only-on-failure",
	},

	// 🔴 STABILITY SETTINGS
	expect: {
		timeout: 30000,
		toHaveScreenshot: {
			maxDiffPixelRatio: 0.05, // Allow 5% noise
			threshold: 0.3,
			timeout: 60000, // 🔴 60 Seconds (Fixes the Timeout Error)
			animations: "disabled",
		},
	},

	projects: [
		// 1. DESKTOP BASELINE
		{ name: "Desktop Chrome", use: { ...devices["Desktop Chrome"] } },
		{ name: "Desktop Safari", use: { ...devices["Desktop Safari"] } },

		// 2. iPHONE 17 FAMILY (Optimized Scale: 1)
		{
			name: "iPhone 17",
			use: {
				browserName: "webkit",
				viewport: { width: 393, height: 852 },
				deviceScaleFactor: 1,
				isMobile: true,
				hasTouch: true, // Scale 1 prevents crash
				userAgent:
					"Mozilla/5.0 (iPhone; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/604.1",
			},
		},
		{
			name: "iPhone 17 Pro",
			use: {
				browserName: "webkit",
				viewport: { width: 393, height: 852 },
				deviceScaleFactor: 1,
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
				deviceScaleFactor: 1,
				isMobile: true,
				hasTouch: true,
				userAgent:
					"Mozilla/5.0 (iPhone; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/604.1",
			},
		},

		// 3. SAMSUNG S25 FAMILY (Optimized Scale: 1)
		{
			name: "Galaxy S25",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 360, height: 780 },
				deviceScaleFactor: 1,
				isMobile: true,
				hasTouch: true,
				userAgent:
					"Mozilla/5.0 (Linux; Android 15; SM-S931B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
			},
		},
		{
			name: "Galaxy S25 Ultra",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 412, height: 915 },
				deviceScaleFactor: 1,
				isMobile: true,
				hasTouch: true,
				userAgent:
					"Mozilla/5.0 (Linux; Android 15; SM-S938B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
			},
		},
		{
			name: "Galaxy S25 FE",
			use: {
				browserName: "chromium",
				channel: "chrome",
				viewport: { width: 412, height: 915 },
				deviceScaleFactor: 1,
				isMobile: true,
				hasTouch: true,
			},
		},

		// 4. TABLETS (Optimized Scale: 1)
		{
			name: "iPad Pro 11-inch",
			use: {
				browserName: "webkit",
				viewport: { width: 834, height: 1194 },
				deviceScaleFactor: 1,
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
				deviceScaleFactor: 1,
				isMobile: true,
				hasTouch: true,
			},
		},
	],
});
