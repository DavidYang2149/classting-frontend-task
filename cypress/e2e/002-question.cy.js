describe('질문 페이지', () => {
  beforeEach(() => {
    cy.wait(1000);
    cy.visit('http://localhost:3000');
    
    /* 자동으로 퀴즈 페이지로 갑니다 */
    cy.beginExam();
  });

  describe('질문 페이지에서(의)', () => {
    describe('1번 문제 페이지에서', () => {
      it('문제 화면을 확인합니다', () => {
        cy.contains('CLASSTING QUIZ');

        cy.contains('문제 1');
        cy.contains('1 / 5');
      });

      context('정답 1번을 클릭하면(고)', () => {
        it('정답인지 결과를 보여줍니다', () => {
          cy.selectAnswer();

          cy.contains(/오답입니다.|정답입니다./);
          cy.contains('선택한 답 1번');

          cy.contains('다음문제');
        });

        context('다음문제를 클릭하면', () => {
          it('2번 문제로 넘어갑니다', () => {
            cy.selectAnswer();
            cy.nextQuestion();

            cy.contains('문제 2');
            cy.contains('이전문제');
            cy.contains('2 / 5');
          });
        });
      });
    });

    describe('3번 문제 페이지에서', () => {
      beforeEach(() => {
        cy.selectAnswer();
        cy.nextQuestion();

        cy.wait(800);

        cy.selectAnswer();
        cy.nextQuestion();
      });

      context('이전문제를 클릭하면(고)', () => {
        it('2번 문제로 돌아갑니다', () => {
          cy.contains('이전문제').click();

          cy.contains('문제 2');
          cy.contains('이전문제');
          cy.contains('2 / 5');
          cy.contains('다음문제');
        });

        context('이미 선택한 정답을 바꾸려하면', () => {
          it('다른 정답을 누를 수 없습니다', () => {
            cy.contains('이전문제').click();
            cy.contains('문제 2');

            cy.get('.question-select-button').should('be.disabled');
          });
        });

        context('다음문제를 클릭하면', () => {
          it('3번 문제로 돌아갑니다', () => {
            cy.contains('이전문제').click();

            cy.contains('문제 2');

            cy.contains('다음문제').click();

            cy.contains('문제 3');
            cy.contains('이전문제');
            cy.contains('3 / 5');
            cy.contains('다음문제');
          });
        });
      });
    });

    describe('마지막 5번 문제 페이지에서', () => {
      beforeEach(() => {
        cy.showLastQuestion();
      });

      context('마지막 문제를 선택하고', () => {
        context('결과 보기를 클릭하면', () => {
          it('결과 페이지로 넘어갑니다', () => {
            cy.selectAnswer();
            cy.showReport();

            cy.contains('퀴즈 보고서');
            cy.contains('정답수 / 오답수 / 문항수');
            cy.contains('내풀이시간');
            cy.contains('다시 풀기');
            cy.contains('닫기');
          });
        });
      });
    });
  });
});
