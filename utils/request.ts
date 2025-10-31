import { Response } from '@/types/dto'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

class Request {
  private readonly baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private async request<T, D>(
    url: string,
    method: RequestMethod,
    data?: T,
    headers?: Record<string, string>,
    isCache?: boolean,
    cacheTime?: number
  ): Promise<Response<D>> {
    // 请求配置项
    const options: RequestInit = {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: data ? JSON.stringify(data) : undefined,
      ...(isCache ? { next: { revalidate: cacheTime }} : { cache: 'no-store' })
    }

    try {
      const res = await fetch(`${this.baseUrl}${url}`, options)
      return await res?.json()
    } catch (err: any) {
      console.error('捕获到异常：', err, '请检查后端服务是否正常')
      return {} as Response<D>
    }
  }

  public get<D>(url: string, data?: { params?: object }, isCache?: boolean, cacheTime?: number): Promise<Response<D>> {
    const queryString = data?.params
      ? `?${new URLSearchParams(data.params as Record<string, string>).toString()}`
      : ''
    return this.request<any, D>(`${url}${queryString}`, 'GET', undefined, undefined, isCache, cacheTime)
  }

  public async post<T, D>(url: string, data: T): Promise<Response<D>> {
    return this.request<T, D>(url, 'POST', data)
  }

  public async put<T, D>(url: string, data: T): Promise<Response<D>> {
    return this.request<T, D>(url, 'PUT', data)
  }

  public async delete<T, D>(url: string, data: T): Promise<Response<D>> {
    const respData = this.request<T, D>(url, 'DELETE', data)
    return respData
  }
}

const baseUrl = process.env.NEXT_PUBLIC_PROJECT_API as string
export const request = new Request(baseUrl)
