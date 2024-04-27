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

import type { HistoryDto } from "./HistoryDto";
import { HistoryDtoFromJSON, HistoryDtoToJSON } from "./HistoryDto";

/**
 *
 * @export
 * @interface HistoryDtoGridResult
 */
export interface HistoryDtoGridResult {
  /**
   *
   * @type {Array<HistoryDto>}
   * @memberof HistoryDtoGridResult
   */
  data: Array<HistoryDto>;
  /**
   *
   * @type {number}
   * @memberof HistoryDtoGridResult
   */
  total: number;
  /**
   *
   * @type {any}
   * @memberof HistoryDtoGridResult
   */
  errors?: any;
}

/**
 * Check if a given object implements the HistoryDtoGridResult interface.
 */
export function instanceOfHistoryDtoGridResult(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("total" in value)) return false;
  return true;
}

export function HistoryDtoGridResultFromJSON(json: any): HistoryDtoGridResult {
  return HistoryDtoGridResultFromJSONTyped(json, false);
}

export function HistoryDtoGridResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): HistoryDtoGridResult {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(HistoryDtoFromJSON),
    total: json["total"],
    errors: json["errors"] == null ? undefined : json["errors"],
  };
}

export function HistoryDtoGridResultToJSON(
  value?: HistoryDtoGridResult | null
): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(HistoryDtoToJSON),
    total: value["total"],
    errors: value["errors"],
  };
}