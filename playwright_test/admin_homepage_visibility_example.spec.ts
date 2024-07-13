import { test, expect } from "@playwright/test";

test.describe("Check visibility of default functionalities for an admin user.", () => {
  test("admin_homepage_visibility", async ({ page }) => {
    await expect(page.locator("[menu-list]")).toBeVisible;
    await expect(page.locator("[menu-list]")).toHaveScreenshot("listmenu.png");
    await expect(
      page.getByRole("button", { name: "New Board" })
    ).toHaveScreenshot("newboard.png");
    await page.getByRole("button", { name: "New Board" }).click();
    await expect(page.getByRole("heading")).toContainText("Create a New Board");
    await page.getByRole("menuitem", { name: "HomePage" }).click();
    await expect(
      page.getByRole("cell", { name: "Home Page Banner" })
    ).toBeVisible();
  });
});
