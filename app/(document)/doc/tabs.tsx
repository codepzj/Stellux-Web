"use client";

import { Tabs, Tab } from "@heroui/tabs";

export function DocTabs({ className }: { className?: string }) {
    return (
        <div className={className}>
            <Tabs variant="light" aria-label="tabs" radius="sm" className="w-full">
                <Tab key="wiki" title="文档" />
            </Tabs>
        </div>
    );
}