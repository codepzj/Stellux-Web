"use client"

import Script from "next/script"

export default () => {
    return (
        <Script dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?c5903fc2839c1e535113b195dc6222ee";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
            `
        }} />
    )
}