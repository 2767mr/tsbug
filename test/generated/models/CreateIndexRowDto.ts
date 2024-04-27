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
 * @interface CreateIndexRowDto
 */
export interface CreateIndexRowDto {
  /**
   *
   * @type {string}
   * @memberof CreateIndexRowDto
   */
  indexNr: string;
  /**
   *
   * @type {string}
   * @memberof CreateIndexRowDto
   */
  value: string;
  /**
   *
   * @type {TranslationDto}
   * @memberof CreateIndexRowDto
   */
  bezeichnung: TranslationDto;
}

/**
 * Check if a given object implements the CreateIndexRowDto interface.
 */
export function instanceOfCreateIndexRowDto(value: object): boolean {
  if (!("indexNr" in value)) return false;
  if (!("value" in value)) return false;
  if (!("bezeichnung" in value)) return false;
  return true;
}

export function CreateIndexRowDtoFromJSON(json: any): CreateIndexRowDto {
  return CreateIndexRowDtoFromJSONTyped(json, false);
}

export function CreateIndexRowDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateIndexRowDto {
  if (json == null) {
    return json;
  }
  return {
    indexNr: json["indexNr"],
    value: json["value"],
    bezeichnung: TranslationDtoFromJSON(json["bezeichnung"]),
  };
}

export function CreateIndexRowDtoToJSON(value?: CreateIndexRowDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    indexNr: value["indexNr"],
    value: value["value"],
    bezeichnung: TranslationDtoToJSON(value["bezeichnung"]),
  };
}