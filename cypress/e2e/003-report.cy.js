describe('결과 페이지', () => {
  beforeEach(() => {
    cy.wait(1000);
    cy.visit('http://localhost:3000');
    
    /* 자동으로 퀴즈를 풀고 결과 페이지로 갑니다 */
    cy.beginExam();
    cy.showLastQuestion();
    cy.selectAnswer();
    cy.showReport();
  });

  describe('결과 페이지에서', () => {
		it('결과 화면을 확인합니다', () => {
			cy.contains('CLASSTING QUIZ');

      cy.contains('퀴즈 보고서');
      cy.contains('정답수 / 오답수 / 문항수');
      cy.contains('내풀이시간');
      cy.contains('다시 풀기');
      cy.contains('닫기');
		});
    
    context('다시 풀기 버튼을 클릭하면', () => {
      it('새로운 문제를 시작합니다', () => {
        cy.intercept('GET', 'https://opentdb.com/api.php?*', { fixture: 'questions.json' }).as('getQuestions')
        
        cy.contains('다시 풀기').click();
        cy.wait('@getQuestions').its('response.statusCode').should('eq', 200)

        cy.url().should('include', '/question');
        cy.contains('문제 1');
      });
    });

    context('닫기 버튼을 클릭하면', () => {
      it('메인화면으로 돌아갑니다', () => {
        cy.contains('닫기').click();

        cy.url().should('include', '/');

        cy.contains('완전히 새로운');
        cy.contains('클래스 퀴즈');
        cy.contains('퀴즈 풀기');
      });
    });
  });
});
