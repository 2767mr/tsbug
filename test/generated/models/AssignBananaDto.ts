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
 * @interface AssignBananaDto
 */
export interface AssignBananaDto {
  /**
   *
   * @type {number}
   * @memberof AssignBananaDto
   */
  AppleId: number;
  /**
   *
   * @type {string}
   * @memberof AssignBananaDto
   */
  BananaSugar?: string;
  /**
   *
   * @type {TranslationDto}
   * @memberof AssignBananaDto
   */
  bezeichnung?: TranslationDto;
  /**
   *
   * @type {TranslationDto}
   * @memberof AssignBananaDto
   */
  AppleBezeichnung?: TranslationDto;
  /**
   *
   * @type {boolean}
   * @memberof AssignBananaDto
   */
  selected?: boolean;
}

/**
 * Check if a given object implements the AssignBananaDto interface.
 */
export function instanceOfAssignBananaDto(value: object): boolean {
  if (!("AppleId" in value)) return false;
  return true;
}

export function AssignBananaDtoFromJSON(json: any): AssignBananaDto {
  return AssignBananaDtoFromJSONTyped(json, false);
}

export function AssignBananaDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AssignBananaDto {
  if (json == null) {
    return json;
  }
  return {
    AppleId: json["AppleId"],
    BananaSugar: json["BananaSugar"] == null ? undefined : json["BananaSugar"],
    bezeichnung:
      json["bezeichnung"] == null
        ? undefined
        : TranslationDtoFromJSON(json["bezeichnung"]),
    AppleBezeichnung:
      json["AppleBezeichnung"] == null
        ? undefined
        : TranslationDtoFromJSON(json["AppleBezeichnung"]),
    selected: json["selected"] == null ? undefined : json["selected"],
  };
}

export function AssignBananaDtoToJSON(value?: AssignBananaDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    AppleId: value["AppleId"],
    BananaSugar: value["BananaSugar"],
    bezeichnung: TranslationDtoToJSON(value["bezeichnung"]),
    AppleBezeichnung: TranslationDtoToJSON(value["AppleBezeichnung"]),
    selected: value["selected"],
  };
}
