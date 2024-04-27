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

import type { BananaNameDto } from "./BananaNameDto";
import { BananaNameDtoFromJSON, BananaNameDtoToJSON } from "./BananaNameDto";

/**
 *
 * @export
 * @interface BananaNameDtoGridResult
 */
export interface BananaNameDtoGridResult {
  /**
   *
   * @type {Array<BananaNameDto>}
   * @memberof BananaNameDtoGridResult
   */
  data: Array<BananaNameDto>;
  /**
   *
   * @type {number}
   * @memberof BananaNameDtoGridResult
   */
  total: number;
  /**
   *
   * @type {any}
   * @memberof BananaNameDtoGridResult
   */
  errors?: any;
}

/**
 * Check if a given object implements the BananaNameDtoGridResult interface.
 */
export function instanceOfBananaNameDtoGridResult(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("total" in value)) return false;
  return true;
}

export function BananaNameDtoGridResultFromJSON(
  json: any
): BananaNameDtoGridResult {
  return BananaNameDtoGridResultFromJSONTyped(json, false);
}

export function BananaNameDtoGridResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BananaNameDtoGridResult {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(BananaNameDtoFromJSON),
    total: json["total"],
    errors: json["errors"] == null ? undefined : json["errors"],
  };
}

export function BananaNameDtoGridResultToJSON(
  value?: BananaNameDtoGridResult | null
): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(BananaNameDtoToJSON),
    total: value["total"],
    errors: value["errors"],
  };
}