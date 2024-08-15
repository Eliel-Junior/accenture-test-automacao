
class PreencherPage {

    // Preenchimento do formulário 'Enter Vehicle Data'
    submitVehicle() {
        cy.get('#nav_automobile').click()

        cy.get('#make').select('Volkswagen')
        cy.get('#engineperformance').type('1.6')
        cy.get('#dateofmanufacture').type('08/15/2024')
        cy.get('#numberofseats').select('5')
        cy.get('#fuel').select('Gas')
        cy.get('#listprice').type('50000')
        cy.get('#annualmileage').type('40000')

        cy.contains('button', 'Next')
            .click()
    }

    // Valida o título da página seguinte, a qual é direcionada após o preencimento.
    shouldBeTitleVehicle() {
        cy.contains('#idealsteps-nav li[class="idealsteps-step-active"] #enterinsurantdata', 'Enter Insurant Data')
            .should('be.visible')
            .should('have.text', 'Enter Insurant Data7')
    }

    // Preenchimento do formulário 'Enter Insurant Data'
    submitInsurant() {
        cy.get('#firstname').type('Eliel')
        cy.get('#lastname').type('Junior')
        cy.get('#birthdate').type('03/29/1997')
        cy.get('#country').select('Brazil')
        cy.get('#zipcode').type('55330000')
        cy.get('#occupation').select('Employee')

        cy.get('input[type="checkbox"]').eq(4).check({ force: true })
            .should('be.checked')

        cy.get('#nextenterproductdata')
            .click()
    }

    // Valida o título da página seguinte, a qual é direcionada após o preencimento.
    shouldBeTitleProcuct() {
        cy.contains('#idealsteps-nav li[class="idealsteps-step-active"] #enterproductdata', 'Enter Product Data')
            .should('be.visible')
            .should('have.text', 'Enter Product Data6')
    }

    // Preenchimento do formulário 'Enter Product Data'
    submitProduct() {
        cy.get('#startdate').type('09/29/2024')
        cy.get('#insurancesum').select('3.000.000,00')
        cy.get('#meritrating').select('Bonus 1')
        cy.get('#damageinsurance').select('Full Coverage')

        cy.get('input[type="checkbox"]').eq(5).check({ force: true })
            .should('be.checked')

        cy.get('#courtesycar').select('Yes')

        cy.get('#nextselectpriceoption')
            .click()
    }

    // Valida o título da página seguinte, a qual é direcionada após o preencimento.
    shouldBeTitlePrice() {
        cy.contains('#idealsteps-nav li[class="idealsteps-step-active"] #selectpriceoption', 'Select Price Option')
            .should('be.visible')
            .should('have.text', 'Select Price Option1')
    }

    // Preenchimento do formulário 'Select Price Option'
    submitPriceOption() {
        cy.get('input[type="radio"]').eq(2).check({ force: true })
            .should('be.checked')

        cy.get('#nextsendquote')
            .click()
    }

    // Valida o título da página seguinte, a qual é direcionada após o preencimento.
    shouldBeTitleQuote() {
        cy.contains('#idealsteps-nav li[class="idealsteps-step-active"] #sendquote', 'Send Quote')
            .should('be.visible')
            .should('have.text', 'Send Quote4')
    }

    // Preenchimento do formulário 'Send Quote'
    submitSendQuote() {
        cy.get('#email').type('eliel.santos@upe.br')
        cy.get('#username').type('Eliel')
        cy.get('#password').type('Pwd123')
        cy.get('#confirmpassword').type('Pwd123')

        cy.get('#sendemail')
            .click()
    }

    // Valida o título da página seguinte, a qual é direcionada após o preencimento.
    shouldBeMessageSuccess() {
        cy.get('h2', { timeout: 10000 })
            .should('be.visible')
            .should('have.text', 'Sending e-mail success!')
    }
}

export default new PreencherPage()