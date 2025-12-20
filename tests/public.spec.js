/** @format */

const { test, expect } = require("@playwright/test");

// 1. HELPER: Force all lazy images to load by scrolling
async function loadAllLazyImages(page) {
	await page.evaluate(async () => {
		const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
		// Scroll down in steps
		for (let i = 0; i < document.body.scrollHeight; i += 500) {
			window.scrollTo(0, i);
			await delay(50);
		}
		// Scroll back to top
		window.scrollTo(0, 0);
	});
	// Wait for layout to snap into place
	await page.waitForTimeout(2000);
}

const pagesToTest = [
	{ path: "/", name: "Home" },
	{ path: "/forsportsandeducation/", name: "Sports_Education" },
	{ path: "/business/", name: "Business" },
	// Add other pages here...
];

test.describe("Public Page Visual Regression", () => {
	for (const pageInfo of pagesToTest) {
		test(`Verify Layout: ${pageInfo.name}`, async ({ page }) => {
			// 1. Navigate
			await page.goto(pageInfo.path);
			await page.waitForLoadState("domcontentloaded");

			// 2. STABILIZE: Load all images to prevent height mismatch
			await loadAllLazyImages(page);

			// 3. SCREENSHOT with relaxed strictness
			await expect(page).toHaveScreenshot({
				fullPage: true,
				animations: "disabled",
				timeout: 20000, // Wait up to 20s for stability
			});
		});
	}
});
