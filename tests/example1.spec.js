describe('Katalon PlayWright' , () => {

jest.setTimeout(60000);

beforeAll(async () => {
    await jest.setTimeout(60000);
    await page.goto('https://whatismybrowser.com/')
  })
  
  test('should display correct browser', async () => {
    const browser = await page.$eval('.string-major', (el) => el.innerHTML)
    await expect(browser).toContain('Chrome')
  })

})