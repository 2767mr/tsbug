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

import type { CherrynachrichtDto } from "./CherrynachrichtDto";
import {
  CherrynachrichtDtoFromJSON,
  CherrynachrichtDtoToJSON,
} from "./CherrynachrichtDto";

/**
 *
 * @export
 * @interface CherrynachrichtDtoGridResult
 */
export interface CherrynachrichtDtoGridResult {
  /**
   *
   * @type {Array<CherrynachrichtDto>}
   * @memberof CherrynachrichtDtoGridResult
   */
  data: Array<CherrynachrichtDto>;
  /**
   *
   * @type {number}
   * @memberof CherrynachrichtDtoGridResult
   */
  total: number;
  /**
   *
   * @type {any}
   * @memberof CherrynachrichtDtoGridResult
   */
  errors?: any;
}

/**
 * Check if a given object implements the CherrynachrichtDtoGridResult interface.
 */
export function instanceOfCherrynachrichtDtoGridResult(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("total" in value)) return false;
  return true;
}

export function CherrynachrichtDtoGridResultFromJSON(
  json: any
): CherrynachrichtDtoGridResult {
  return CherrynachrichtDtoGridResultFromJSONTyped(json, false);
}

export function CherrynachrichtDtoGridResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CherrynachrichtDtoGridResult {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(CherrynachrichtDtoFromJSON),
    total: json["total"],
    errors: json["errors"] == null ? undefined : json["errors"],
  };
}

export function CherrynachrichtDtoGridResultToJSON(
  value?: CherrynachrichtDtoGridResult | null
): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(CherrynachrichtDtoToJSON),
    total: value["total"],
    errors: value["errors"],
  };
}
