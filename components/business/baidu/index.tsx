'use client'

import Script from 'next/script'

const BaiduAnalytics = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('百度统计在开发环境不启用')
    return null
  }
  return (
    <Script
      id="baidu-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?c30b5c7e4ce3c2e1c7325ae907799b20";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `,
      }}
    />
  )
}

export default BaiduAnalytics
