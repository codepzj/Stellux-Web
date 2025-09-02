import { Markdown } from '@/components/business/md'
import { content } from './content'
import Comment from '@/components/business/comment'
import { Spacer } from '@heroui/spacer'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Markdown content={content} />
      <Spacer y={16} />
      <Comment />
    </div>
  )
}
