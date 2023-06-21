describe('Primeiro teste', () => {
    it('acessar o menu forms', async () => {
        await $('~Forms').click()
        expect(await $('~text-input')).toBeDisplayed()
    });
});