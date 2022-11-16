describe('메인 페이지', () => {
  beforeEach(() => {
    cy.wait(1000);
    cy.visit('http://localhost:3000');
  });

  describe('메인 페이지에서', () => {
		it('메인 화면을 확인합니다', () => {
			cy.contains('RANDOM QUIZ');

			cy.contains('완전히 새로운');
			cy.contains('랜덤 퀴즈');
      
			cy.contains('퀴즈 풀기');
      cy.get('.main-button').should('have.text', '퀴즈 풀기');
		});
    
    context('퀴즈 풀기 버튼을 클릭하면', () => {
      it('퀴즈 페이지로 넘어갑니다', () => {
        cy.intercept('GET', 'https://opentdb.com/api.php?*', { fixture: 'questions.json' }).as('getQuestions')

        cy.get('.main-button').click();
        cy.wait('@getQuestions').its('response.statusCode').should('eq', 200)

        cy.url().should('include', '/question');
        cy.contains('문제 1');
      });
    });
  });
});
