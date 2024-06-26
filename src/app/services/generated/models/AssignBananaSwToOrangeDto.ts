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

import type { BananaSwKey } from "./BananaSwKey";
import { BananaSwKeyFromJSON, BananaSwKeyToJSON } from "./BananaSwKey";

/**
 *
 * @export
 * @interface AssignBananaSwToOrangeDto
 */
export interface AssignBananaSwToOrangeDto {
  /**
   *
   * @type {Array<BananaSwKey>}
   * @memberof AssignBananaSwToOrangeDto
   */
  addedPear: Array<BananaSwKey>;
  /**
   *
   * @type {Array<BananaSwKey>}
   * @memberof AssignBananaSwToOrangeDto
   */
  removedPear: Array<BananaSwKey>;
  /**
   *
   * @type {Array<number>}
   * @memberof AssignBananaSwToOrangeDto
   */
  Oranges: Array<number>;
  /**
   *
   * @type {Array<number>}
   * @memberof AssignBananaSwToOrangeDto
   */
  Oranges29: Array<number>;
}

/**
 * Check if a given object implements the AssignBananaSwToOrangeDto interface.
 */
export function instanceOfAssignBananaSwToOrangeDto(value: object): boolean {
  if (!("addedPear" in value)) return false;
  if (!("removedPear" in value)) return false;
  if (!("Oranges" in value)) return false;
  if (!("Oranges29" in value)) return false;
  return true;
}

export function AssignBananaSwToOrangeDtoFromJSON(
  json: any
): AssignBananaSwToOrangeDto {
  return AssignBananaSwToOrangeDtoFromJSONTyped(json, false);
}

export function AssignBananaSwToOrangeDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AssignBananaSwToOrangeDto {
  if (json == null) {
    return json;
  }
  return {
    addedPear: (json["addedPear"] as Array<any>).map(BananaSwKeyFromJSON),
    removedPear: (json["removedPear"] as Array<any>).map(BananaSwKeyFromJSON),
    Oranges: json["Oranges"],
    Oranges29: json["Oranges29"],
  };
}

export function AssignBananaSwToOrangeDtoToJSON(
  value?: AssignBananaSwToOrangeDto | null
): any {
  if (value == null) {
    return value;
  }
  return {
    addedPear: (value["addedPear"] as Array<any>).map(BananaSwKeyToJSON),
    removedPear: (value["removedPear"] as Array<any>).map(BananaSwKeyToJSON),
    Oranges: value["Oranges"],
    Oranges29: value["Oranges29"],
  };
}
