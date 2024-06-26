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

import type { OrangeLimeMode } from "./OrangeLimeMode";
import { OrangeLimeModeFromJSON, OrangeLimeModeToJSON } from "./OrangeLimeMode";

/**
 *
 * @export
 * @interface UpdateOrangeLimesLimeDto
 */
export interface UpdateOrangeLimesLimeDto {
  /**
   *
   * @type {number}
   * @memberof UpdateOrangeLimesLimeDto
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof UpdateOrangeLimesLimeDto
   */
  position: number;
  /**
   *
   * @type {number}
   * @memberof UpdateOrangeLimesLimeDto
   */
  Lime29Id?: number;
  /**
   *
   * @type {number}
   * @memberof UpdateOrangeLimesLimeDto
   */
  CherrynachrichtId?: number;
  /**
   *
   * @type {number}
   * @memberof UpdateOrangeLimesLimeDto
   */
  Kiwidata1Id?: number;
  /**
   *
   * @type {OrangeLimeMode}
   * @memberof UpdateOrangeLimesLimeDto
   */
  modus?: OrangeLimeMode;
}

/**
 * Check if a given object implements the UpdateOrangeLimesLimeDto interface.
 */
export function instanceOfUpdateOrangeLimesLimeDto(value: object): boolean {
  if (!("position" in value)) return false;
  return true;
}

export function UpdateOrangeLimesLimeDtoFromJSON(
  json: any
): UpdateOrangeLimesLimeDto {
  return UpdateOrangeLimesLimeDtoFromJSONTyped(json, false);
}

export function UpdateOrangeLimesLimeDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateOrangeLimesLimeDto {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    position: json["position"],
    Lime29Id: json["Lime29Id"] == null ? undefined : json["Lime29Id"],
    CherrynachrichtId:
      json["CherrynachrichtId"] == null ? undefined : json["CherrynachrichtId"],
    Kiwidata1Id: json["Kiwidata1Id"] == null ? undefined : json["Kiwidata1Id"],
    modus:
      json["modus"] == null ? undefined : OrangeLimeModeFromJSON(json["modus"]),
  };
}

export function UpdateOrangeLimesLimeDtoToJSON(
  value?: UpdateOrangeLimesLimeDto | null
): any {
  if (value == null) {
    return value;
  }
  return {
    id: value["id"],
    position: value["position"],
    Lime29Id: value["Lime29Id"],
    CherrynachrichtId: value["CherrynachrichtId"],
    Kiwidata1Id: value["Kiwidata1Id"],
    modus: OrangeLimeModeToJSON(value["modus"]),
  };
}
