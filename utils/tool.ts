export const isHttpOrHttps = (url: string) => {
  return url.startsWith('http') || url.startsWith('https')
}
