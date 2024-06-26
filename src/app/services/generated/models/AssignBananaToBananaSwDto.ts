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

import type { BananaKey } from "./BananaKey";
import { BananaKeyFromJSON, BananaKeyToJSON } from "./BananaKey";

/**
 *
 * @export
 * @interface AssignBananaToBananaSwDto
 */
export interface AssignBananaToBananaSwDto {
  /**
   *
   * @type {Array<BananaKey>}
   * @memberof AssignBananaToBananaSwDto
   */
  addedBanana: Array<BananaKey>;
  /**
   *
   * @type {Array<BananaKey>}
   * @memberof AssignBananaToBananaSwDto
   */
  removedBanana: Array<BananaKey>;
}

/**
 * Check if a given object implements the AssignBananaToBananaSwDto interface.
 */
export function instanceOfAssignBananaToBananaSwDto(value: object): boolean {
  if (!("addedBanana" in value)) return false;
  if (!("removedBanana" in value)) return false;
  return true;
}

export function AssignBananaToBananaSwDtoFromJSON(
  json: any
): AssignBananaToBananaSwDto {
  return AssignBananaToBananaSwDtoFromJSONTyped(json, false);
}

export function AssignBananaToBananaSwDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AssignBananaToBananaSwDto {
  if (json == null) {
    return json;
  }
  return {
    addedBanana: (json["addedBanana"] as Array<any>).map(BananaKeyFromJSON),
    removedBanana: (json["removedBanana"] as Array<any>).map(BananaKeyFromJSON),
  };
}

export function AssignBananaToBananaSwDtoToJSON(
  value?: AssignBananaToBananaSwDto | null
): any {
  if (value == null) {
    return value;
  }
  return {
    addedBanana: (value["addedBanana"] as Array<any>).map(BananaKeyToJSON),
    removedBanana: (value["removedBanana"] as Array<any>).map(BananaKeyToJSON),
  };
}
