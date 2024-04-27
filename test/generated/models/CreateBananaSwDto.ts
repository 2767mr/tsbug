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
 * @interface CreateBananaSwDto
 */
export interface CreateBananaSwDto {
  /**
   *
   * @type {string}
   * @memberof CreateBananaSwDto
   */
  BananaPear: string;
  /**
   *
   * @type {number}
   * @memberof CreateBananaSwDto
   */
  BananaAppleId: number;
  /**
   *
   * @type {string}
   * @memberof CreateBananaSwDto
   */
  BananaSugar: string;
  /**
   *
   * @type {string}
   * @memberof CreateBananaSwDto
   */
  aktSoftwareStand: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateBananaSwDto
   */
  isMastercontrollerGslave: boolean;
  /**
   *
   * @type {TranslationDto}
   * @memberof CreateBananaSwDto
   */
  bezeichnung: TranslationDto;
}

/**
 * Check if a given object implements the CreateBananaSwDto interface.
 */
export function instanceOfCreateBananaSwDto(value: object): boolean {
  if (!("BananaPear" in value)) return false;
  if (!("BananaAppleId" in value)) return false;
  if (!("BananaSugar" in value)) return false;
  if (!("aktSoftwareStand" in value)) return false;
  if (!("isMastercontrollerGslave" in value)) return false;
  if (!("bezeichnung" in value)) return false;
  return true;
}

export function CreateBananaSwDtoFromJSON(json: any): CreateBananaSwDto {
  return CreateBananaSwDtoFromJSONTyped(json, false);
}

export function CreateBananaSwDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateBananaSwDto {
  if (json == null) {
    return json;
  }
  return {
    BananaPear: json["BananaPear"],
    BananaAppleId: json["BananaAppleId"],
    BananaSugar: json["BananaSugar"],
    aktSoftwareStand: json["aktSoftwareStand"],
    isMastercontrollerGslave: json["isMastercontrollerGslave"],
    bezeichnung: TranslationDtoFromJSON(json["bezeichnung"]),
  };
}

export function CreateBananaSwDtoToJSON(value?: CreateBananaSwDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    BananaPear: value["BananaPear"],
    BananaAppleId: value["BananaAppleId"],
    BananaSugar: value["BananaSugar"],
    aktSoftwareStand: value["aktSoftwareStand"],
    isMastercontrollerGslave: value["isMastercontrollerGslave"],
    bezeichnung: TranslationDtoToJSON(value["bezeichnung"]),
  };
}
