'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { CommentSettingVO } from '@/types/config'
import { useIsClient } from 'usehooks-ts'
import useConfigStore from '@/store/config'

export default function Comment() {
    const isClient = useIsClient()
    const [commentSetting, setCommentSetting] = useState<CommentSettingVO | null>(null)
    const [twikooReady, setTwikooReady] = useState(false)

    useEffect(() => {
        if (!isClient) return
        const commentSetting = useConfigStore.getState().commentSetting
        setCommentSetting(commentSetting)
    }, [isClient])

    if (!isClient || !commentSetting) return null

    const shouldHideTwikoo =
        commentSetting.allow_comment_type === 'forbidden' ||
        commentSetting.env_id === ''

    if (shouldHideTwikoo) {
        return null
    }

    return (
        <>
            {/* 动态加载 twikoo 脚本 */}
            {!twikooReady && (
                <>
                    <Script src="https://imgcache.qq.com/qcloud/cloudbase-js-sdk/1.3.3/cloudbase.full.js" />

                    <Script
                        src="https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js"
                        strategy="afterInteractive"
                        onLoad={() => {
                            if ((window as any).twikoo) {
                                ; (window as any).twikoo.init({
                                    envId: commentSetting.env_id,
                                    el: '#stellux-comment',
                                })
                                setTwikooReady(true)
                            }
                        }}
                    />
                </>
            )}
            {/* 评论区域 */}
            <div id="stellux-comment" />
        </>
    )
}
