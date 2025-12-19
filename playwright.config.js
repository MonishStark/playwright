/** @format */
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: 2,
	reporter: "html",
	timeout: 60000,
	use: {
		baseURL: "https://igotmind.ca",
		trace: "on-first-retry",
		screenshot: "only-on-failure",
	},
	expect: {
		timeout: 30000,
		toHaveScreenshot: {
			maxDiffPixelRatio: 0.02,
		},
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		// --- FIREFOX DISABLED TEMPORARILY FOR DEMO SPEED ---
		// {
		//   name: "firefox",
		//   use: { ...devices["Desktop Firefox"] },
		// },
		// ---------------------------------------------------
		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
	],
});
