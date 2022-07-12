/// <reference types="cypress" />



describe("Newsteller form", () => {
  beforeEach(()=>{
      cy.viewport(1280,900)
  })
  it("Load about page for Duck Duck Go", () => {
    cy.visit("https://duckduckgo.com/about");
  });
  it('Checking Newsteller form ', () => {
      cy.scrollTo(0,3200)

      cy.get('.abt--newsletter')
      .should('contain','Privacy tips and news, straight to your inbox.')
      .should('contain','Stay protected and informed with our privacy newsletters.')

      cy.get('.abt__subtitle > a')
      .invoke('attr', 'href')
      .should('eq', '/newsletter')

      cy.get('.abt__input').type('randomemail1234124@dsf.com')
     
      cy.get('#news')
      .invoke('attr', 'checked')
      .should('exist')

      cy.get('#tips')
      .invoke('attr', 'checked')
      .should('exist')
  
      
      cy.get(':nth-child(1) > .course__options__label > a')
      .invoke('attr', 'href')
      .should('eq', 'https://duckduckgo.com/assets/email/DuckDuckGo-Privacy-Weekly_sample.png')

      cy.get(':nth-child(2) > .course__options__label > a')
      .invoke('attr', 'href')
      .should('eq', 'https://spreadprivacy.com/delete-google-search-history/')
  
      cy.get('.js-form-newsletter > .abt__btn').click()
  });
  it('Checking Router', () => {
      cy.url().should('eq','https://duckduckgo.com/newsletter/subscription/subscribe')
      cy.request('https://duckduckgo.com/newsletter/subscription/subscribe').should(
          (response)=>{
              expect(response.status).to.eq(200)
          }
      )
  });
});