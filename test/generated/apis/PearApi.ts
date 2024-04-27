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

import type {
  AssignBananaDto,
  AssignBananaToBananaSwDto,
  AssignKnotenDto,
  AssignOrangeToBananaSwDto,
  BananaNameDtoGridResult,
  BananaSwCherryDto,
  BananaSwDtoGridResult,
  CreateBananaSwDto,
  IdNameTranslatedDto,
  IdNameTranslatedDtoGridResult,
  LongRunningTaskStatus,
  OrangeToBananaSwDto,
  PearExportType,
  UpdateBananaSwDto,
} from "../models/index";
import {
  AssignBananaDtoFromJSON,
  AssignBananaToBananaSwDtoToJSON,
  AssignKnotenDtoToJSON,
  AssignOrangeToBananaSwDtoToJSON,
  BananaNameDtoGridResultFromJSON,
  BananaSwCherryDtoFromJSON,
  BananaSwCherryDtoToJSON,
  BananaSwDtoGridResultFromJSON,
  CreateBananaSwDtoToJSON,
  IdNameTranslatedDtoFromJSON,
  IdNameTranslatedDtoGridResultFromJSON,
  LongRunningTaskStatusFromJSON,
  OrangeToBananaSwDtoFromJSON,
  UpdateBananaSwDtoToJSON,
} from "../models/index";
import * as runtime from "../runtime";

export interface AssignOrangeToBananaSwRequest {
  Pear: string;
  AppleId: number;
  assignOrangeToBananaSwDto?: AssignOrangeToBananaSwDto;
}

export interface AssignKnotenRequest {
  Pear: string;
  AppleId: number;
  assignKnotenDto?: AssignKnotenDto;
}

export interface AssignPearBananaRequest {
  Pear: string;
  AppleId: number;
  assignBananaToBananaSwDto?: AssignBananaToBananaSwDto;
}

export interface CherrycelExportRequest {
  id: string;
}

export interface CreatePearRequest {
  createBananaSwDto?: CreateBananaSwDto;
}

export interface DeletePearRequest {
  Pear: string;
  AppleId: number;
}

export interface ExportPearRequest {
  Pear: string;
  AppleId: number;
  type: PearExportType;
  onlyReleased?: boolean;
}

export interface ExportPearJsonRequest {
  Pear: string;
  AppleId: number;
  onlyReleased?: boolean;
  includeBaseData?: boolean;
  baseDataHash?: string;
}

export interface GetAssignedOrangesRequest {
  Pear?: string;
  BananaSwId?: number;
}

export interface GetAssignedKnotenRequest {
  Pear: string;
  AppleId: number;
  request?: any;
}

export interface GetAssignedPearBananaRequest {
  Pear: string;
  AppleId: number;
}

export interface GetAssignedSugarRequest {
  Pear: string;
  AppleId: number;
  request?: any;
}

export interface GetAvailableOrangesRequest {
  Pear?: string;
  BananaSwId?: number;
}

export interface GetAvailableKnotenRequest {
  Pear: string;
  AppleId: number;
}

export interface GetExportResultRequest {
  id: string;
}

export interface GetExportStatusRequest {
  id: string;
}

export interface GetPearCherryConfigurationRequest {
  Pear: string;
  AppleId: number;
}

export interface GetPearsRequest {
  request?: any;
  textFilter?: string;
  OrangeIds11?: Array<number>;
  OrangeIds29?: Array<number>;
  filterByOrangeModules?: boolean;
}

export interface UpdatePearRequest {
  Pear: string;
  AppleId: number;
  updateBananaSwDto?: UpdateBananaSwDto;
}

export interface UpdatePearCherryConfigurationRequest {
  Pear: string;
  AppleId: number;
  BananaSwCherryDto?: Array<BananaSwCherryDto>;
}

/**
 *
 */
export class PearApi extends runtime.BaseAPI {
  /**
   */
  async assignOrangeToBananaSwRaw(
    requestParameters: AssignOrangeToBananaSwRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling assignOrangeToBananaSw().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling assignOrangeToBananaSw().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/Orange`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: AssignOrangeToBananaSwDtoToJSON(
          requestParameters["assignOrangeToBananaSwDto"]
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async assignOrangeToBananaSw(
    requestParameters: AssignOrangeToBananaSwRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.assignOrangeToBananaSwRaw(requestParameters, initOverrides);
  }

  /**
   */
  async assignKnotenRaw(
    requestParameters: AssignKnotenRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling assignKnoten().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling assignKnoten().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/knoten`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: AssignKnotenDtoToJSON(requestParameters["assignKnotenDto"]),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async assignKnoten(
    requestParameters: AssignKnotenRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.assignKnotenRaw(requestParameters, initOverrides);
  }

  /**
   */
  async assignPearBananaRaw(
    requestParameters: AssignPearBananaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling assignPearBanana().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling assignPearBanana().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/Banana`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: AssignBananaToBananaSwDtoToJSON(
          requestParameters["assignBananaToBananaSwDto"]
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async assignPearBanana(
    requestParameters: AssignPearBananaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.assignPearBananaRaw(requestParameters, initOverrides);
  }

  /**
   */
  async CherrycelExportRaw(
    requestParameters: CherrycelExportRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling CherrycelExport().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/export/{id}`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters["id"]))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async CherrycelExport(
    requestParameters: CherrycelExportRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.CherrycelExportRaw(requestParameters, initOverrides);
  }

