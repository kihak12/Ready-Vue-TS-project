import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { BadRequestError } from '@/common/domain/BadRequestError';
import { ExternalError } from '@/common/domain/ExternalError';
import { Forbidden } from '@/common/domain/Forbidden';
import { NotFound } from '@/common/domain/NotFound';
import { ReadyProjectTsError } from '@/common/domain/ReadyProjectTsError';

export class BackendCaller {
  constructor(private axiosInstance: AxiosInstance) {}

  async get<T>(uri: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return await this.axiosInstance.get(uri, config).catch(this.error(uri));
  }

  async post<T>(uri: string, data: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return await this.axiosInstance.post(uri, data, config).catch(this.error(uri));
  }

  async put<T>(uri: string, data: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return await this.axiosInstance.put(uri, data, config).catch(this.error(uri));
  }
  async delete<T>(uri: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return await this.axiosInstance.delete(uri, config).catch(this.error(uri));
  }

  private error = (uri: string) => (e: AxiosError) => {
    const status = e.response?.status;
    if (status === undefined) {
      throw new ReadyProjectTsError('There is no status from error').cause(e);
    }
    if (status === 400) {
      throw new BadRequestError(`Access to ${uri} is not correct`, e.response!.data.errors);
    }
    if (status === 403) {
      throw new Forbidden(`Access to ${uri} is forbidden`).cause(e);
    }
    if (status === 404) {
      throw new NotFound(`Resources for ${uri} is not found`).cause(e);
    }
    throw new ExternalError('An error occurs when trying to access path').cause(e);
  };
}
