"use client";

import { Tabs, Tab } from "@heroui/tabs";

export function PostTabs({ className }: { className?: string }) {
    return (
        <div className={className}>
            <Tabs variant="light" aria-label="tabs" radius="sm" >
                <Tab key="post" title="近期发布" />
            </Tabs>
        </div>
    );
}