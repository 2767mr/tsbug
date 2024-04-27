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

import type { HistoryDtoGridResult, HistoryGroupDto } from "../models/index";
import {
  HistoryDtoGridResultFromJSON,
  HistoryGroupDtoFromJSON,
} from "../models/index";
import * as runtime from "../runtime";

export interface GetChangesRequest {
  request?: any;
  tableName?: string;
  key?: Array<string>;
}

export interface GetMostChangedEntriesRequest {
  takeTop?: number;
}

export interface GetRecentChangesRequest {
  request?: any;
  all?: boolean;
}

/**
 *
 */
export class HistoryApi extends runtime.BaseAPI {
  /**
   */
  async getChangesRaw(
    requestParameters: GetChangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<HistoryDtoGridResult>> {
    const queryParameters: any = {};

    if (requestParameters["request"] != null) {
      queryParameters["request"] = requestParameters["request"];
    }

    if (requestParameters["tableName"] != null) {
      queryParameters["tableName"] = requestParameters["tableName"];
    }

    if (requestParameters["key"] != null) {
      queryParameters["key"] = requestParameters["key"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/History`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      HistoryDtoGridResultFromJSON(jsonValue)
    );
  }

  /**
   */
  async getChanges(
    requestParameters: GetChangesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<HistoryDtoGridResult> {
    const response = await this.getChangesRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async getMostChangedEntriesRaw(
    requestParameters: GetMostChangedEntriesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<HistoryGroupDto>>> {
    const queryParameters: any = {};

    if (requestParameters["takeTop"] != null) {
      queryParameters["takeTop"] = requestParameters["takeTop"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/History/mostchanged`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(HistoryGroupDtoFromJSON)
    );
  }

  /**
   */
  async getMostChangedEntries(
    requestParameters: GetMostChangedEntriesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<HistoryGroupDto>> {
    const response = await this.getMostChangedEntriesRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getRecentChangesRaw(
    requestParameters: GetRecentChangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<HistoryDtoGridResult>> {
    const queryParameters: any = {};

    if (requestParameters["request"] != null) {
      queryParameters["request"] = requestParameters["request"];
    }

    if (requestParameters["all"] != null) {
      queryParameters["all"] = requestParameters["all"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/History/recent`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      HistoryDtoGridResultFromJSON(jsonValue)
    );
  }

  /**
   */
  async getRecentChanges(
    requestParameters: GetRecentChangesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<HistoryDtoGridResult> {
    const response = await this.getRecentChangesRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}