/** @format */

const { test, expect } = require("@playwright/test");

// 1. HELPER: Force all lazy images to load
async function loadAllLazyImages(page) {
	await page.evaluate(async () => {
		const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
		// Scroll down
		for (let i = 0; i < document.body.scrollHeight; i += 500) {
			window.scrollTo(0, i);
			await delay(20); // Faster scroll to save time
		}
		// Scroll back up
		window.scrollTo(0, 0);
	});
	// Quick settle time
	await page.waitForTimeout(1000);
}

// List of pages to test
const pagesToTest = [
	{ path: "/", name: "Home" },
	{ path: "/forsportsandeducation/", name: "Sports_Education" },
	{ path: "/business/", name: "Business" },
];

test.describe("Public Page Visual Regression", () => {
	for (const pageInfo of pagesToTest) {
		test(`Verify Layout: ${pageInfo.name}`, async ({ page }) => {
			// 1. Navigate
			await page.goto(pageInfo.path);
			await page.waitForLoadState("domcontentloaded");

			// 2. STABILIZE: Load images
			await loadAllLazyImages(page);

			// 3. SCREENSHOT (60s Timeout)
			await expect(page).toHaveScreenshot({
				fullPage: true,
				animations: "disabled",
				timeout: 90000, // 🔴 Max wait time
			});
		});
	}
});
