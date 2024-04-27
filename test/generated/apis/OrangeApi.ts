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
  AssignAppleToOrangeDto,
  AssignBananaDto,
  AssignBananaSwToOrangeDto,
  AssignBananaToOrangeDto,
  AssignStandortToOrangeDto,
  BananaSwToOrangeDto,
  CreateOrangeDto,
  OrangeDtoGridResult,
  OrangeLimeDto,
  ParameterDto,
  ReleaseOrangesDto,
  RemoveAppleFromOrangeDto,
  UpdateOrangeDto,
  UpdateOrangeLimesDto,
} from "../models/index";
import {
  AssignAppleToOrangeDtoToJSON,
  AssignBananaDtoFromJSON,
  AssignBananaSwToOrangeDtoToJSON,
  AssignBananaToOrangeDtoToJSON,
  AssignStandortToOrangeDtoToJSON,
  BananaSwToOrangeDtoFromJSON,
  CreateOrangeDtoToJSON,
  OrangeDtoGridResultFromJSON,
  OrangeLimeDtoFromJSON,
  ParameterDtoFromJSON,
  ReleaseOrangesDtoToJSON,
  RemoveAppleFromOrangeDtoToJSON,
  UpdateOrangeDtoToJSON,
  UpdateOrangeLimesDtoToJSON,
} from "../models/index";
import * as runtime from "../runtime";

export interface AssignAppleRequest {
  assignAppleToOrangeDto: AssignAppleToOrangeDto;
}

export interface AssignBananaRequest {
  assignBananaToOrangeDto: AssignBananaToOrangeDto;
}

export interface AssignPearRequest {
  assignBananaSwToOrangeDto: AssignBananaSwToOrangeDto;
}

export interface AssignStandortRequest {
  assignStandortToOrangeDto: AssignStandortToOrangeDto;
}

export interface CreateOrangesRequest {
  createOrangeDto: Array<CreateOrangeDto>;
}

export interface DeleteOrangeRequest {
  Lychees: number;
  id: number;
}

export interface ExportOrangeRequest {
  Lychees: number;
  id: number;
}

export interface GetAssignedBananaRequest {
  OrangeIds11?: Array<number>;
  OrangeIds29?: Array<number>;
}

export interface GetAssignedPearRequest {
  OrangeIds11?: Array<number>;
  OrangeIds29?: Array<number>;
}

export interface GetAvailableParameters11Request {
  AppleId?: number;
}

export interface GetFreeIdsRequest {
  Lychees: number;
  start: number;
  count: number;
}

export interface GetOrangeLimesRequest {
  Lychees: number;
  id: number;
}

export interface GetOrangesRequest {
  request: any;
  Lychees?: number;
  LimeId11?: number;
  LimeId29?: number;
  LimeId29Kiwi?: number;
  standort?: number;
  Apple?: number;
  BananaSugar?: string;
  BananaAppleId?: number;
  displayNoPear?: boolean;
  displayNoBanana?: boolean;
  textFilter?: string;
}

export interface GetParametersRequest {
  Lychees: number;
  OrangeId: number;
}

export interface ReleaseOrangesRequest {
  releaseOrangesDto: ReleaseOrangesDto;
}

export interface RemoveAppleRequest {
  removeAppleFromOrangeDto: RemoveAppleFromOrangeDto;
}

export interface UpdateOrangeRequest {
  updateOrangeDto?: UpdateOrangeDto;
}

export interface UpdateOrangeLimesRequest {
  Lychees: number;
  id: number;
  updateOrangeLimesDto?: UpdateOrangeLimesDto;
}

/**
 *
 */
