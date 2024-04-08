/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />

interface ImportMetaEnv {
    readonly VITE_FOURSQUARE_CLIENT_ID: string
    readonly VITE_FOURSQUARE_CLIENT_SECRET: string
    readonly VITE_FOURSQUARE_API_ENDPOINT: string
    readonly FOURSQUARE_OATH_ENDPOINT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare global {
    namespace Vike {
      interface PageContext {
        // Type of pageContext.user
        data: {
            title: string
            description: string
        },
        config: {
            title: string
            description: string
        }
        // Refine type of pageContext.Page (it's `unknown` by default)
        Page: () => JSX.Element
      }
    }
}

export {};