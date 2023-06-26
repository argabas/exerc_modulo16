describe('Primeiro teste', () => {
    it('acessar o menu forms', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Alexandre')
        await $('android.widget.EditText').click()
        await $('android=new UiSelector().text("webdriver.io is awesome")').click()
        await $('~button-Active').click()

       expect (await $('android.widget.LinearLayout').toBeDisplayed())
        
    });
});