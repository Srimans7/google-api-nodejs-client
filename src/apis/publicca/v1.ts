// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace publicca_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Public Certificate Authority API
   *
   * The Public Certificate Authority API may be used to create and manage ACME external account binding keys associated with Google Trust Services&#39; publicly trusted certificate authority.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const publicca = google.publicca('v1');
   * ```
   */
  export class Publicca {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * A representation of an ExternalAccountKey used for [external account binding](https://tools.ietf.org/html/rfc8555#section-7.3.4) within ACME.
   */
  export interface Schema$ExternalAccountKey {
    /**
     * Output only. Base64-URL-encoded HS256 key. It is generated by the PublicCertificateAuthorityService when the ExternalAccountKey is created
     */
    b64MacKey?: string | null;
    /**
     * Output only. Key ID. It is generated by the PublicCertificateAuthorityService when the ExternalAccountKey is created
     */
    keyId?: string | null;
    /**
     * Output only. Resource name. projects/{project\}/locations/{location\}/externalAccountKeys/{key_id\}
     */
    name?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    externalAccountKeys: Resource$Projects$Locations$Externalaccountkeys;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.externalAccountKeys =
        new Resource$Projects$Locations$Externalaccountkeys(this.context);
    }
  }

  export class Resource$Projects$Locations$Externalaccountkeys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new ExternalAccountKey bound to the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Externalaccountkeys$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Externalaccountkeys$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ExternalAccountKey>;
    create(
      params: Params$Resource$Projects$Locations$Externalaccountkeys$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Externalaccountkeys$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ExternalAccountKey>,
      callback: BodyResponseCallback<Schema$ExternalAccountKey>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Externalaccountkeys$Create,
      callback: BodyResponseCallback<Schema$ExternalAccountKey>
    ): void;
    create(callback: BodyResponseCallback<Schema$ExternalAccountKey>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Externalaccountkeys$Create
        | BodyResponseCallback<Schema$ExternalAccountKey>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExternalAccountKey>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExternalAccountKey>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ExternalAccountKey>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Externalaccountkeys$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Externalaccountkeys$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://publicca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/externalAccountKeys').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExternalAccountKey>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExternalAccountKey>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Externalaccountkeys$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this external_account_key will be created. Format: projects/[project_id]/locations/[location]. At present only the "global" location is supported.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExternalAccountKey;
  }
}
