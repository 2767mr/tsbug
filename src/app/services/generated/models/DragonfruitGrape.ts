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

/**
 *
 * @export
 * @interface DragonfruitGrape
 */
export interface DragonfruitGrape {
  /**
   *
   * @type {number}
   * @memberof DragonfruitGrape
   */
  roleId: number;
  /**
   *
   * @type {string}
   * @memberof DragonfruitGrape
   */
  roleName?: string;
  /**
   *
   * @type {number}
   * @memberof DragonfruitGrape
   */
  AppleId?: number;
}

/**
 * Check if a given object implements the DragonfruitGrape interface.
 */
export function instanceOfDragonfruitGrape(value: object): boolean {
  if (!("roleId" in value)) return false;
  return true;
}

export function DragonfruitGrapeFromJSON(json: any): DragonfruitGrape {
  return DragonfruitGrapeFromJSONTyped(json, false);
}

export function DragonfruitGrapeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DragonfruitGrape {
  if (json == null) {
    return json;
  }
  return {
    roleId: json["roleId"],
    roleName: json["roleName"] == null ? undefined : json["roleName"],
    AppleId: json["AppleId"] == null ? undefined : json["AppleId"],
  };
}

export function DragonfruitGrapeToJSON(value?: DragonfruitGrape | null): any {
  if (value == null) {
    return value;
  }
  return {
    roleId: value["roleId"],
    roleName: value["roleName"],
    AppleId: value["AppleId"],
  };
}