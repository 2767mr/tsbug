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
 * @interface AssignedOrange
 */
export interface AssignedOrange {
  /**
   *
   * @type {number}
   * @memberof AssignedOrange
   */
  id: number;
  /**
   *
   * @type {TranslationDto}
   * @memberof AssignedOrange
   */
  bezeichnung?: TranslationDto;
  /**
   *
   * @type {number}
   * @memberof AssignedOrange
   */
  Orange: number;
}

/**
 * Check if a given object implements the AssignedOrange interface.
 */
export function instanceOfAssignedOrange(value: object): boolean {
  if (!("id" in value)) return false;
  if (!("Orange" in value)) return false;
  return true;
}

export function AssignedOrangeFromJSON(json: any): AssignedOrange {
  return AssignedOrangeFromJSONTyped(json, false);
}

export function AssignedOrangeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AssignedOrange {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    bezeichnung:
      json["bezeichnung"] == null
        ? undefined
        : TranslationDtoFromJSON(json["bezeichnung"]),
    Orange: json["Orange"],
  };
}

export function AssignedOrangeToJSON(value?: AssignedOrange | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value["id"],
    bezeichnung: TranslationDtoToJSON(value["bezeichnung"]),
    Orange: value["Orange"],
  };
}
