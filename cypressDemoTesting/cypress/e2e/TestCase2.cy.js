/// <reference types="cypress" />





describe("FAQ Accordion", () => {
  beforeEach(()=>{
      // cy.viewport(1280,900)
  })
  it("Load homepage for Duck Duck Go", () => {
    cy.visit("https://duckduckgo.com");
  });

  it('FAQ Accordion Functionality', () => {
      cy.scrollTo(0,1700)
   

      cy.get('.faq__content > :nth-child(1)')
    //  .should('#faq-answer-0 > .faq__answer > p')
      cy.get('#faq-btn-0')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true')
      
      cy.get('#faq-answer-0 > .faq__answer > a')
      .invoke('attr', 'href')
      .should('eq', 'https://spreadprivacy.com/duckduckgo-revenue-model/')



      
      cy.get(':nth-child(2) > .js-faq-header').click()
      cy.get('.faq__content > :nth-child(2)')
      .should('contain', 'What does Google know about me?')
      
      .should('have.a.property','text')
      cy.get('#faq-btn-1')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true')
      
      cy.get('#faq-answer-1 > .faq__answer > a')
      .invoke('attr', 'href')
      .should('eq', 'https://spreadprivacy.com/what-does-google-know-about-me/')




      cy.get(':nth-child(3) > .js-faq-header').click()
      cy.get('.faq__content > :nth-child(3)')
      .should('contain', 'Why use DuckDuckGo instead of Google?')
      .should('have.a.property','text')
      
      cy.get('#faq-btn-2')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true')
      
      cy.get('#faq-answer-2 > .faq__answer > p > a')
      .invoke('attr', 'href')
      .should('eq', 'https://duckduckgo.com/app')

      cy.get('#faq-answer-2 > .faq__answer > [property="url"]')
      .invoke('attr', 'href')
      .should('eq', 'https://spreadprivacy.com/why-use-duckduckgo-instead-of-google/')




      cy.get(':nth-child(4) > .js-faq-header').click()
      cy.get('.faq__content > :nth-child(4)')
      .should('contain', 'How do DuckDuckGo search results compare to Google’s?')
      .should('have.a.property','text')
      
      cy.get('#faq-btn-3')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true')
      
      cy.get('#faq-answer-3 > .faq__answer > p > a')
      .invoke('attr', 'href')
      .should('eq', 'https://duckduckgo.com/bang')
      
      cy.get('#faq-answer-3 > .faq__answer > [property="url"]')
      .invoke('attr', 'href')
      .should('eq', 'https://spreadprivacy.com/is-duckduckgo-a-good-search-engine/')


      

      cy.get('.faq__content > :nth-child(5)').click()
      cy.get('.faq__content > :nth-child(5)')
      .should('contain', 'Is DuckDuckGo an “unfiltered” search engine?')
      .should('have.a.property','text')
      
      cy.get('#faq-btn-4')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true')
      
      cy.get('#faq-answer-4 > .faq__answer > p > a')
      .invoke('attr', 'href')
      .should('eq', 'https://spreadprivacy.com/google-filter-bubble-study/')
      
   
      
      cy.get(':nth-child(6) > .js-faq-header').click()
      cy.get('.faq__content > :nth-child(6)')
      .should('contain', 'Is DuckDuckGo owned by Google?')
      .should('have.a.property','text')
      
      cy.get('#faq-btn-5')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true')


      cy.get(':nth-child(7) > .js-faq-header').click()
      cy.get('.faq__content > :nth-child(7)')
      .should('contain', 'What’s the difference between using DuckDuckGo and Incognito mode?')
      .should('have.a.property','text')
      
      cy.get('#faq-btn-6')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true')
      
      cy.get('#faq-answer-6 > .faq__answer > a')
      .invoke('attr', 'href')
      .should('eq', 'https://spreadprivacy.com/how-anonymous-is-duckduckgo/')


      cy.get(':nth-child(8) > .js-faq-header').click()
      cy.get('.faq__content > :nth-child(8)')
      .should('contain', 'How popular is DuckDuckGo?')
      .should('have.a.property','text')
      
      cy.get('#faq-btn-7')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true')
      
      cy.get('#faq-answer-7 > .faq__answer > a')
      .invoke('attr', 'href')
      .should('eq', 'https://spreadprivacy.com/how-many-people-use-duckduckgo/')


      cy.get(':nth-child(9) > .js-faq-header').click()
      cy.get('.faq__content > :nth-child(9)')
      .should('contain', 'How does the DuckDuckGo app & extension work?')
      .should('have.a.property','text')
      
      cy.get('#faq-btn-8')
      .invoke('attr', 'aria-expanded')
      .should('eq', 'true')
      
      cy.get('#faq-answer-8 > .faq__answer > a')
      .invoke('attr', 'href')
      .should('eq', 'https://spreadprivacy.com/how-does-the-duckduckgo-app-extension-protect-my-privacy/')

  });
});