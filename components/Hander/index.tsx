'use client'

import { useEffect } from "react";
import { getCommentSettingAPI } from "@/api/config";
import useConfigStore from "@/store/config";

export default function Handler() {
    const { setCommentSetting } = useConfigStore()
    useEffect(() => {
        getCommentSettingAPI().then((res) => {
            setCommentSetting(res.data)
        })
    }, [])
    return null
}