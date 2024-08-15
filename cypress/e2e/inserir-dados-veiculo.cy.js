import preencherPage from '../support/pages/preenchimento'

describe('Obter seguro veicular', () => {

    context('quando submeto os formulários', () => {

        it('deve preencher o formulário: Enter Vehicle Data', () => {
            cy.visit('https://sampleapp.tricentis.com/101/app.php')

            preencherPage.submitVehicle()
            preencherPage.shouldBeTitleVehicle()
        })

        it('deve preencher o formulário: Enter Insurant Data', ()=> {
            cy.visit('https://sampleapp.tricentis.com/101/app.php')

            preencherPage.submitVehicle()
            preencherPage.submitInsurant()
            preencherPage.shouldBeTitleProcuct()
        })

        it('deve preencher o formulário: Enter Product Data', ()=> {
            cy.visit('https://sampleapp.tricentis.com/101/app.php')

            preencherPage.submitVehicle()
            preencherPage.submitInsurant()
            preencherPage.submitProduct()
            preencherPage.shouldBeTitlePrice()
        })

        it('deve preencher o formulário: Select Price Option', ()=> {
            cy.visit('https://sampleapp.tricentis.com/101/app.php')

            preencherPage.submitVehicle()
            preencherPage.submitInsurant()
            preencherPage.submitProduct()
            preencherPage.submitPriceOption()
            preencherPage.shouldBeTitleQuote()
        })

        it('deve enviar o email com sucesso', ()=> {
            cy.visit('https://sampleapp.tricentis.com/101/app.php')

            preencherPage.submitVehicle()
            preencherPage.submitInsurant()
            preencherPage.submitProduct()
            preencherPage.submitPriceOption()
            preencherPage.submitSendQuote()
            preencherPage.shouldBeMessageSuccess()
        })

    })

})