/**
 * 문제 모델 인터페이스
 */
export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  answers: IAnswer[];
}

/**
 * 정답 모델 인터페이스 - 지문과 유저 측에서 사용
 */
export interface IAnswer {
  answer: string;
  isCorrect: boolean;
}

/**
 * 시험 보고서 모델 인터페이스
 */
export interface IReport {
  beginTime: number;
  finishTime: number;
}

/* eslint-disable camelcase */
/**
 * Open API에서 GET https://opentdb.com/api.php에 대한 response값
 * 결과 data에 대한 인터페이스
 */
export interface IApiQuestions {
  response_code: number;
  results: IApiQuestion[];
}

/**
 * Open API에서 GET https://opentdb.com/api.php에 대한 response - results 타입 중 하나
 * 결과 data에 대한 인터페이스
 */
export interface IApiQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
