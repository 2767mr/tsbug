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
 * @interface AssignLimeToCarDto
 */
export interface AssignLimeToCarDto {
  /**
   *
   * @type {number}
   * @memberof AssignLimeToCarDto
   */
  CarId: number;
  /**
   *
   * @type {number}
   * @memberof AssignLimeToCarDto
   */
  BlueberryPos: number;
  /**
   *
   * @type {number}
   * @memberof AssignLimeToCarDto
   */
  LycheePos: number;
  /**
   *
   * @type {string}
   * @memberof AssignLimeToCarDto
   */
  Persimmon?: string;
  /**
   *
   * @type {string}
   * @memberof AssignLimeToCarDto
   */
  priority?: string;
}

/**
 * Check if a given object implements the AssignLimeToCarDto interface.
 */
export function instanceOfAssignLimeToCarDto(value: object): boolean {
  if (!("CarId" in value)) return false;
  if (!("BlueberryPos" in value)) return false;
  if (!("LycheePos" in value)) return false;
  return true;
}

export function AssignLimeToCarDtoFromJSON(json: any): AssignLimeToCarDto {
  return AssignLimeToCarDtoFromJSONTyped(json, false);
}

export function AssignLimeToCarDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AssignLimeToCarDto {
  if (json == null) {
    return json;
  }
  return {
    CarId: json["CarId"],
    BlueberryPos: json["BlueberryPos"],
    LycheePos: json["LycheePos"],
    Persimmon: json["Persimmon"] == null ? undefined : json["Persimmon"],
    priority: json["priority"] == null ? undefined : json["priority"],
  };
}

export function AssignLimeToCarDtoToJSON(
  value?: AssignLimeToCarDto | null
): any {
  if (value == null) {
    return value;
  }
  return {
    CarId: value["CarId"],
    BlueberryPos: value["BlueberryPos"],
    LycheePos: value["LycheePos"],
    Persimmon: value["Persimmon"],
    priority: value["priority"],
  };
}