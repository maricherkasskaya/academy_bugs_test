import * as allure from "allure-js-commons";
import { BasePage } from "./base.page";

export class MainPage extends BasePage {
    constructor (page) {
        super (page);
        this.paginationButton = this.page.getByRole('link', { name: '50' });
        this.addToCartButton = this.page.locator('#ec_add_to_cart_5');
        this.checkoutButton = this.page.getByRole('link', { name: 'CHECKOUT NOW' });
        this.overlayMainPage = this.page.locator('.academy-bug-overlay');
        this.popupPage = this.page.locator('#popmake-4406');
        
    }

    //Переход к пагинации
    async goToPagination () {
        await allure.step ("Переход к кнопке пагинации на главной странице", async () => {
        await this.paginationButton.click();
    });
    }

    //Добавление товара в корзину с главного экрана
    async goToAddProductToCart() {
        await allure.step ("Добавление товара в корзину с главного экрана", async () => {
        await this.addToCartButton.click();
    });
    }

    //Переход в корзину с главного экрана
    async goToCheckout () {
        await allure.step ("Переход в корзину с главного экрана", async () => {
        await this.checkoutButton.click();
        await this.page.waitForLoadState('networkidle');
    });
    }



}

