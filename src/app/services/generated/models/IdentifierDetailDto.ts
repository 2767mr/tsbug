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

import type { IdentifierDetailCherrynachrichtDto } from "./IdentifierDetailCherrynachrichtDto";
import {
  IdentifierDetailCherrynachrichtDtoFromJSON,
  IdentifierDetailCherrynachrichtDtoToJSON,
} from "./IdentifierDetailCherrynachrichtDto";
import type { LimeDto } from "./LimeDto";
import { LimeDtoFromJSON, LimeDtoToJSON } from "./LimeDto";

/**
 *
 * @export
 * @interface IdentifierDetailDto
 */
export interface IdentifierDetailDto {
  /**
   *
   * @type {number}
   * @memberof IdentifierDetailDto
   */
  AppleId: number;
  /**
   *
   * @type {number}
   * @memberof IdentifierDetailDto
   */
  identifierId: number;
  /**
   *
   * @type {number}
   * @memberof IdentifierDetailDto
   */
  knotennummer: number;
  /**
   *
   * @type {number}
   * @memberof IdentifierDetailDto
   */
  identifier: number;
  /**
   *
   * @type {number}
   * @memberof IdentifierDetailDto
   */
  pdo: number;
  /**
   *
   * @type {Array<LimeDto>}
   * @memberof IdentifierDetailDto
   */
  Limes?: Array<LimeDto>;
  /**
   *
   * @type {Array<IdentifierDetailCherrynachrichtDto>}
   * @memberof IdentifierDetailDto
   */
  Cherrynachrichten?: Array<IdentifierDetailCherrynachrichtDto>;
}

/**
 * Check if a given object implements the IdentifierDetailDto interface.
 */
export function instanceOfIdentifierDetailDto(value: object): boolean {
  if (!("AppleId" in value)) return false;
  if (!("identifierId" in value)) return false;
  if (!("knotennummer" in value)) return false;
  if (!("identifier" in value)) return false;
  if (!("pdo" in value)) return false;
  return true;
}

export function IdentifierDetailDtoFromJSON(json: any): IdentifierDetailDto {
  return IdentifierDetailDtoFromJSONTyped(json, false);
}

export function IdentifierDetailDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IdentifierDetailDto {
  if (json == null) {
    return json;
  }
  return {
    AppleId: json["AppleId"],
    identifierId: json["identifierId"],
    knotennummer: json["knotennummer"],
    identifier: json["identifier"],
    pdo: json["pdo"],
    Limes:
      json["Limes"] == null
        ? undefined
        : (json["Limes"] as Array<any>).map(LimeDtoFromJSON),
    Cherrynachrichten:
      json["Cherrynachrichten"] == null
        ? undefined
        : (json["Cherrynachrichten"] as Array<any>).map(
            IdentifierDetailCherrynachrichtDtoFromJSON
          ),
  };
}

export function IdentifierDetailDtoToJSON(
  value?: IdentifierDetailDto | null
): any {
  if (value == null) {
    return value;
  }
  return {
    AppleId: value["AppleId"],
    identifierId: value["identifierId"],
    knotennummer: value["knotennummer"],
    identifier: value["identifier"],
    pdo: value["pdo"],
    Limes:
      value["Limes"] == null
        ? undefined
        : (value["Limes"] as Array<any>).map(LimeDtoToJSON),
    Cherrynachrichten:
      value["Cherrynachrichten"] == null
        ? undefined
        : (value["Cherrynachrichten"] as Array<any>).map(
            IdentifierDetailCherrynachrichtDtoToJSON
          ),
  };
}