import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import {App} from '../src/pages/app.page'

const url = ('.');
let app;

test('Bug with pagination on main page', async ({ page }) => {
  await allure.tag ("Main page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.mainPage.goToPagination();
  await allure.step ("Проверяем отображение ошибки пагинации на Главной странице", async () => {
    await expect (app.mainPage.overlayMainPage).toContainText('You found a crash bug, examine the page for');
    await expect (app.mainPage.popupPage).toBeVisible();
    await expect (app.mainPage.popupPage).toContainText('In this bug, the page becomes unresponsive when clicking on the numbers of results.');
    })
  
});

test('Bug with filter by price on product page', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.productPage.goToProductCard();
  await app.productPage.goToFilterByPrice();
  await allure.step ("Проверяем отображение ошибки фильтра по цене", async () => {
    await expect (app.mainPage.popupPage).toBeVisible();
    await expect (app.mainPage.popupPage).toContainText('In this bug, the filter by price doesn\'t work in the product details or product list pages.');
    })

  
});

test('Bug with discription on product page', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.productPage.goToProductCard();
  await app.productPage.goToDescriptionBlock();
  await app.productPage.chooseCorrectResult();
  await app.cartPage.goToIssueReport();
  await allure.step ("Проверяем отображение ошибки описания в карточке товара", async () => {
    await expect (app.mainPage.popupPage).toBeVisible();
    await expect (app.mainPage.popupPage).toContainText('In this bug, the short description and description of the product are not in English.');
    })
  
});

test('Bug with changing the currency', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.productPage.goToProductCard();
  await app.productPage.goToChangeCurrency();
  await allure.step ("Проверяем отображение ошибки при смене валюты в карточке товара", async () => {
    await expect (app.productPage.overlayCardPage).toContainText('You found a crash bug, examine the page for 5 seconds.');
    await expect (app.mainPage.popupPage).toBeVisible();
    await expect (app.mainPage.popupPage).toContainText('In this bug, the page freezes when changing the currency.');
    })
  
});

test('Bug with hot Item section keeps loading', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.productPage.goToProductCard();
  await app.productPage.goToHotItemProduct();
  await allure.step ("Проверяем видимость лоадера при переходе в карточку товара из блока горячее предложение", async () => {
    await expect (app.productPage.loader).toBeVisible();
    })
  await app.productPage.goToHotItemLoad();
  await allure.step ("Проверяем отображение ошибки при переходе в карточку товара из блока горячее предложение", async () => {
    await expect (app.mainPage.popupPage).toBeVisible();
    await expect (app.mainPage.popupPage).toContainText('In this bug, the product in the Hot Item section keeps loading.');
    })
  
});

test('Bug with the grand total is $100 more', async ({ page }) => {
  await allure.tag ("Cart page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.mainPage.goToAddProductToCart();
  await app.mainPage.goToCheckout();
  await app.cartPage.goToProductPrice();
  await app.cartPage.chooseCorrectResult();
  await app.cartPage.goToIssueReport();
  await allure.step ("Проверяем отображение ошибки общей стоимости товара в корзине", async () => {
    await expect (app.mainPage.popupPage).toBeVisible();
    await expect (app.mainPage.popupPage).toContainText('In this bug, the grand total is $100 more than the sum of all products in the cart.');
    })
 
});

test('Bug with the product quantity cannot be increased past 2', async ({ page }) => {
  await allure.tag ("Cart page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.mainPage.goToAddProductToCart();
  await app.mainPage.goToCheckout();
  await app.cartPage.goUpdateQuantity();
  await allure.step ("Проверяем отображение ошибки при увеличении количества товара больше 2", async () => {
    await expect (app.mainPage.popupPage).toBeVisible();
    await expect (app.mainPage.popupPage).toContainText('In this bug, the product quantity cannot be increased past 2.');
    })
  
});

