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

import type { TranslationDto } from "./TranslationDto";
import { TranslationDtoFromJSON, TranslationDtoToJSON } from "./TranslationDto";

/**
 *
 * @export
 * @interface AppleInfoDto
 */
export interface AppleInfoDto {
  /**
   *
   * @type {number}
   * @memberof AppleInfoDto
   */
  AppleInfoId: number;
  /**
   *
   * @type {string}
   * @memberof AppleInfoDto
   */
  Avocado?: string;
  /**
   *
   * @type {number}
   * @memberof AppleInfoDto
   */
  Lychees: number;
  /**
   *
   * @type {string}
   * @memberof AppleInfoDto
   */
  Guava?: string;
  /**
   *
   * @type {TranslationDto}
   * @memberof AppleInfoDto
   */
  bezeichnung?: TranslationDto;
}

/**
 * Check if a given object implements the AppleInfoDto interface.
 */
export function instanceOfAppleInfoDto(value: object): boolean {
  if (!("AppleInfoId" in value)) return false;
  if (!("Lychees" in value)) return false;
  return true;
}

export function AppleInfoDtoFromJSON(json: any): AppleInfoDto {
  return AppleInfoDtoFromJSONTyped(json, false);
}

export function AppleInfoDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AppleInfoDto {
  if (json == null) {
    return json;
  }
  return {
    AppleInfoId: json["AppleInfoId"],
    Avocado: json["Avocado"] == null ? undefined : json["Avocado"],
    Lychees: json["Lychees"],
    Guava: json["Guava"] == null ? undefined : json["Guava"],
    bezeichnung:
      json["bezeichnung"] == null
        ? undefined
        : TranslationDtoFromJSON(json["bezeichnung"]),
  };
}

export function AppleInfoDtoToJSON(value?: AppleInfoDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    AppleInfoId: value["AppleInfoId"],
    Avocado: value["Avocado"],
    Lychees: value["Lychees"],
    Guava: value["Guava"],
    bezeichnung: TranslationDtoToJSON(value["bezeichnung"]),
  };
}