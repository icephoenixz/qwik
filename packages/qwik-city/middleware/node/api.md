## API Report File for "@builder.io/qwik-city"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { IncomingMessage } from 'http';
import type { Render } from '@builder.io/qwik/server';
import type { RenderOptions } from '@builder.io/qwik/server';
import type { ServerResponse } from 'http';

// @alpha (undocumented)
export interface NodeReqestNextFunction {
    // (undocumented)
    (err?: any): void;
}

// @alpha (undocumented)
export function qwikCity(render: Render, opts?: QwikCityNodeRequestOptions): {
    router: (req: IncomingMessage, res: ServerResponse, next: NodeReqestNextFunction) => Promise<void>;
    notFound: (req: IncomingMessage, res: ServerResponse, next: (e: any) => void) => Promise<void>;
};

// Warning: (ae-forgotten-export) The symbol "QwikCityRequestOptions" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export interface QwikCityNodeRequestOptions extends QwikCityRequestOptions {
}

// (No @packageDocumentation comment for this package)

```