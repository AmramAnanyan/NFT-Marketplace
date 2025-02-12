class BaseApi {
  private baseUrl = 'http://localhost:8080';
  headers: Headers;
  prefix: string;

  constructor(prefix: string) {
    this.headers = new Headers();
    this.initHeaders();
    this.prefix = prefix;
  }

  private initHeaders() {
    this.headers.append('Content-Type', 'application/json');
  }

  public setAdditionalHeaders(key: string, value: string) {
    if (key && value) this.headers.append(key, value);
  }

  private async handleResponse(response: Response): Promise<any> {
    try {
      return await response.json();
    } catch (error) {
      console.error('Error parsing response:', error);
      throw new Error('Failed to parse response');
    }
  }

  private async handleFetch(
    url: string,
    method: string = 'GET'
  ): Promise<Response> {
    return fetch(`${this.baseUrl}/${this.prefix}/${url}`, {
      headers: this.headers,
      method
    });
  }

  public async get(url: string): Promise<any> {
    try {
      const response = await this.handleFetch(url, 'GET');
      return this.handleResponse(response);
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
}

export default BaseApi;
