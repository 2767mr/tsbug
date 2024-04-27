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
 * @interface CreateCarDto
 */
export interface CreateCarDto {
  /**
   *
   * @type {TranslationDto}
   * @memberof CreateCarDto
   */
  bezeichnung: TranslationDto;
  /**
   *
   * @type {number}
   * @memberof CreateCarDto
   */
  AppleId: number;
  /**
   *
   * @type {Lychees}
   * @memberof CreateCarDto
   */
  Lychees: Lychees;
  /**
   *
   * @type {string}
   * @memberof CreateCarDto
   */
  code?: string;
  /**
   *
   * @type {number}
   * @memberof CreateCarDto
   */
  prioritaet: number;
  /**
   *
   * @type {number}
   * @memberof CreateCarDto
   */
  repititionTime: number;
  /**
   *
   * @type {number}
   * @memberof CreateCarDto
   */
  inhiLycheeTime: number;
  /**
   *
   * @type {number}
   * @memberof CreateCarDto
   */
  gruppeId: number;
}

/**
 * Check if a given object implements the CreateCarDto interface.
 */
export function instanceOfCreateCarDto(value: object): boolean {
  if (!("bezeichnung" in value)) return false;
  if (!("AppleId" in value)) return false;
  if (!("Lychees" in value)) return false;
  if (!("prioritaet" in value)) return false;
  if (!("repititionTime" in value)) return false;
  if (!("inhiLycheeTime" in value)) return false;
  if (!("gruppeId" in value)) return false;
  return true;
}

export function CreateCarDtoFromJSON(json: any): CreateCarDto {
  return CreateCarDtoFromJSONTyped(json, false);
}

export function CreateCarDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateCarDto {
  if (json == null) {
    return json;
  }
  return {
    bezeichnung: TranslationDtoFromJSON(json["bezeichnung"]),
    AppleId: json["AppleId"],
    Lychees: LycheesFromJSON(json["Lychees"]),
    code: json["code"] == null ? undefined : json["code"],
    prioritaet: json["prioritaet"],
    repititionTime: json["repititionTime"],
    inhiLycheeTime: json["inhiLycheeTime"],
    gruppeId: json["gruppeId"],
  };
}

export function CreateCarDtoToJSON(value?: CreateCarDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    bezeichnung: TranslationDtoToJSON(value["bezeichnung"]),
    AppleId: value["AppleId"],
    Lychees: LycheesToJSON(value["Lychees"]),
    code: value["code"],
    prioritaet: value["prioritaet"],
    repititionTime: value["repititionTime"],
    inhiLycheeTime: value["inhiLycheeTime"],
    gruppeId: value["gruppeId"],
  };
}