import AboutContent from './content'
import Comment from '@/components/business/comment'
import { Separator } from '@/components/ui/separator'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AboutContent />
      <div className="max-w-4xl mx-auto mt-12">
        <Separator className="my-8" />
        <Comment />
      </div>
    </div>
  )
}