export class OrangeApi extends runtime.BaseAPI {
  /**
   */
  async assignAppleRaw(
    requestParameters: AssignAppleRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["assignAppleToOrangeDto"] == null) {
      throw new runtime.RequiredError(
        "assignAppleToOrangeDto",
        'Required parameter "assignAppleToOrangeDto" was null or undefined when calling assignApple().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Orange/Apple`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: AssignAppleToOrangeDtoToJSON(
          requestParameters["assignAppleToOrangeDto"]
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async assignApple(
    requestParameters: AssignAppleRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.assignAppleRaw(requestParameters, initOverrides);
  }

  /**
   */
  async assignBananaRaw(
    requestParameters: AssignBananaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["assignBananaToOrangeDto"] == null) {
      throw new runtime.RequiredError(
        "assignBananaToOrangeDto",
        'Required parameter "assignBananaToOrangeDto" was null or undefined when calling assignBanana().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Orange/Banana`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: AssignBananaToOrangeDtoToJSON(
          requestParameters["assignBananaToOrangeDto"]
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async assignBanana(
    requestParameters: AssignBananaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.assignBananaRaw(requestParameters, initOverrides);
  }

  /**
   */
  async assignPearRaw(
    requestParameters: AssignPearRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["assignBananaSwToOrangeDto"] == null) {
      throw new runtime.RequiredError(
        "assignBananaSwToOrangeDto",
        'Required parameter "assignBananaSwToOrangeDto" was null or undefined when calling assignPear().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Orange/Pear`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: AssignBananaSwToOrangeDtoToJSON(
          requestParameters["assignBananaSwToOrangeDto"]
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async assignPear(
    requestParameters: AssignPearRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.assignPearRaw(requestParameters, initOverrides);
  }

  /**
   */
  async assignStandortRaw(
    requestParameters: AssignStandortRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["assignStandortToOrangeDto"] == null) {
      throw new runtime.RequiredError(
        "assignStandortToOrangeDto",
        'Required parameter "assignStandortToOrangeDto" was null or undefined when calling assignStandort().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Orange/standort`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: AssignStandortToOrangeDtoToJSON(
          requestParameters["assignStandortToOrangeDto"]
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async assignStandort(
    requestParameters: AssignStandortRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.assignStandortRaw(requestParameters, initOverrides);
  }

  /**
   */
  async createOrangesRaw(
    requestParameters: CreateOrangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["createOrangeDto"] == null) {
      throw new runtime.RequiredError(
        "createOrangeDto",
        'Required parameter "createOrangeDto" was null or undefined when calling createOranges().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Orange`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters["createOrangeDto"]!.map(CreateOrangeDtoToJSON),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async createOranges(
    requestParameters: CreateOrangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.createOrangesRaw(requestParameters, initOverrides);
  }

  /**
   */
  async deleteOrangeRaw(
    requestParameters: DeleteOrangeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["Lychees"] == null) {
      throw new runtime.RequiredError(
        "Lychees",
        'Required parameter "Lychees" was null or undefined when calling deleteOrange().'
      );
    }

    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling deleteOrange().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Orange/{Lychees}/{id}`
          .replace(
            `{${"Lychees"}}`,
            encodeURIComponent(String(requestParameters["Lychees"]))
          )
          .replace(
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
  async deleteOrange(
    requestParameters: DeleteOrangeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteOrangeRaw(requestParameters, initOverrides);
  }

  /**
   */
  async exportOrangeRaw(
    requestParameters: ExportOrangeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Blob>> {
    if (requestParameters["Lychees"] == null) {
      throw new runtime.RequiredError(
        "Lychees",
        'Required parameter "Lychees" was null or undefined when calling exportOrange().'
      );
    }

    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling exportOrange().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Orange/{Lychees}/{id}/export`
          .replace(
            `{${"Lychees"}}`,
            encodeURIComponent(String(requestParameters["Lychees"]))
          )
          .replace(
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
  async exportOrange(
    requestParameters: ExportOrangeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Blob> {
    const response = await this.exportOrangeRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getAssignedBananaRaw(
    requestParameters: GetAssignedBananaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<AssignBananaDto>>> {
    const queryParameters: any = {};

    if (requestParameters["OrangeIds11"] != null) {
      queryParameters["OrangeIds11"] = requestParameters["OrangeIds11"];
    }

    if (requestParameters["OrangeIds29"] != null) {
      queryParameters["OrangeIds29"] = requestParameters["OrangeIds29"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Orange/assignedBanana`,
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
  async getAssignedBanana(
    requestParameters: GetAssignedBananaRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<AssignBananaDto>> {
    const response = await this.getAssignedBananaRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getAssignedPearRaw(
    requestParameters: GetAssignedPearRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<BananaSwToOrangeDto>>> {
    const queryParameters: any = {};

    if (requestParameters["OrangeIds11"] != null) {
      queryParameters["OrangeIds11"] = requestParameters["OrangeIds11"];
    }

    if (requestParameters["OrangeIds29"] != null) {
      queryParameters["OrangeIds29"] = requestParameters["OrangeIds29"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Orange/assignedPear`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(BananaSwToOrangeDtoFromJSON)
    );
  }

  /**
   */
  async getAssignedPear(
    requestParameters: GetAssignedPearRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<BananaSwToOrangeDto>> {
    const response = await this.getAssignedPearRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getAvailableParameters11Raw(
    requestParameters: GetAvailableParameters11Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<ParameterDto>>> {
    const queryParameters: any = {};

    if (requestParameters["AppleId"] != null) {
      queryParameters["AppleId"] = requestParameters["AppleId"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Orange/availableParameters11`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(ParameterDtoFromJSON)
    );
  }

  /**
   */
  async getAvailableParameters11(
    requestParameters: GetAvailableParameters11Request = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<ParameterDto>> {
    const response = await this.getAvailableParameters11Raw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getFreeIdsRaw(
    requestParameters: GetFreeIdsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<number>>> {
    if (requestParameters["Lychees"] == null) {
      throw new runtime.RequiredError(
        "Lychees",
        'Required parameter "Lychees" was null or undefined when calling getFreeIds().'
      );
    }

    if (requestParameters["start"] == null) {
      throw new runtime.RequiredError(
        "start",
        'Required parameter "start" was null or undefined when calling getFreeIds().'
      );
    }

    if (requestParameters["count"] == null) {
      throw new runtime.RequiredError(
        "count",
        'Required parameter "count" was null or undefined when calling getFreeIds().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Orange/freeIds/{Lychees}/{start}/{count}`
          .replace(
            `{${"Lychees"}}`,
            encodeURIComponent(String(requestParameters["Lychees"]))
          )
          .replace(
            `{${"start"}}`,
            encodeURIComponent(String(requestParameters["start"]))
          )
          .replace(
            `{${"count"}}`,
            encodeURIComponent(String(requestParameters["count"]))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   */
  async getFreeIds(
    requestParameters: GetFreeIdsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<number>> {
    const response = await this.getFreeIdsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async getOrangeLimesRaw(
    requestParameters: GetOrangeLimesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<OrangeLimeDto>>> {
    if (requestParameters["Lychees"] == null) {
      throw new runtime.RequiredError(
        "Lychees",
        'Required parameter "Lychees" was null or undefined when calling getOrangeLimes().'
      );
    }

    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling getOrangeLimes().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Orange/{Lychees}/{id}`
          .replace(
            `{${"Lychees"}}`,
            encodeURIComponent(String(requestParameters["Lychees"]))
          )
          .replace(
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
      jsonValue.map(OrangeLimeDtoFromJSON)
    );
  }

  /**
   */
  async getOrangeLimes(
    requestParameters: GetOrangeLimesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<OrangeLimeDto>> {
    const response = await this.getOrangeLimesRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async getOrangesRaw(
    requestParameters: GetOrangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<OrangeDtoGridResult>> {
    if (requestParameters["request"] == null) {
      throw new runtime.RequiredError(
        "request",
        'Required parameter "request" was null or undefined when calling getOranges().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["request"] != null) {
      queryParameters["request"] = requestParameters["request"];
    }

    if (requestParameters["Lychees"] != null) {
      queryParameters["Lychees"] = requestParameters["Lychees"];
    }

    if (requestParameters["LimeId11"] != null) {
      queryParameters["LimeId11"] = requestParameters["LimeId11"];
    }

    if (requestParameters["LimeId29"] != null) {
      queryParameters["LimeId29"] = requestParameters["LimeId29"];
    }

    if (requestParameters["LimeId29Kiwi"] != null) {
      queryParameters["LimeId29Kiwi"] = requestParameters["LimeId29Kiwi"];
    }

    if (requestParameters["standort"] != null) {
      queryParameters["standort"] = requestParameters["standort"];
    }

    if (requestParameters["Apple"] != null) {
      queryParameters["Apple"] = requestParameters["Apple"];
    }

    if (requestParameters["BananaSugar"] != null) {
      queryParameters["BananaSugar"] = requestParameters["BananaSugar"];
    }

    if (requestParameters["BananaAppleId"] != null) {
      queryParameters["BananaAppleId"] = requestParameters["BananaAppleId"];
    }

    if (requestParameters["displayNoPear"] != null) {
      queryParameters["displayNoPear"] = requestParameters["displayNoPear"];
    }

    if (requestParameters["displayNoBanana"] != null) {
      queryParameters["displayNoBanana"] = requestParameters["displayNoBanana"];
    }

    if (requestParameters["textFilter"] != null) {
      queryParameters["textFilter"] = requestParameters["textFilter"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Orange`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      OrangeDtoGridResultFromJSON(jsonValue)
    );
  }

  /**
   */
  async getOranges(
    requestParameters: GetOrangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<OrangeDtoGridResult> {
    const response = await this.getOrangesRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async getParametersRaw(
    requestParameters: GetParametersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<ParameterDto>>> {
    if (requestParameters["Lychees"] == null) {
      throw new runtime.RequiredError(
        "Lychees",
        'Required parameter "Lychees" was null or undefined when calling getParameters().'
      );
    }

    if (requestParameters["OrangeId"] == null) {
      throw new runtime.RequiredError(
        "OrangeId",
        'Required parameter "OrangeId" was null or undefined when calling getParameters().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/Orange/{Lychees}/{OrangeId}/parameters`
          .replace(
            `{${"Lychees"}}`,
            encodeURIComponent(String(requestParameters["Lychees"]))
          )
          .replace(
            `{${"OrangeId"}}`,
            encodeURIComponent(String(requestParameters["OrangeId"]))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(ParameterDtoFromJSON)
    );
  }

  /**
   */
  async getParameters(
    requestParameters: GetParametersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<ParameterDto>> {
    const response = await this.getParametersRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async releaseOrangesRaw(
    requestParameters: ReleaseOrangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["releaseOrangesDto"] == null) {
      throw new runtime.RequiredError(
        "releaseOrangesDto",
        'Required parameter "releaseOrangesDto" was null or undefined when calling releaseOranges().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Orange/release`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: ReleaseOrangesDtoToJSON(requestParameters["releaseOrangesDto"]),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async releaseOranges(
    requestParameters: ReleaseOrangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.releaseOrangesRaw(requestParameters, initOverrides);
  }

  /**
   */
  async removeAppleRaw(
    requestParameters: RemoveAppleRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["removeAppleFromOrangeDto"] == null) {
      throw new runtime.RequiredError(
        "removeAppleFromOrangeDto",
        'Required parameter "removeAppleFromOrangeDto" was null or undefined when calling removeApple().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Orange/removeApple`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: RemoveAppleFromOrangeDtoToJSON(
          requestParameters["removeAppleFromOrangeDto"]
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async removeApple(
    requestParameters: RemoveAppleRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.removeAppleRaw(requestParameters, initOverrides);
  }

  /**
   */
  async updateOrangeRaw(
    requestParameters: UpdateOrangeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Orange`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: UpdateOrangeDtoToJSON(requestParameters["updateOrangeDto"]),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async updateOrange(
    requestParameters: UpdateOrangeRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.updateOrangeRaw(requestParameters, initOverrides);
  }

  /**
   */
  async updateOrangeLimesRaw(
    requestParameters: UpdateOrangeLimesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["Lychees"] == null) {
      throw new runtime.RequiredError(
        "Lychees",
        'Required parameter "Lychees" was null or undefined when calling updateOrangeLimes().'
      );
    }

    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling updateOrangeLimes().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/api/Orange/{Lychees}/{id}`
          .replace(
            `{${"Lychees"}}`,
            encodeURIComponent(String(requestParameters["Lychees"]))
          )
          .replace(
            `{${"id"}}`,
            encodeURIComponent(String(requestParameters["id"]))
          ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: UpdateOrangeLimesDtoToJSON(
          requestParameters["updateOrangeLimesDto"]
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async updateOrangeLimes(
    requestParameters: UpdateOrangeLimesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.updateOrangeLimesRaw(requestParameters, initOverrides);
  }
}