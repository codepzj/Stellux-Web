'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import NotFoundSvg from '@/assets/svg/not-found.svg'
import { Button } from "@heroui/react"

export default function NotFound() {
  const router = useRouter()

  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-center' suppressHydrationWarning>
        <div className='flex flex-col items-center justify-center mt-20'>
          <Image src={NotFoundSvg} alt="404" className='w-2/3 xl:w-[20rem] lg:w-[16rem] md:w-[12rem]' />
          <h2 className='text-3xl sm:text-3xl font-bold my-4'>页面不存在</h2>
          <p className='text-sm text-default-600 mb-4'>页面不存在或已删除，请返回首页</p>
          <Button className='mt-6 cursor-pointer' color="primary" variant="solid" onPress={() => router.push("/")}>返回首页</Button>
        </div>

      </div>

    </>
  );
}