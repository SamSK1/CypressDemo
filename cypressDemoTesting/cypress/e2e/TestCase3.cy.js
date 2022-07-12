/// <reference types="cypress" />

describe("Autocomplete", () => {
  beforeEach(()=>{
      cy.viewport(1280,900)
  })
  it("Load homepage for Duck Duck Go", () => {
    cy.visit("https://duckduckgo.com");
  });

  it('Checking Autocomplete', () => {
      cy.get('#search_form_input_homepage').type('zuric')
      cy.intercept('GET', '**/ac/*').as('getAutocomplete')
      cy.get('#search_form_input_homepage').type('h')

      cy.wait('@getAutocomplete').then(response => {
          
          const body = response.response.body
          
          const expectedResults=JSON.parse(body).map(b => b.phrase)

          for(let i = 0; i < expectedResults.length; i++) {
              const result = expectedResults[i]
              cy.get(`[data-index="${i}"]`).should('contain',result)
          }
          
          
      });
  });
 
});