/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />

interface ImportMetaEnv {
    readonly VITE_FOURSQUARE_CLIENT_ID: string
    readonly VITE_FOURSQUARE_CLIENT_SECRET: string
    readonly VITE_FOURSQUARE_API_ENDPOINT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}