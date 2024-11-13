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
  await app.expectedPage.getExpectedPagination();
  
});

test('Bug with filter by price on product page', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.productPage.goToProductCard();
  await app.productPage.goToFilterByPrice();
  await app.expectedPage.getExpectedFilterByPrice();
  
});

test('Bug with discription on product page', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.productPage.goToProductCard();
  await app.productPage.goToDescriptionBlock();
  await app.expectedPage.getExpectedDescriptionCard();
  
});

test('Bug with changing the currency', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.productPage.goToProductCard();
  await app.productPage.goToChangeCurrency();
  await app.expectedPage.getExpectedCurrency();
  
});

test('Bug with hot Item section keeps loading', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.productPage.goToProductCard();
  await app.productPage.goToHotItemProduct();
  await app.expectedPage.getExpectedHotItemProduct();
  await app.productPage.goToHotItemLoad();
  await app.expectedPage.getExpectedLoadHotItem();
  
});

test('Bug with the grand total is $100 more', async ({ page }) => {
  await allure.tag ("Cart page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.mainPage.goToAddProductToCart();
  await app.mainPage.goToCheckout();
  await app.cartPage.goToProductPrice();
  await app.expectedPage.getExpectedTotalSum();
 
});

test('Bug with the product quantity cannot be increased past 2', async ({ page }) => {
  await allure.tag ("Cart page")
  app = new App(page);

  await app.mainPage.open (url);
  await app.mainPage.goToAddProductToCart();
  await app.mainPage.goToCheckout();
  await app.cartPage.goUpdateQuantity();
  await app.expectedPage.getExpectedQuantityProduct();
  
});

