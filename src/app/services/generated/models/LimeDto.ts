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

import type { Lychees } from "./Lychees";
import { LycheesFromJSON, LycheesToJSON } from "./Lychees";
import type { Release } from "./Release";
import { ReleaseFromJSON, ReleaseToJSON } from "./Release";
import type { TranslationDto } from "./TranslationDto";
import { TranslationDtoFromJSON, TranslationDtoToJSON } from "./TranslationDto";

/**
 *
 * @export
 * @interface LimeDto
 */
export interface LimeDto {
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  LimeId: number;
  /**
   *
   * @type {TranslationDto}
   * @memberof LimeDto
   */
  Apple?: TranslationDto;
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  AppleId: number;
  /**
   *
   * @type {TranslationDto}
   * @memberof LimeDto
   */
  name?: TranslationDto;
  /**
   *
   * @type {string}
   * @memberof LimeDto
   */
  zyklus?: string;
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  laenge: number;
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  comma?: number;
  /**
   *
   * @type {string}
   * @memberof LimeDto
   */
  minWert?: string;
  /**
   *
   * @type {string}
   * @memberof LimeDto
   */
  maxWert?: string;
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  faktor?: number;
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  offset?: number;
  /**
   *
   * @type {string}
   * @memberof LimeDto
   */
  einheit?: string;
  /**
   *
   * @type {Lychees}
   * @memberof LimeDto
   */
  Lychees: Lychees;
  /**
   *
   * @type {Release}
   * @memberof LimeDto
   */
  freigabeState: Release;
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  assignedIdentifier?: number;
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  CarIdentifierId?: number;
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  CarIdentifier?: number;
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  startBlueberry?: number;
  /**
   *
   * @type {number}
   * @memberof LimeDto
   */
  startLychee?: number;
  /**
   *
   * @type {string}
   * @memberof LimeDto
   */
  number?: string;
}

/**
 * Check if a given object implements the LimeDto interface.
 */
export function instanceOfLimeDto(value: object): boolean {
  if (!("LimeId" in value)) return false;
  if (!("AppleId" in value)) return false;
  if (!("laenge" in value)) return false;
  if (!("Lychees" in value)) return false;
  if (!("freigabeState" in value)) return false;
  return true;
}

export function LimeDtoFromJSON(json: any): LimeDto {
  return LimeDtoFromJSONTyped(json, false);
}

export function LimeDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LimeDto {
  if (json == null) {
    return json;
  }
  return {
    LimeId: json["LimeId"],
    Apple:
      json["Apple"] == null ? undefined : TranslationDtoFromJSON(json["Apple"]),
    AppleId: json["AppleId"],
    name:
      json["name"] == null ? undefined : TranslationDtoFromJSON(json["name"]),
    zyklus: json["zyklus"] == null ? undefined : json["zyklus"],
    laenge: json["laenge"],
    comma: json["comma"] == null ? undefined : json["comma"],
    minWert: json["minWert"] == null ? undefined : json["minWert"],
    maxWert: json["maxWert"] == null ? undefined : json["maxWert"],
    faktor: json["faktor"] == null ? undefined : json["faktor"],
    offset: json["offset"] == null ? undefined : json["offset"],
    einheit: json["einheit"] == null ? undefined : json["einheit"],
    Lychees: LycheesFromJSON(json["Lychees"]),
    freigabeState: ReleaseFromJSON(json["freigabeState"]),
    assignedIdentifier:
      json["assignedIdentifier"] == null
        ? undefined
        : json["assignedIdentifier"],
    CarIdentifierId:
      json["CarIdentifierId"] == null ? undefined : json["CarIdentifierId"],
    CarIdentifier:
      json["CarIdentifier"] == null ? undefined : json["CarIdentifier"],
    startBlueberry:
      json["startBlueberry"] == null ? undefined : json["startBlueberry"],
    startLychee: json["startLychee"] == null ? undefined : json["startLychee"],
    number: json["number"] == null ? undefined : json["number"],
  };
}

export function LimeDtoToJSON(value?: LimeDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    LimeId: value["LimeId"],
    Apple: TranslationDtoToJSON(value["Apple"]),
    AppleId: value["AppleId"],
    name: TranslationDtoToJSON(value["name"]),
    zyklus: value["zyklus"],
    laenge: value["laenge"],
    comma: value["comma"],
    minWert: value["minWert"],
    maxWert: value["maxWert"],
    faktor: value["faktor"],
    offset: value["offset"],
    einheit: value["einheit"],
    Lychees: LycheesToJSON(value["Lychees"]),
    freigabeState: ReleaseToJSON(value["freigabeState"]),
    assignedIdentifier: value["assignedIdentifier"],
    CarIdentifierId: value["CarIdentifierId"],
    CarIdentifier: value["CarIdentifier"],
    startBlueberry: value["startBlueberry"],
    startLychee: value["startLychee"],
    number: value["number"],
  };
}