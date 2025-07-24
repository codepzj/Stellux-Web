'use client'

import { Button } from "@heroui/react";
import Link from "next/link";
import { IconAlertCircle } from "@tabler/icons-react";

interface Props {
    error: Error & { digest?: string }
}

function ErrorPage({ error }: Props) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
            <div className='flex-1 flex items-center justify-center p-4'>
                <div className="max-w-md w-full text-center">
                    <div className="inline-flex items-center justify-center rounded-full bg-red-100 p-4 dark:bg-red-900/20 mb-6">
                        <IconAlertCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
                        出错了
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                        {error.message || "发生了一个错误，请稍后再试"}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button 
                            onClick={() => window.location.reload()}
                            color="primary"
                        >
                            重新加载
                        </Button>
                        <Link href="/">
                            <Button variant="flat">
                                返回首页
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage