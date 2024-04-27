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
 * @interface BananaDto
 */
export interface BananaDto {
  /**
   *
   * @type {number}
   * @memberof BananaDto
   */
  AppleId: number;
  /**
   *
   * @type {string}
   * @memberof BananaDto
   */
  BananaSugar?: string;
  /**
   *
   * @type {TranslationDto}
   * @memberof BananaDto
   */
  bezeichnung?: TranslationDto;
  /**
   *
   * @type {TranslationDto}
   * @memberof BananaDto
   */
  AppleBezeichnung?: TranslationDto;
}

/**
 * Check if a given object implements the BananaDto interface.
 */
export function instanceOfBananaDto(value: object): boolean {
  if (!("AppleId" in value)) return false;
  return true;
}

export function BananaDtoFromJSON(json: any): BananaDto {
  return BananaDtoFromJSONTyped(json, false);
}

export function BananaDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BananaDto {
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
  };
}

export function BananaDtoToJSON(value?: BananaDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    AppleId: value["AppleId"],
    BananaSugar: value["BananaSugar"],
    bezeichnung: TranslationDtoToJSON(value["bezeichnung"]),
    AppleBezeichnung: TranslationDtoToJSON(value["AppleBezeichnung"]),
  };
}