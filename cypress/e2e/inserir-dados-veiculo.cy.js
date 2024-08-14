import preencherPage from '../support/pages/preenchimento'

describe('Obter seguro veicular', () => {

    context('quando submeto o formulário do veículo', () => {

        it('deve avançar para o formulário de Insurant Data', () => {
            cy.visit('https://sampleapp.tricentis.com/101/app.php')

            preencherPage.submitVehicle()
            preencherPage.shouldBeTitleVehicle()
        })

        it('deve avançar para o formulário de Product Data', ()=> {
            cy.visit('https://sampleapp.tricentis.com/101/app.php')

            preencherPage.submitVehicle()
            preencherPage.submitInsurant()
            preencherPage.shouldBeTitleProcuct()
        })

        it('deve avançar para o formulário de Price Option', ()=> {
            cy.visit('https://sampleapp.tricentis.com/101/app.php')

            preencherPage.submitVehicle()
            preencherPage.submitInsurant()
            preencherPage.submitProduct()
            preencherPage.shouldBeTitlePrice()
        })

        it('deve avançar para o formulário de Send Quote', ()=> {
            cy.visit('https://sampleapp.tricentis.com/101/app.php')

            preencherPage.submitVehicle()
            preencherPage.submitInsurant()
            preencherPage.submitProduct()
            preencherPage.submitPriceOption()
            preencherPage.shouldBeTitleQuote()
        })

        it('deve enviar cotação com sucesso', ()=> {
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