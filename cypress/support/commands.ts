/// <reference types="cypress" />

Cypress.Commands.add('beginExam', () => {
	cy.intercept('GET', 'https://opentdb.com/api.php?*', { fixture: 'questions.json' }).as('getQuestions')

  cy.get('.main-button').click();
  cy.wait('@getQuestions').its('response.statusCode').should('eq', 200)

  cy.url().should('include', '/question');
});

Cypress.Commands.add('selectAnswer', () => {
	cy.get('.question-select-button').first().click();
});

Cypress.Commands.add('showLastQuestion', () => {
	for (let i = 0; i < 4; i++) {
    cy.selectAnswer();
    cy.nextQuestion();
    cy.wait(100);
  }
});

Cypress.Commands.add('prevQuestion', () => {
  cy.contains('이전문제').click();
});

Cypress.Commands.add('nextQuestion', () => {
	cy.contains('다음문제').click();
});

Cypress.Commands.add('showReport', () => {
	cy.contains('결과 보기').click();
});

declare global {
  namespace Cypress {
    interface Chainable {
      beginExam(): Chainable<void>
      selectAnswer(): Chainable<void>
      showLastQuestion(): Chainable<void>
      prevQuestion(): Chainable<void>
      nextQuestion(): Chainable<void>
      showReport(): Chainable<void>
    }
  }
}

import addContext from 'mochawesome/addContext';

Cypress.on("test:after:run", (test: Mocha.Runnable, runnable) => {

    let videoName = Cypress.spec.name;
    videoName = videoName.replace('/.js.*', '.js');
    const videoUrl = 'videos/' + videoName + '.mp4';
    const context = { test } as Mocha.Context;

    addContext(context, videoUrl)
});
