/** @format */
const { test, expect } = require("@playwright/test");

test.describe("I Got Mind - Public Site Audit", () => {
	test.beforeEach(async ({ page }) => {
		await page.addStyleTag({
			content: `
        #moove_gdpr_cookie_info_bar { display: none !important; } 
        iframe { opacity: 0 !important; } 
        .slick-track { visibility: hidden !important; }
        .clock-animation { visibility: hidden !important; }
        *, *::before, *::after {
          animation-duration: 0s !important;
          transition-duration: 0s !important;
        }
      `,
		});
	});

	const publicPages = [
		{ name: "01 Home Page", path: "/" },
		{ name: "02 About Us", path: "/about/" },
		{ name: "03 Sports Programs", path: "/sports/" },
		{ name: "04 Corporate Programs", path: "/business/" },
		{ name: "05 Scholarship", path: "/4-the-boys/" },
		{ name: "06 Contact Us", path: "/book-now/" },
		{ name: "07 Non-Profit", path: "/forsportsandeducation/" },
		{ name: "08 Login Page", path: "/my-courses/" },
		{ name: "09 Password Reset", path: "/my-courses/lost-password/" },
		{ name: "10 The Little Warriors (TLW)", path: "/tlw/" },
		{
			name: "11 Membership Flow",
			path: "/membership/front-of-line-membership/",
		},
		{ name: "12 Purchase Flow", path: "/purchase/" },
	];

	for (const pageInfo of publicPages) {
		test(`Public: ${pageInfo.name}`, async ({ page }) => {
			await page.goto(pageInfo.path);
			await page.waitForLoadState("domcontentloaded");
			await page.waitForTimeout(3000);

			// FIX: Force animations to 'disabled' to prevent Sports Page failure
			await expect(page).toHaveScreenshot({
				fullPage: true,
				animations: "disabled",
			});
		});
	}
});