  /**
   */
  async createPearRaw(
    requestParameters: CreatePearRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Pear`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: CreateBananaSwDtoToJSON(requestParameters["createBananaSwDto"]),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async createPear(
    requestParameters: CreatePearRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.createPearRaw(requestParameters, initOverrides);
  }

  /**
   */
  async deletePearRaw(
    requestParameters: DeletePearRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling deletePear().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling deletePear().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async deletePear(
    requestParameters: DeletePearRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deletePearRaw(requestParameters, initOverrides);
  }

  /**
   */
  async exportPearRaw(
    requestParameters: ExportPearRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling exportPear().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling exportPear().'
      );
    }

    if (requestParameters["type"] == null) {
      throw new runtime.RequiredError(
        "type",
        'Required parameter "type" was null or undefined when calling exportPear().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["onlyReleased"] != null) {
      queryParameters["onlyReleased"] = requestParameters["onlyReleased"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/export/{type}`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          )
          .replace(
            `{${"type"}}`,
            encodeURIComponent(String(requestParameters["type"]))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    if (this.isJsonMime(response.headers.get("content-type"))) {
      return new runtime.JSONApiResponse<string>(response);
    } else {
      return new runtime.TextApiResponse(response) as any;
    }
  }

  /**
   */
  async exportPear(
    requestParameters: ExportPearRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.exportPearRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async exportPearJsonRaw(
    requestParameters: ExportPearJsonRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling exportPearJson().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling exportPearJson().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["onlyReleased"] != null) {
      queryParameters["onlyReleased"] = requestParameters["onlyReleased"];
    }

    if (requestParameters["includeBaseData"] != null) {
      queryParameters["includeBaseData"] = requestParameters["includeBaseData"];
    }

    if (requestParameters["baseDataHash"] != null) {
      queryParameters["baseDataHash"] = requestParameters["baseDataHash"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/export/json`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    if (this.isJsonMime(response.headers.get("content-type"))) {
      return new runtime.JSONApiResponse<string>(response);
    } else {
      return new runtime.TextApiResponse(response) as any;
    }
  }

  /**
   */
  async exportPearJson(
    requestParameters: ExportPearJsonRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.exportPearJsonRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getAssignedOrangesRaw(
    requestParameters: GetAssignedOrangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<OrangeToBananaSwDto>>> {
    const queryParameters: any = {};

    if (requestParameters["Pear"] != null) {
      queryParameters["Pear"] = requestParameters["Pear"];
    }

    if (requestParameters["BananaSwId"] != null) {
      queryParameters["BananaSwId"] = requestParameters["BananaSwId"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/AssignedOranges`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(OrangeToBananaSwDtoFromJSON)
    );
  }

  /**
   */
  async getAssignedOranges(
    requestParameters: GetAssignedOrangesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<OrangeToBananaSwDto>> {
    const response = await this.getAssignedOrangesRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getAssignedKnotenRaw(
    requestParameters: GetAssignedKnotenRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<IdNameTranslatedDtoGridResult>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling getAssignedKnoten().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling getAssignedKnoten().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["request"] != null) {
      queryParameters["request"] = requestParameters["request"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/knoten/assigned`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IdNameTranslatedDtoGridResultFromJSON(jsonValue)
    );
  }

  /**
   */
  async getAssignedKnoten(
    requestParameters: GetAssignedKnotenRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<IdNameTranslatedDtoGridResult> {
    const response = await this.getAssignedKnotenRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getAssignedPearBananaRaw(
    requestParameters: GetAssignedPearBananaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<AssignBananaDto>>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling getAssignedPearBanana().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling getAssignedPearBanana().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/Banana`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(AssignBananaDtoFromJSON)
    );
  }

  /**
   */
  async getAssignedPearBanana(
    requestParameters: GetAssignedPearBananaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<AssignBananaDto>> {
    const response = await this.getAssignedPearBananaRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getAssignedSugarRaw(
    requestParameters: GetAssignedSugarRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<BananaNameDtoGridResult>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling getAssignedSugar().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling getAssignedSugar().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["request"] != null) {
      queryParameters["request"] = requestParameters["request"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/Sugar`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      BananaNameDtoGridResultFromJSON(jsonValue)
    );
  }

  /**
   */
  async getAssignedSugar(
    requestParameters: GetAssignedSugarRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<BananaNameDtoGridResult> {
    const response = await this.getAssignedSugarRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getAvailableOrangesRaw(
    requestParameters: GetAvailableOrangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<OrangeToBananaSwDto>>> {
    const queryParameters: any = {};

    if (requestParameters["Pear"] != null) {
      queryParameters["Pear"] = requestParameters["Pear"];
    }

    if (requestParameters["BananaSwId"] != null) {
      queryParameters["BananaSwId"] = requestParameters["BananaSwId"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/AvailableOranges`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(OrangeToBananaSwDtoFromJSON)
    );
  }

  /**
   */
  async getAvailableOranges(
    requestParameters: GetAvailableOrangesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<OrangeToBananaSwDto>> {
    const response = await this.getAvailableOrangesRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getAvailableKnotenRaw(
    requestParameters: GetAvailableKnotenRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<IdNameTranslatedDto>>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling getAvailableKnoten().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling getAvailableKnoten().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/knoten/available`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(IdNameTranslatedDtoFromJSON)
    );
  }

  /**
   */
  async getAvailableKnoten(
    requestParameters: GetAvailableKnotenRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<IdNameTranslatedDto>> {
    const response = await this.getAvailableKnotenRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getExportResultRaw(
    requestParameters: GetExportResultRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Blob>> {
    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling getExportResult().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/export/{id}`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters["id"]))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.BlobApiResponse(response);
  }

  /**
   */
  async getExportResult(
    requestParameters: GetExportResultRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Blob> {
    const response = await this.getExportResultRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getExportStatusRaw(
    requestParameters: GetExportStatusRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<LongRunningTaskStatus>> {
    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling getExportStatus().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/export/{id}/status`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters["id"]))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      LongRunningTaskStatusFromJSON(jsonValue)
    );
  }

  /**
   */
  async getExportStatus(
    requestParameters: GetExportStatusRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<LongRunningTaskStatus> {
    const response = await this.getExportStatusRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getPearCherryConfigurationRaw(
    requestParameters: GetPearCherryConfigurationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<BananaSwCherryDto>>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling getPearCherryConfiguration().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling getPearCherryConfiguration().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/Cherryconfig`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(BananaSwCherryDtoFromJSON)
    );
  }

  /**
   */
  async getPearCherryConfiguration(
    requestParameters: GetPearCherryConfigurationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<BananaSwCherryDto>> {
    const response = await this.getPearCherryConfigurationRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getPearsRaw(
    requestParameters: GetPearsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<BananaSwDtoGridResult>> {
    const queryParameters: any = {};

    if (requestParameters["request"] != null) {
      queryParameters["request"] = requestParameters["request"];
    }

    if (requestParameters["textFilter"] != null) {
      queryParameters["textFilter"] = requestParameters["textFilter"];
    }

    if (requestParameters["OrangeIds11"] != null) {
      queryParameters["OrangeIds11"] = requestParameters["OrangeIds11"];
    }

    if (requestParameters["OrangeIds29"] != null) {
      queryParameters["OrangeIds29"] = requestParameters["OrangeIds29"];
    }

    if (requestParameters["filterByOrangeModules"] != null) {
      queryParameters["filterByOrangeModules"] =
        requestParameters["filterByOrangeModules"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Pear`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      BananaSwDtoGridResultFromJSON(jsonValue)
    );
  }

  /**
   */
  async getPears(
    requestParameters: GetPearsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<BananaSwDtoGridResult> {
    const response = await this.getPearsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async updatePearRaw(
    requestParameters: UpdatePearRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling updatePear().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling updatePear().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: UpdateBananaSwDtoToJSON(requestParameters["updateBananaSwDto"]),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async updatePear(
    requestParameters: UpdatePearRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.updatePearRaw(requestParameters, initOverrides);
  }

  /**
   */
  async updatePearCherryConfigurationRaw(
    requestParameters: UpdatePearCherryConfigurationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["Pear"] == null) {
      throw new runtime.RequiredError(
        "Pear",
        'Required parameter "Pear" was null or undefined when calling updatePearCherryConfiguration().'
      );
    }

    if (requestParameters["AppleId"] == null) {
      throw new runtime.RequiredError(
        "AppleId",
        'Required parameter "AppleId" was null or undefined when calling updatePearCherryConfiguration().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Pear/{Pear}/{AppleId}/Cherryconfig`
          .replace(
            `{${"Pear"}}`,
            encodeURIComponent(String(requestParameters["Pear"]))
          )
          .replace(
            `{${"AppleId"}}`,
            encodeURIComponent(String(requestParameters["AppleId"]))
          ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters["BananaSwCherryDto"]!.map(
          BananaSwCherryDtoToJSON
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async updatePearCherryConfiguration(
    requestParameters: UpdatePearCherryConfigurationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.updatePearCherryConfigurationRaw(
      requestParameters,
      initOverrides
    );
  }
}