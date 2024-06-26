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

import type { AppleDto } from "./AppleDto";
import { AppleDtoFromJSON, AppleDtoToJSON } from "./AppleDto";
import type { BananaNameDto } from "./BananaNameDto";
import { BananaNameDtoFromJSON, BananaNameDtoToJSON } from "./BananaNameDto";
import type { IdNameDto } from "./IdNameDto";
import { IdNameDtoFromJSON, IdNameDtoToJSON } from "./IdNameDto";
import type { IdNameTranslatedDto } from "./IdNameTranslatedDto";
import {
  IdNameTranslatedDtoFromJSON,
  IdNameTranslatedDtoToJSON,
} from "./IdNameTranslatedDto";
import type { OrangeLimeMode } from "./OrangeLimeMode";
import { OrangeLimeModeFromJSON, OrangeLimeModeToJSON } from "./OrangeLimeMode";
import type { Release } from "./Release";
import { ReleaseFromJSON, ReleaseToJSON } from "./Release";
import type { TranslationDto } from "./TranslationDto";
import { TranslationDtoFromJSON, TranslationDtoToJSON } from "./TranslationDto";

/**
 *
 * @export
 * @interface OrangeDto
 */
export interface OrangeDto {
  /**
   *
   * @type {number}
   * @memberof OrangeDto
   */
  Lychees: number;
  /**
   *
   * @type {number}
   * @memberof OrangeDto
   */
  id: number;
  /**
   *
   * @type {number}
   * @memberof OrangeDto
   */
  code: number;
  /**
   *
   * @type {TranslationDto}
   * @memberof OrangeDto
   */
  name?: TranslationDto;
  /**
   *
   * @type {Release}
   * @memberof OrangeDto
   */
  freigabeState: Release;
  /**
   *
   * @type {AppleDto}
   * @memberof OrangeDto
   */
  Apple?: AppleDto;
  /**
   *
   * @type {Array<BananaNameDto>}
   * @memberof OrangeDto
   */
  Banana?: Array<BananaNameDto>;
  /**
   *
   * @type {Array<IdNameDto>}
   * @memberof OrangeDto
   */
  Pear?: Array<IdNameDto>;
  /**
   *
   * @type {Array<IdNameTranslatedDto>}
   * @memberof OrangeDto
   */
  standorte?: Array<IdNameTranslatedDto>;
  /**
   *
   * @type {boolean}
   * @memberof OrangeDto
   */
  analogEingang: boolean;
  /**
   *
   * @type {boolean}
   * @memberof OrangeDto
   */
  analogAusgang: boolean;
  /**
   *
   * @type {boolean}
   * @memberof OrangeDto
   */
  digitalEingang: boolean;
  /**
   *
   * @type {boolean}
   * @memberof OrangeDto
   */
  digitalAusgang: boolean;
  /**
   *
   * @type {number}
   * @memberof OrangeDto
   */
  styleId?: number;
  /**
   *
   * @type {string}
   * @memberof OrangeDto
   */
  style?: string;
  /**
   *
   * @type {number}
   * @memberof OrangeDto
   */
  modusId?: number;
  /**
   *
   * @type {string}
   * @memberof OrangeDto
   */
  modus?: string;
  /**
   *
   * @type {number}
   * @memberof OrangeDto
   */
  maxAnzahlParametercode: number;
  /**
   *
   * @type {number}
   * @memberof OrangeDto
   */
  approvedToParameterCode: number;
  /**
   *
   * @type {Array<OrangeLimeMode>}
   * @memberof OrangeDto
   */
  LimeMode?: Array<OrangeLimeMode>;
  /**
   *
   * @type {number}
   * @memberof OrangeDto
   */
  approvedToLimePosition: number;
}

/**
 * Check if a given object implements the OrangeDto interface.
 */
export function instanceOfOrangeDto(value: object): boolean {
  if (!("Lychees" in value)) return false;
  if (!("id" in value)) return false;
  if (!("code" in value)) return false;
  if (!("freigabeState" in value)) return false;
  if (!("analogEingang" in value)) return false;
  if (!("analogAusgang" in value)) return false;
  if (!("digitalEingang" in value)) return false;
  if (!("digitalAusgang" in value)) return false;
  if (!("maxAnzahlParametercode" in value)) return false;
  if (!("approvedToParameterCode" in value)) return false;
  if (!("approvedToLimePosition" in value)) return false;
  return true;
}

export function OrangeDtoFromJSON(json: any): OrangeDto {
  return OrangeDtoFromJSONTyped(json, false);
}

export function OrangeDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrangeDto {
  if (json == null) {
    return json;
  }
  return {
    Lychees: json["Lychees"],
    id: json["id"],
    code: json["code"],
    name:
      json["name"] == null ? undefined : TranslationDtoFromJSON(json["name"]),
    freigabeState: ReleaseFromJSON(json["freigabeState"]),
    Apple: json["Apple"] == null ? undefined : AppleDtoFromJSON(json["Apple"]),
    Banana:
      json["Banana"] == null
        ? undefined
        : (json["Banana"] as Array<any>).map(BananaNameDtoFromJSON),
    Pear:
      json["Pear"] == null
        ? undefined
        : (json["Pear"] as Array<any>).map(IdNameDtoFromJSON),
    standorte:
      json["standorte"] == null
        ? undefined
        : (json["standorte"] as Array<any>).map(IdNameTranslatedDtoFromJSON),
    analogEingang: json["analogEingang"],
    analogAusgang: json["analogAusgang"],
    digitalEingang: json["digitalEingang"],
    digitalAusgang: json["digitalAusgang"],
    styleId: json["styleId"] == null ? undefined : json["styleId"],
    style: json["style"] == null ? undefined : json["style"],
    modusId: json["modusId"] == null ? undefined : json["modusId"],
    modus: json["modus"] == null ? undefined : json["modus"],
    maxAnzahlParametercode: json["maxAnzahlParametercode"],
    approvedToParameterCode: json["approvedToParameterCode"],
    LimeMode:
      json["LimeMode"] == null
        ? undefined
        : (json["LimeMode"] as Array<any>).map(OrangeLimeModeFromJSON),
    approvedToLimePosition: json["approvedToLimePosition"],
  };
}

export function OrangeDtoToJSON(value?: OrangeDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    Lychees: value["Lychees"],
    id: value["id"],
    code: value["code"],
    name: TranslationDtoToJSON(value["name"]),
    freigabeState: ReleaseToJSON(value["freigabeState"]),
    Apple: AppleDtoToJSON(value["Apple"]),
    Banana:
      value["Banana"] == null
        ? undefined
        : (value["Banana"] as Array<any>).map(BananaNameDtoToJSON),
    Pear:
      value["Pear"] == null
        ? undefined
        : (value["Pear"] as Array<any>).map(IdNameDtoToJSON),
    standorte:
      value["standorte"] == null
        ? undefined
        : (value["standorte"] as Array<any>).map(IdNameTranslatedDtoToJSON),
    analogEingang: value["analogEingang"],
    analogAusgang: value["analogAusgang"],
    digitalEingang: value["digitalEingang"],
    digitalAusgang: value["digitalAusgang"],
    styleId: value["styleId"],
    style: value["style"],
    modusId: value["modusId"],
    modus: value["modus"],
    maxAnzahlParametercode: value["maxAnzahlParametercode"],
    approvedToParameterCode: value["approvedToParameterCode"],
    LimeMode:
      value["LimeMode"] == null
        ? undefined
        : (value["LimeMode"] as Array<any>).map(OrangeLimeModeToJSON),
    approvedToLimePosition: value["approvedToLimePosition"],
  };
}
