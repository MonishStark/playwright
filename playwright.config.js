/** @format */
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: 0,
	workers: process.env.CI ? 2 : undefined,
	reporter: [["html"], ["json", { outputFile: "results.json" }]],
	timeout: 3600000,

	use: {
		baseURL: "https://igotmind.ca",
		trace: "on-first-retry",
		screenshot: "only-on-failure",
	},

	expect: {
		timeout: 30000,
		toHaveScreenshot: {
			maxDiffPixelRatio: 0.05,
			threshold: 0.3,
			timeout: 60000,
			animations: "disabled",
		},
	},

	projects: [
		// 1. DESKTOP BASELINE (Keep WebKit here, it is stable on Desktop)
		{ name: "Desktop Chrome", use: { ...devices["Desktop Chrome"] } },
		{ name: "Desktop Safari", use: { ...devices["Desktop Safari"] } },

		// 2. iPHONE 17 FAMILY (🔴 CHANGED TO CHROMIUM TO PREVENT CRASH)
		{
			name: "iPhone 17",
			use: {
				browserName: "chromium", // <--- THE FIX
				channel: "chrome",
				viewport: { width: 393, height: 852 },
				deviceScaleFactor: 1,
				isMobile: true,
				hasTouch: true,
				userAgent:
					"Mozilla/5.0 (iPhone; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/604.1",
			},
		},
		{
			name: "iPhone 17 Pro",
			use: {
				browserName: "chromium", // <--- THE FIX
				channel: "chrome",
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
				browserName: "chromium", // <--- THE FIX
				channel: "chrome",
				viewport: { width: 430, height: 932 },
				deviceScaleFactor: 1,
				isMobile: true,
				hasTouch: true,
				userAgent:
					"Mozilla/5.0 (iPhone; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/604.1",
			},
		},

		// 3. SAMSUNG S25 FAMILY
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

		// 4. TABLETS (🔴 CHANGED TO CHROMIUM)
		{
			name: "iPad Pro 11-inch",
			use: {
				browserName: "chromium", // <--- THE FIX
				channel: "chrome",
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
