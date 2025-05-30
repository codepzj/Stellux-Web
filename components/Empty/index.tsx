'use client'

import EmptySvg from '@/assets/svg/empty.svg'
import Image from 'next/image'
import { Button } from '@heroui/button'
import { useRouter } from 'next/navigation'

const Empty = ({ info }: { info: string }) => {
    const router = useRouter()
    return (
        <div className="w-full h-[90vh] flex flex-col justify-center items-center">
            <Image src={EmptySvg} alt="404" className='w-2/3 xl:w-[20rem] lg:w-[16rem] md:w-[12rem]' />
            <h2 className='text-3xl sm:text-3xl font-bold my-4'>暂无数据</h2>
            <p className='text-sm text-default-600 mb-4'>一年之计在于春,一日之计在于晨</p>
            <Button className='mt-6 cursor-pointer' color="primary" variant="solid" onPress={() => router.push("/")}>返回首页</Button>
        </div>
    );
};

export default Empty;