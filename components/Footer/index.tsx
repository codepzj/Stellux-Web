import Link from "next/link";
import { Tooltip } from "@heroui/tooltip";

export default () => {
    return (
        <div className='py-2 text-center text-sm'>
            <Tooltip content="于留白中沉淀，于极简中思索">
                <div className='flex justify-center items-center'>
                    <Link href="https://github.com/StelluxWiki/Stellux" target='_blank' className='hover:text-primary transition-colors'> 基于 Stellux 构建</Link>
                </div>
            </Tooltip>
        </div>
    )
}