'use client'

import { AlertTriangle } from "lucide-react";

interface Props {
    error: Error & { digest?: string }
}

function ErrorPage({ error }: Props) {
    return (
        <div className='h-[calc(100vh-100px)] flex items-center justify-center text-2xl text-red-500'>
            {error.message}
        </div>
    )
}

export default ErrorPage