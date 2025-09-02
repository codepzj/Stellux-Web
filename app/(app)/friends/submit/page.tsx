'use client'

import { useEffect, useState } from 'react'
import { createFriendAPI } from '@/api/friend'
import { Input, Button, Select, SelectItem } from '@heroui/react'
import { addToast } from '@heroui/toast'

export default function FriendSubmitPage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [siteUrl, setSiteUrl] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [websiteType, setWebsiteType] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { code, msg } = await createFriendAPI({
        name,
        description,
        site_url: siteUrl,
        avatar_url: avatarUrl,
        website_type: websiteType,
      })
      if (code === 0) {
        addToast({ title: '提交成功，待审核后显示。', color: 'success' })
        setName('')
        setDescription('')
        setSiteUrl('')
        setAvatarUrl('')
        setWebsiteType(0)
      } else {
        addToast({ title: msg || '提交失败，请稍后重试', color: 'danger' })
      }
    } catch (err) {
      addToast({ title: '提交异常，请稍后重试', color: 'danger' })
    } finally {
      setLoading(false)
    }
  }

  return (
    mounted && (
      <div className="container mx-auto px-4 py-8" suppressHydrationWarning>
        <h1 className="text-2xl font-bold mb-6">友链自助提交</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            label="网站名称"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isRequired
          />
          <Input
            label="网站描述"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            isRequired
          />
          <Input
            label="网站地址"
            type="url"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            placeholder="https://www.golangblog.com"
            isRequired
          />
          <Input
            label="头像地址"
            type="url"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            placeholder="https://cdn.codepzj.cn/image/20250529174726187.jpeg"
            isRequired
          />

          <Select
            isDisabled={!mounted}
            label="站点类型"
            selectedKeys={new Set([String(websiteType)])}
            onSelectionChange={(keys) => {
              const first = Array.from(keys as Set<string>)[0]
              if (first !== undefined) setWebsiteType(Number(first))
            }}
          >
            <SelectItem key="0">大佬</SelectItem>
            <SelectItem key="1">技术型</SelectItem>
            <SelectItem key="2">设计型</SelectItem>
            <SelectItem key="3">生活型</SelectItem>
          </Select>

          <Button color="primary" type="submit" isDisabled={loading}>
            {loading ? '提交中...' : '提交'}
          </Button>
        </form>
      </div>
    )
  )
}
