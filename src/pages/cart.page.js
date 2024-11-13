import * as allure from "allure-js-commons";
import { BasePage } from "./base.page";

export class CartPage extends BasePage {
    constructor (page) {
        super (page);
        this.productPrice = this.page.getByText('$152.99');
        this.plusQuantityButton = this.page.getByRole('button', { name: '+' });
        this.updateButton = this.page.getByText('UPDATE');
        
    }

    //Просмотреть общую стоимость товара 
    async goToProductPrice () {
        await allure.step ("Просмотреть общую стоимость товара", async () => {
        await this.productPrice.click();
    });
    }

    //Увеличить и обновить количество товара в корзине
    async goUpdateQuantity () {
        await allure.step ("Увеличить и обновить количество товара в корзине", async () => {
        await this.plusQuantityButton.dblclick();
        await this.updateButton.click();
    });
    }

}