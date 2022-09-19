import axios from 'axios';

import { IApiQuestions } from 'src/types/quiz';

export const getQuestions = async (): Promise<IApiQuestions> => {
  const response = await axios.get<IApiQuestions>('https://opentdb.com/api.php?amount=5&type=multiple');
  return response.data;
};

// TODO: 함수가 2개 이상일 때 삭제할 것
export const XXX = () => {
  return undefined;
};
