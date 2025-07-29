import { Response } from '@/types/dto'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface RequestConfig {
  method: RequestMethod
  url: string
  data?: any
  headers?: Record<string, string>
  isCache?: boolean
  cacheTime?: number
  params?: Record<string, any>
}

class Request {
  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private buildUrl(url: string, params?: Record<string, any>): string {
    if (!params) return url
    const queryString = new URLSearchParams(params as Record<string, string>).toString()
    return queryString ? `${url}?${queryString}` : url
  }

  private getRequestOptions(
    method: RequestMethod,
    data?: any,
    headers?: Record<string, string>,
    isCache?: boolean,
    cacheTime?: number
  ): RequestInit {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      next: { revalidate: isCache ? cacheTime : 0 },
    }
    // 只有非GET方法才携带body
    if (data && method !== 'GET') {
      options.body = JSON.stringify(data)
    }
    return options
  }

  private async request<T = any, D = any>(config: RequestConfig): Promise<Response<D>> {
    const { method, url, data, headers, isCache, cacheTime, params } = config
    const fullUrl = this.buildUrl(`${this.baseUrl}${url}`, params)
    const options = this.getRequestOptions(method, data, headers, isCache, cacheTime)

    try {
      const res = await fetch(fullUrl, options)
      if (!res.ok) {
        // 可以根据实际后端返回结构优化错误处理
        throw new Error(`请求失败，状态码：${res.status}`)
      }
      return await res.json()
    } catch (err: any) {
      console.error('捕获到异常：', err, '请检查后端服务是否正常')
      return {} as Response<D>
    }
  }

  public get<D = any>(
    url: string,
    config?: {
      params?: Record<string, any>
      headers?: Record<string, string>
      isCache?: boolean
      cacheTime?: number
    }
  ): Promise<Response<D>> {
    return this.request<any, D>({
      method: 'GET',
      url,
      params: config?.params,
      headers: config?.headers,
      isCache: config?.isCache,
      cacheTime: config?.cacheTime,
    })
  }

  public post<T = any, D = any>(
    url: string,
    data?: T,
    config?: {
      headers?: Record<string, string>
      isCache?: boolean
      cacheTime?: number
    }
  ): Promise<Response<D>> {
    return this.request<T, D>({
      method: 'POST',
      url,
      data,
      headers: config?.headers,
      isCache: config?.isCache,
      cacheTime: config?.cacheTime,
    })
  }

  public put<T = any, D = any>(
    url: string,
    data?: T,
    config?: {
      headers?: Record<string, string>
      isCache?: boolean
      cacheTime?: number
    }
  ): Promise<Response<D>> {
    return this.request<T, D>({
      method: 'PUT',
      url,
      data,
      headers: config?.headers,
      isCache: config?.isCache,
      cacheTime: config?.cacheTime,
    })
  }

  public delete<T = any, D = any>(
    url: string,
    data?: T,
    config?: {
      headers?: Record<string, string>
      isCache?: boolean
      cacheTime?: number
    }
  ): Promise<Response<D>> {
    return this.request<T, D>({
      method: 'DELETE',
      url,
      data,
      headers: config?.headers,
      isCache: config?.isCache,
      cacheTime: config?.cacheTime,
    })
  }
}

const baseUrl = process.env.NEXT_PUBLIC_PROJECT_API as string
export const request = new Request(baseUrl)
