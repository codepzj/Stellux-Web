'use client'

import { Input } from '@/components/ui/input'
import NextLink from 'next/link'
import { SearchLinearIcon } from '@/components/basic/svg-icon'
import { useSearch } from '@/app/(app)/blog/provider'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export function SearchModal() {
  const { isOpen, closeSearch, keyword, setKeyword, results, loading } = useSearch()

  const highlight = (text: string, key: string) => {
    const parts = text.split(new RegExp(`(${key})`, 'gi'))
    return parts.map((p, i) =>
      p.toLowerCase() === key.toLowerCase() ? (
        <mark key={i} className="bg-yellow-300 text-black px-1 rounded">
          {p}
        </mark>
      ) : (
        <span key={i}>{p}</span>
      )
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeSearch}>
      <DialogContent className="w-full max-w-md sm:max-w-lg md:max-w-xl p-0 overflow-hidden max-h-[80vh]">
        <DialogHeader className="sr-only">
          <DialogTitle>搜索</DialogTitle>
          <DialogDescription>输入关键词搜索博客</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col">
          <div className="sticky top-0 z-10 border-b bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/75 sm:px-6">
            <div className="flex items-center gap-3 rounded-md border bg-muted/40 px-3 py-2 shadow-inner">
              <SearchLinearIcon size={18} className="text-muted-foreground shrink-0" />
              <Input
                placeholder="输入关键词搜索..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="h-10 flex-1 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
                autoFocus
              />
              <code className="pointer-events-none shrink-0 rounded bg-muted px-2 py-1 text-[10px] text-foreground">
                ESC
              </code>
            </div>
          </div>

          <div className="max-h-[60vh] overflow-y-auto px-4 pb-4 pt-3 sm:px-6 sm:pb-6 space-y-2">
            {loading ? (
              <div className="text-center text-muted-foreground">加载中...</div>
            ) : results.length > 0 ? (
              results.map((post) => (
                <NextLink key={post.id} href={`/blog/${post.alias}`} onClick={closeSearch}>
                  <div className="cursor-pointer rounded-lg border border-transparent bg-muted/50 p-3 transition hover:border-border hover:bg-muted">
                    <div className="line-clamp-2 text-base font-medium text-foreground">
                      {highlight(post.title, keyword)}
                    </div>
                    {post.description && (
                      <div className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {highlight(post.description, keyword)}
                      </div>
                    )}
                  </div>
                </NextLink>
              ))
            ) : (
              keyword && <div className="text-center text-muted-foreground">暂无结果 🕵️‍♂️</div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
