import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (parmas: HttpPostParams): Promise<void> {
    this.url = parmas.url

    return Promise.resolve()
  };
}
