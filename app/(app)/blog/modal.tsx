'use client'

import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import NextLink from 'next/link'
import { SearchLinearIcon } from '@/components/SvgIcon'
import { useSearch } from '@/app/(app)/blog/provider'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export function SearchModal() {
  const { isOpen, closeSearch, keyword, setKeyword, results, loading, hasSearched } = useSearch()

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
      <DialogContent className="w-full max-w-2xl p-0 overflow-hidden max-h-[85vh]">
        <DialogHeader className="sr-only">
          <DialogTitle>搜索</DialogTitle>
          <DialogDescription>输入关键词搜索博客</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col">
          <div className="sticky top-0 z-10 border-b bg-background/95 px-6 py-4 backdrop-blur supports-backdrop-filter:bg-background/75">
            <div className="flex items-center gap-3 rounded-lg border bg-muted/30 px-4 py-2 shadow-sm">
              <SearchLinearIcon size={20} className="text-muted-foreground shrink-0" />
              <Input
                placeholder="输入关键词搜索..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="h-8 flex-1 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
                autoFocus
              />
              <kbd className="pointer-events-none shrink-0 rounded bg-muted px-2 py-0.5 text-[10px] text-muted-foreground border">
                ESC
              </kbd>
            </div>
          </div>

          <div className="max-h-[65vh] overflow-y-auto px-6 pb-6 pt-4 space-y-3">
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="my-2 rounded-lg border border-transparent bg-muted/40 p-4">
                    <Skeleton className="h-5 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3 mt-1" />
                  </div>
                ))}
              </div>
            ) : results.length > 0 ? (
              results.map((post) => (
                <NextLink key={post.id} href={`/blog/${post.alias}`} onClick={closeSearch}>
                  <div className="my-2 cursor-pointer rounded-lg border border-transparent bg-muted/40 p-4 transition-all duration-200 hover:border-border hover:bg-muted hover:shadow-sm">
                    <div className="line-clamp-2 text-base font-medium text-foreground">
                      {keyword.trim() ? highlight(post.title, keyword) : post.title}
                    </div>
                    {post.description && (
                      <div className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {keyword.trim() ? highlight(post.description, keyword) : post.description}
                      </div>
                    )}
                  </div>
                </NextLink>
              ))
            ) : (
              hasSearched && keyword.trim() && !loading && results.length === 0 && <div className="text-center py-8 text-muted-foreground text-sm">暂无搜索结果</div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
