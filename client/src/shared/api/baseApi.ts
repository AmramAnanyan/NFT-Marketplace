import { BASE_DEVELOPMENT_URL } from 'shared/constants/generic';

class BaseApi {
  private baseUrl = BASE_DEVELOPMENT_URL;
  private headers: Headers;
  prefix: string;
  private isForm: boolean = false;

  constructor(prefix: string) {
    this.headers = new Headers();
    this.prefix = prefix;
  }

  private initHeaders() {
    this.headers.append(
      'Authorization',
      `Bearer ${localStorage.getItem('privateToken')}`
    );
    if (!this.isForm) {
      this.headers.append('Content-Type', 'application/json');
    }
  }

  public setAdditionalHeaders(key: string, value: string) {
    if (key && value) this.headers.append(key, value);
  }

  private async handleResponse(response: Response): Promise<any> {
    try {
      return await response.json();
    } catch (error) {
      throw new Error('Failed to parse response');
    }
  }
  private handleRequestBody(body: any): string | null {
    if (!this.isForm && body) {
      return JSON.stringify(body);
    }
    return body;
  }
  private async handleFetch(
    url: string,
    method: string = 'GET',
    body?: any
  ): Promise<Response> {
    const bodyData = this.handleRequestBody(body);
    this.initHeaders();
    return fetch(`${this.baseUrl}${this.prefix}${url}`, {
      headers: this.headers,
      method,
      ...(bodyData && { body: bodyData })
    });
  }
  public async get(url: string): Promise<any> {
    try {
      const response = await this.handleFetch(url, 'GET');
      return this.handleResponse(response);
    } catch (error) {
      throw error;
    }
  }
  public async post(url: string, body: any, isForm?: boolean): Promise<any> {
    if (isForm) {
      this.isForm = isForm;
    }
    try {
      const response = await this.handleFetch(url, 'POST', body);
      return this.handleResponse(response);
    } catch (error) {
      throw error;
    }
  }
}

export default BaseApi;
