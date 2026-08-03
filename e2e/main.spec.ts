import { test, expect } from "@playwright/test";

test("home page renders title and hero", async ({ page }) => {
	await page.goto("/");

	await expect(page).toHaveTitle(/Qwik Boilerplate/);
	await expect(
		page.getByRole("heading", { name: /So fantastic/ }),
	).toBeVisible();
});

test("header navigation links are present", async ({ page }) => {
	await page.goto("/");

	for (const link of ["Docs", "Examples", "Tutorials"]) {
		await expect(
			page.getByRole("link", { name: link, exact: true }),
		).toBeVisible();
	}
});

test("counter increments and decrements within bounds", async ({ page }) => {
	await page.goto("/");

	const value = page.locator(".counter-wrapper .value");
	await expect(value).toHaveText("70");

	await page.getByRole("button", { name: "+" }).click();
	await expect(value).toHaveText("71");

	await page.getByRole("button", { name: "-" }).click();
	await expect(value).toHaveText("70");
});

test("todo list adds an item", async ({ page }) => {
	await page.goto("/demo/todolist");

	await expect(page.getByRole("heading", { name: /TODO List/ })).toBeVisible();

	await page.getByRole("textbox").fill("buy milk");
	await page.getByRole("button", { name: "Add item" }).click();

	await expect(page.locator(".list")).toContainText("buy milk");
});

test("flower app renders slider and squares", async ({ page }) => {
	await page.goto("/demo/flower");

	await expect(
		page.getByRole("heading", { name: /Generate Flowers/ }),
	).toBeVisible();

	const slider = page.locator('input[type="range"]');
	await expect(slider).toHaveValue("20");
});
