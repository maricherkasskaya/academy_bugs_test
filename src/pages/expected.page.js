import { expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import { BasePage } from "./base.page";

export class ExpectedPage extends BasePage {

    constructor (page) {
        super(page);
        this.overlayMainPage = this.page.locator('.academy-bug-overlay');
        this.popupPage = this.page.locator('#popmake-4406');
        this.overlayCardPage = this.page.locator('#sq-page');
        this.loader = this.page.locator('#post-1820 div').nth(2);
        
    }

    async getExpectedPagination() {
        await allure.step ("Проверяем отображение ошибки пагинации на Главной странице", async () => {
        await expect (this.overlayMainPage).toContainText('You found a crash bug, examine the page for');
        await expect (this.popupPage).toBeVisible();
        await expect (this.popupPage).toContainText('In this bug, the page becomes unresponsive when clicking on the numbers of results.');
        })
        };
    
    async getExpectedFilterByPrice() {
        await allure.step ("Проверяем отображение ошибки фильтра по цене", async () => {
        await expect (this.popupPage).toBeVisible();
        await expect (this.popupPage).toContainText('In this bug, the filter by price doesn\'t work in the product details or product list pages.');
        })
        };

    async getExpectedDescriptionCard() {
        await allure.step ("Проверяем отображение ошибки описания в карточке товара", async () => {
        await expect (this.popupPage).toBeVisible();
        await expect (this.popupPage).toContainText('In this bug, the short description and description of the product are not in English.');
        })
        };
        

        async getExpectedCurrency() {
            await allure.step ("Проверяем отображение ошибки при смене валюты в карточке товара", async () => {
            await expect (this.overlayCardPage).toContainText('You found a crash bug, examine the page for 5 seconds.');
            await expect (this.popupPage).toBeVisible();
            await expect (this.popupPage).toContainText('In this bug, the page freezes when changing the currency.');
            })
            };

        async getExpectedHotItemProduct() {
            await allure.step ("Проверяем видимость лоадера при переходе в карточку товара из блока горячее предложение", async () => {
            await expect (this.loader).toBeVisible();
            })
            };


        async getExpectedLoadHotItem() {
            await allure.step ("Проверяем отображение ошибки при переходе в карточку товара из блока горячее предложение", async () => {
            await expect (this.popupPage).toBeVisible();
            await expect (this.popupPage).toContainText('In this bug, the product in the Hot Item section keeps loading.');
            })
            };

        async getExpectedTotalSum() {
            await allure.step ("Проверяем отображение ошибки общей стоимости товара в корзине", async () => {
            await expect (this.popupPage).toBeVisible();
            await expect (this.popupPage).toContainText('In this bug, the grand total is $100 more than the sum of all products in the cart.');
            })
            };

        async getExpectedQuantityProduct() {
            await allure.step ("Проверяем отображение ошибки при увеличении количества товара больше 2", async () => {
            await expect (this.popupPage).toBeVisible();
            await expect (this.popupPage).toContainText('In this bug, the product quantity cannot be increased past 2.');
            })
            };

}
