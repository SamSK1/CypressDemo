/// <reference types="cypress" />


describe("Test Search", () => {
  beforeEach(()=>{
      cy.viewport(1280,900)
  })
  
  it("Load homepage for Duck Duck Go", () => {
    cy.visit("https://duckduckgo.com");
  
  });
  it('Tests for Search and Contents', () => {
      cy.get('#search_form_input_homepage')
      .type('cypress testing {enter}') 
      

      cy.get('.zcm')
      .find('#duckbar_static')
      .should('contain', 'All')
      .should('contain', 'Images')
      .should('contain', 'Videos')
      .should('contain', 'News')
      .should('contain', 'Maps')
      


      cy.get('#duckbar_static > :nth-child(2)').click()
      cy.url().should('eq', 'https://duckduckgo.com/?q=cypress+testing+&t=h_&iax=images&ia=images')
      cy.request('https://duckduckgo.com/?q=cypress+testing+&t=h_&iax=images&ia=images').should(
        (response)=>{
            expect(response.status).to.eq(200)
        }
    )
      cy.go('back')
      cy.get('#duckbar_static > :nth-child(3)').click()
      cy.url().should('eq', 'https://duckduckgo.com/?q=cypress+testing+&t=h_&iax=videos&ia=videos')
      cy.request('https://duckduckgo.com/?q=cypress+testing+&t=h_&iax=videos&ia=videos').should(
        (response)=>{
            expect(response.status).to.eq(200)
        }
    )
      cy.go('back')
      cy.get('#duckbar_static > :nth-child(4)').click()
      cy.url().should('eq', 'https://duckduckgo.com/?q=cypress+testing+&t=h_&iar=news&ia=news')
      cy.request('https://duckduckgo.com/?q=cypress+testing+&t=h_&iar=news&ia=news').should(
        (response)=>{
            expect(response.status).to.eq(200)
        }
    )
      cy.go('back')
      cy.get('#duckbar_static > :nth-child(5)').click()
      cy.url().should('eq', 'https://duckduckgo.com/?q=cypress+testing+&t=h_&ia=web&iaxm=maps')
      cy.request('https://duckduckgo.com/?q=cypress+testing+&t=h_&ia=web&iaxm=maps').should(
        (response)=>{
            expect(response.status).to.eq(200)
        }
    )
      

  });

});
