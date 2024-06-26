/* tslint:disable */
/* eslint-disable */
/**
 * Cranberry.WebAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";

export interface ApiAuthGetRequest {
  redirectUrl?: string;
}

/**
 *
 */
export class AuthApi extends runtime.BaseAPI {
  /**
   */
  async apiAuthGetRaw(
    requestParameters: ApiAuthGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    if (requestParameters["redirectUrl"] != null) {
      queryParameters["redirectUrl"] = requestParameters["redirectUrl"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Auth`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async apiAuthGet(
    requestParameters: ApiAuthGetRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.apiAuthGetRaw(requestParameters, initOverrides);
  }

  /**
   */
  async apiAuthLogoutGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Auth/logout`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async apiAuthLogoutGet(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.apiAuthLogoutGetRaw(initOverrides);
  }
}
