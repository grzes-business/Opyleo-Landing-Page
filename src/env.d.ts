/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly API_URL: string;
    readonly API_MAX_PAGE: number;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}