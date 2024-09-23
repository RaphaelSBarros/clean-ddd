import { Slug } from './vakue-objects/slug'
import { Entity } from '../../core/entities/entity'

interface QuestionProps {
  title: string
  slug: Slug
  content: string
  authorId: string
}

export class Question extends Entity<QuestionProps> {}
