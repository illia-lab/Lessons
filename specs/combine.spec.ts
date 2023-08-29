import { MainPage } from '../framework/pages/main/page';
import { provider } from '../framework';
import { expect } from 'chai';
import { NavigationPage } from '../framework/navigation-header/navigation.page';
import { CombinesPage } from '../framework/pages/combines/page';

const { browser } = provider;
const { $ } = provider.elementInterface;
const { waitForCondition } = provider.waiters;

describe('Combine Table Test Suite', () => {
  beforeEach('Set up', async () => {
    await browser.get('http://localhost:4000/');
    await waitForCondition(async () => await $('body').isPresent());
    await browser.executeScript(() => localStorage.clear());
    await browser.get('http://localhost:4000/');
  });

  it('Combine test case "check that producerAndBrand info is correct"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };
    const producerAndBrand = {};

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { producerAndBrand: null } });

    console.log(result, '<');

    result.combinesRow.forEach((combineData) => expect(combineData.producerAndBrand).to.not.include(producerAndBrand));
  });

  it('Combine test case "check that producerAndBrand info is correct(Negative)"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };
    const producerAndBrand = {};

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { producerAndBrand: null } });

    console.log(result, '<');

    result.combinesRow.forEach((combineData) => expect(combineData.producerAndBrand).to.include(producerAndBrand));
  });

  it('Combine test case "check that combine prices below than 100000"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };
    const heightNum = 100000;

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combinePrice: null } });

    console.log(result, '<');
    result.combinesRow.forEach((combineData) => expect(+combineData.combinePrice).lessThan(99796));
  });
  it('Combine test case "check that combine prices below than 100000"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };
    const heightNum = 100000;

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combinePrice: null } });

    console.log(result, '<');
    result.combinesRow.forEach((combineData) => expect(+combineData.combinePrice).lessThan(99795));
  });

  it('Combine test case "check that combine prices above than 30000"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combinePrice: null } });

    console.log(result);
    result.combinesRow.forEach((combineData) => expect(+combineData.combinePrice).greaterThan(30000));
  });
  it('Combine test case "check that combine prices above than 30000"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combinePrice: null } });

    console.log(result);
    result.combinesRow.forEach((combineData) => expect(+combineData.combinePrice).greaterThan(40000));
  });

  it('Combine test case "check that one of the prices fit"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combinePrice: null } });

    console.log(result);

    const findResult = result.combinesRow.find((combineData) => +combineData.combinePrice === 99795);

    expect(findResult).not.equal(undefined);
  });
  it('Combine test case "check that one of the prices fit"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combinePrice: null } });

    console.log(result);

    const findResult = result.combinesRow.find((combineData) => +combineData.combinePrice === 99999);

    expect(findResult).not.equal(undefined);
  });

  it('Combine test case "check that combine height above than 3555"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineHeight: null } });

    console.log(result);
    result.combinesRow.forEach((combineData) => expect(+combineData.combineHeight).greaterThan(3555));
  });
  it('Combine test case "check that combine height above than 3555"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineHeight: null } });

    console.log(result);
    result.combinesRow.forEach((combineData) => expect(+combineData.combineHeight).greaterThan(3600));
  });

  it('Combine test case "check that combine height below than 9695"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineHeight: null } });

    console.log(result);

    result.combinesRow.forEach((combineData) => expect(+combineData.combineHeight).is.lessThan(9695));
  });
  it('Combine test case "check that combine height below than 9695"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineHeight: null } });

    console.log(result);

    result.combinesRow.forEach((combineData) => expect(+combineData.combineHeight).is.lessThan(6000));
  });

  it('Combine test case "check that one of the height fit"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineHeight: null } });

    console.log(result);

    const findResult = result.combinesRow.find((combineData) => +combineData.combineHeight === 4599);

    expect(findResult).not.equal(undefined);
  });
  it('Combine test case "check that one of the height fit"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineHeight: null } });

    console.log(result);

    const findResult = result.combinesRow.find((combineData) => +combineData.combineHeight === 499);

    expect(findResult).not.equal(undefined);
  });

  it('Combine test case "check that combine class below than 10"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineClass: null } });

    console.log(result);

    result.combinesRow.forEach((combineData) => expect(+combineData.combineClass).is.lessThan(10));
  });
  it('Combine test case "check that combine class below than 10"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineClass: null } });

    console.log(result);

    result.combinesRow.forEach((combineData) => expect(+combineData.combineClass).is.lessThan(9));
  });

  it('Combine test case "check that combine class above than 2"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineClass: null } });

    console.log(result);
    result.combinesRow.forEach((combineData) => expect(+combineData.combineClass).greaterThan(2));
  });
  it('Combine test case "check that combine class above than 2"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineClass: null } });

    console.log(result);
    result.combinesRow.forEach((combineData) => expect(+combineData.combineClass).greaterThan(3));
  });

  it('Combine test case "check that combine Mass below than 10000"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineMass: null } });

    console.log(result);

    result.combinesRow.forEach((combineData) => expect(+combineData.combineMass).is.lessThan(10000));
  });
  it('Combine test case "check that combine Mass below than 10000"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineMass: null } });

    console.log(result);

    result.combinesRow.forEach((combineData) => expect(+combineData.combineMass).is.lessThan(8000));
  });

  it('Combine test case "check that combine Mass above than 1000"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineMass: null } });

    console.log(result);
    result.combinesRow.forEach((combineData) => expect(+combineData.combineMass).greaterThan(1000));
  });
  it('Combine test case "check that combine Mass above than 1000"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineMass: null } });

    console.log(result);
    result.combinesRow.forEach((combineData) => expect(+combineData.combineMass).greaterThan(4000));
  });

  it('Combine test case "check that one of the Mass fit"', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineMass: null } });

    console.log(result);

    const findResult = result.combinesRow.find((combineData) => +combineData.combineMass === 3834);

    expect(findResult).not.equal(undefined);

  });
  it('Combine test case "check that one of the Mass fit"(Negative)', async () => {
    const navigationPage = new NavigationPage();
    const mainPage = new MainPage();
    const combinesPage = new CombinesPage();
    const logins = { username: 'admin', password: 'admin' };

    await mainPage.sendKeys({ logins });
    await mainPage.click({ logins: { login: null } });
    await navigationPage.click({ combineClick: { toCombine: null } });

    const result = await combinesPage.getData({ combinesRow: { combineMass: null } });

    console.log(result);

    const findResult = result.combinesRow.find((combineData) => +combineData.combineMass === 4000);

    expect(findResult).not.equal(undefined);

  });
  });

