/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test'

test.describe('test task', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        expect(page.getByText('Checkout')).toBeVisible()
    })

    // Tasks
    // Prepare tests for checking that:
    //
    test('zip code doesnt accept text', async ({page}) => {
        const zipInput = page.locator('input[name = "zip"]');
        await zipInput.type('ABCDE')
         let value = await zipInput.inputValue();
         expect(value).toBe('')
    })

    test ('go to task2', async ({page}) => {
        expect(page.getByText('Payment method')).toBeVisible();

        await page.fill('input[name = "firstName"]', 'Name');
        await page.fill('input[name = "lastName"]', 'Lastname');
        await page.fill('input[name = "address"]', '123 st');
        await page.fill('input[name = "city"]', 'name');
        await page.fill('input[name = "state"]', 'state');
        await page.type('input[name = "zip"]', '12345');
        await page.type('input[name = "country"]', 'country');

        await page.click('button:has-text("NEXT")');

        expect(page.getByText('Payment method')).toBeVisible();

        await page.click('button:has-text("NEXT")');
        const nameError = await page.getByText("This field is required").nth(0);
        const cardNameError = await page.getByText("This field is required").nth(1);
        const expiryError = await page.getByText("This field is required").nth(2);
        const cvvError = await page.getByText("This field is required").nth(3);

        await expect(nameError).toBeVisible();
        await expect(cardNameError).toBeVisible();
        await expect(expiryError).toBeVisible();
        await expect(cvvError).toBeVisible();

        

    })

    test('task3', async ({page}) => {
        expect(page.getByText('Payment method')).toBeVisible();

        await page.fill('input[name = "firstName"]', 'Name');
        await page.fill('input[name = "lastName"]', 'Lastname');
        await page.fill('input[name = "address"]', '123 st');
        await page.fill('input[name = "city"]', 'name');
        await page.fill('input[name = "state"]', 'state');
        await page.type('input[name = "zip"]', '12345');
        await page.type('input[name = "country"]', 'country');

        await page.click('button:has-text("NEXT")');

        expect(page.getByText('Payment method')).toBeVisible();

        await page.click('button:has-text("NEXT")');
        
        await page.fill('input[name = "cardName"]', 'Name');
        await page.fill('input[name = "cardNumber"]', '12121212112');
        await page.fill('input[name = "expDate"]', '2024-05');
        await page.fill('input[name = "cvv"]', '111');

        await page.click('button:has-text("NEXT")');

        expect(page.getByText('Order summary')).toBeVisible();

        const productPrice = await page.locator('li.MuiTypography-root p.MuiTypography-root').allTextContents();
        const prices = productPrice.map(price => parseFloat(price.replace('$', '').trim()));
        const totalSum = prices.reduce((acc, price ) => acc + price, 0);

        const totalText = await page.locator('p.MuiTypography-root:has-text("Total") + p.MuiTypography-root').textContent();

        // const total = parseFloat(totalText.replace('$', '').trim());
        
    })
    // 3) check order total counting

    test('when user submits empty address form, validation messages ae displayed', async ({
        page,
    }) => {})
})
