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

import type { FavoriteType } from "./FavoriteType";
import { FavoriteTypeFromJSON, FavoriteTypeToJSON } from "./FavoriteType";
import type { TranslationDto } from "./TranslationDto";
import { TranslationDtoFromJSON, TranslationDtoToJSON } from "./TranslationDto";

/**
 *
 * @export
 * @interface FavoriteDto
 */
export interface FavoriteDto {
  /**
   *
   * @type {number}
   * @memberof FavoriteDto
   */
  id: number;
  /**
   *
   * @type {FavoriteType}
   * @memberof FavoriteDto
   */
  type: FavoriteType;
  /**
   *
   * @type {number}
   * @memberof FavoriteDto
   */
  keyInt?: number;
  /**
   *
   * @type {string}
   * @memberof FavoriteDto
   */
  keyString?: string;
  /**
   *
   * @type {TranslationDto}
   * @memberof FavoriteDto
   */
  description?: TranslationDto;
}

/**
 * Check if a given object implements the FavoriteDto interface.
 */
export function instanceOfFavoriteDto(value: object): boolean {
  if (!("id" in value)) return false;
  if (!("type" in value)) return false;
  return true;
}

export function FavoriteDtoFromJSON(json: any): FavoriteDto {
  return FavoriteDtoFromJSONTyped(json, false);
}

export function FavoriteDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): FavoriteDto {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    type: FavoriteTypeFromJSON(json["type"]),
    keyInt: json["keyInt"] == null ? undefined : json["keyInt"],
    keyString: json["keyString"] == null ? undefined : json["keyString"],
    description:
      json["description"] == null
        ? undefined
        : TranslationDtoFromJSON(json["description"]),
  };
}

export function FavoriteDtoToJSON(value?: FavoriteDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value["id"],
    type: FavoriteTypeToJSON(value["type"]),
    keyInt: value["keyInt"],
    keyString: value["keyString"],
    description: TranslationDtoToJSON(value["description"]),
  };
}