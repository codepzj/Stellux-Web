import AboutContent from './content'
import Comment from '@/components/business/comment'
import { Separator } from '@/components/ui/separator'

export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <AboutContent />
      <div className="mt-12">
        <Comment />
      </div>
    </div>
  )
}
