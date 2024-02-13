export interface IQuiz {
  _id: string;
  question: string;
  answer?: string;
  options: [string];
}
