'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { PostVO } from '@/types/post'
import { getPostByKeyWordAPI } from '@/api/post'
import { SearchModal } from './modal'

interface SearchContextType {
  isOpen: boolean
  keyword: string
  results: PostVO[]
  loading: boolean
  openSearch: () => void
  closeSearch: () => void
  setKeyword: (value: string) => void
}

const SearchContext = createContext<SearchContextType | null>(null)

export const useSearch = () => {
  const ctx = useContext(SearchContext)
  if (!ctx) throw new Error('useSearch 必须在 SearchProvider 中使用')
  return ctx
}

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState<PostVO[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (!keyword.trim()) {
        setResults([])
        setLoading(false)
        return
      }
      setLoading(true)
      try {
        const res = await getPostByKeyWordAPI(keyword)
        setResults(res.data || [])
      } finally {
        setLoading(false)
      }
    }, 300)
    return () => clearTimeout(handler)
  }, [keyword])

  const openSearch = () => setIsOpen(true)
  const closeSearch = () => {
    setIsOpen(false)
    setKeyword('')
    setResults([])
  }

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        keyword,
        results,
        loading,
        openSearch,
        closeSearch,
        setKeyword,
      }}
    >
      {children}
      <SearchModal />
    </SearchContext.Provider>
  )
}
