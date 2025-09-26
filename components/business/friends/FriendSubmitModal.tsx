'use client'

import { useEffect, useState } from 'react'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from '@heroui/react'
import { addToast } from '@heroui/toast'
import { createFriendAPI } from '@/api/friend'

export default function FriendSubmitModal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [siteUrl, setSiteUrl] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [websiteType, setWebsiteType] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
        setIsOpen(false)
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
    <>
      <Button variant="light" className="p-0 h-auto min-h-0" onPress={() => setIsOpen(true)}>
        <span className="text-blue-600 hover:underline">自助提交友链 →</span>
      </Button>

      {mounted && (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen} placement="center">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">友链自助提交</ModalHeader>
                <ModalBody>
                  <form
                    className="w-full flex flex-col gap-3"
                    onSubmit={handleSubmit}
                    id="friend-submit-form"
                  >
                    <Input
                      label="网站名称"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      isRequired
                      errorMessage="请输入正确的网站名称"
                    />
                    <Input
                      label="网站描述"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      errorMessage="请输入正确的网站描述"
                      isRequired
                    />
                    <Input
                      label="网站地址"
                      type="url"
                      value={siteUrl}
                      onChange={(e) => setSiteUrl(e.target.value)}
                      placeholder="https://www.golangblog.com"
                      errorMessage="请输入正确的网站地址"
                      isRequired
                    />
                    <Input
                      label="头像地址"
                      type="url"
                      value={avatarUrl}
                      onChange={(e) => setAvatarUrl(e.target.value)}
                      placeholder="https://cdn.codepzj.cn/image/20250529174726187.jpeg"
                      errorMessage="请输入正确的头像地址"
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
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button variant="flat" onPress={onClose} isDisabled={loading}>
                    取消
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    form="friend-submit-form"
                    isDisabled={loading}
                  >
                    {loading ? '提交中...' : '提交'}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  )
}
