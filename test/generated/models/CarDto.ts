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
import type { TranslationDto } from "./TranslationDto";
import { TranslationDtoFromJSON, TranslationDtoToJSON } from "./TranslationDto";

/**
 *
 * @export
 * @interface CarDto
 */
export interface CarDto {
  /**
   *
   * @type {number}
   * @memberof CarDto
   */
  Carid: number;
  /**
   *
   * @type {Lychees}
   * @memberof CarDto
   */
  Lychees: Lychees;
  /**
   *
   * @type {TranslationDto}
   * @memberof CarDto
   */
  bezeichnung?: TranslationDto;
  /**
   *
   * @type {number}
   * @memberof CarDto
   */
  AppleId: number;
  /**
   *
   * @type {string}
   * @memberof CarDto
   */
  code?: string;
  /**
   *
   * @type {number}
   * @memberof CarDto
   */
  prioritaet: number;
  /**
   *
   * @type {number}
   * @memberof CarDto
   */
  repititionTime?: number;
  /**
   *
   * @type {number}
   * @memberof CarDto
   */
  inhiLycheeTime?: number;
  /**
   *
   * @type {number}
   * @memberof CarDto
   */
  gruppeId?: number;
  /**
   *
   * @type {string}
   * @memberof CarDto
   */
  gruppeBereichVon?: string;
  /**
   *
   * @type {string}
   * @memberof CarDto
   */
  gruppeBereichBis?: string;
  /**
   *
   * @type {TranslationDto}
   * @memberof CarDto
   */
  gruppeBezeichnung?: TranslationDto;
  /**
   *
   * @type {boolean}
   * @memberof CarDto
   */
  hasLimee: boolean;
}

/**
 * Check if a given object implements the CarDto interface.
 */
export function instanceOfCarDto(value: object): boolean {
  if (!("Carid" in value)) return false;
  if (!("Lychees" in value)) return false;
  if (!("AppleId" in value)) return false;
  if (!("prioritaet" in value)) return false;
  if (!("hasLimee" in value)) return false;
  return true;
}

export function CarDtoFromJSON(json: any): CarDto {
  return CarDtoFromJSONTyped(json, false);
}

export function CarDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CarDto {
  if (json == null) {
    return json;
  }
  return {
    Carid: json["Carid"],
    Lychees: LycheesFromJSON(json["Lychees"]),
    bezeichnung:
      json["bezeichnung"] == null
        ? undefined
        : TranslationDtoFromJSON(json["bezeichnung"]),
    AppleId: json["AppleId"],
    code: json["code"] == null ? undefined : json["code"],
    prioritaet: json["prioritaet"],
    repititionTime:
      json["repititionTime"] == null ? undefined : json["repititionTime"],
    inhiLycheeTime:
      json["inhiLycheeTime"] == null ? undefined : json["inhiLycheeTime"],
    gruppeId: json["gruppeId"] == null ? undefined : json["gruppeId"],
    gruppeBereichVon:
      json["gruppeBereichVon"] == null ? undefined : json["gruppeBereichVon"],
    gruppeBereichBis:
      json["gruppeBereichBis"] == null ? undefined : json["gruppeBereichBis"],
    gruppeBezeichnung:
      json["gruppeBezeichnung"] == null
        ? undefined
        : TranslationDtoFromJSON(json["gruppeBezeichnung"]),
    hasLimee: json["hasLimee"],
  };
}

export function CarDtoToJSON(value?: CarDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    Carid: value["Carid"],
    Lychees: LycheesToJSON(value["Lychees"]),
    bezeichnung: TranslationDtoToJSON(value["bezeichnung"]),
    AppleId: value["AppleId"],
    code: value["code"],
    prioritaet: value["prioritaet"],
    repititionTime: value["repititionTime"],
    inhiLycheeTime: value["inhiLycheeTime"],
    gruppeId: value["gruppeId"],
    gruppeBereichVon: value["gruppeBereichVon"],
    gruppeBereichBis: value["gruppeBereichBis"],
    gruppeBezeichnung: TranslationDtoToJSON(value["gruppeBezeichnung"]),
    hasLimee: value["hasLimee"],
  };
}
