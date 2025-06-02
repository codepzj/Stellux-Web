'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CommentSettingVO } from '@/types/config'
import useConfigStore from '@/store/config'

export default function Comment() {
    const pathname = usePathname()
    const [commentSetting, setCommentSetting] = useState<CommentSettingVO | null>(null)
    const [twikooReady, setTwikooReady] = useState(false)

    useEffect(() => {
        // 每次路由变化都重新加载配置
        const setting = useConfigStore.getState().commentSetting
        setCommentSetting(setting)
        setTwikooReady(false) // 重置状态，确保重新加载
    }, [pathname])

    useEffect(() => {
        if (commentSetting && !twikooReady) {
            const shouldHideTwikoo =
                commentSetting.allow_comment_type === 'forbidden' ||
                commentSetting.env_id === ''

            if (!shouldHideTwikoo && (window as any).twikoo) {
                (window as any).twikoo.init({
                    envId: commentSetting.env_id,
                    el: '#stellux-comment',
                })
                setTwikooReady(true)
            }
        }
    }, [commentSetting, twikooReady])

    if (!commentSetting || commentSetting.allow_comment_type === 'forbidden' || commentSetting.env_id === '') {
        return null
    }

    return (
        <>
            {/* 第一次加载时挂载脚本 */}
            {!twikooReady && (
                <>
                    <Script src="https://imgcache.qq.com/qcloud/cloudbase-js-sdk/1.3.3/cloudbase.full.js" />
                    <Script
                        src="https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js"
                        strategy="afterInteractive"
                        onLoad={() => {
                            if (commentSetting && (window as any).twikoo) {
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
            <div id="stellux-comment" />
        </>
    )
}
