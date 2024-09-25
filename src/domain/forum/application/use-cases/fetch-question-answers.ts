import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface FetchRecentQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchRecentQuestionAnswersUseCaseResponse {
  answers: Answer[]
}

export class FetchRecentQuestionAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchRecentQuestionAnswersUseCaseRequest): Promise<FetchRecentQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      {
        page,
      },
    )

    return {
      answers,
    }
  }
}
