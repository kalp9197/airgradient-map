
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'Footer': typeof import("../components/Footer.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'DialogsLocationHistoryDialog': typeof import("../components/dialogs/LocationHistoryDialog.vue")['default']
    'Map': typeof import("../components/map/Map.vue")['default']
    'UiButton': typeof import("../components/ui/Button.vue")['default']
    'UiDialog': typeof import("../components/ui/Dialog.vue")['default']
    'UiDropdownControl': typeof import("../components/ui/DropdownControl.vue")['default']
    'UiHTMLSafelabel': typeof import("../components/ui/HTMLSafelabel.vue")['default']
    'UiIconButton': typeof import("../components/ui/IconButton.vue")['default']
    'UiProgressBar': typeof import("../components/ui/ProgressBar.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LCircle': typeof import("@vue-leaflet/vue-leaflet")['LCircle']
    'LCircleMarker': typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']
    'LControl': typeof import("@vue-leaflet/vue-leaflet")['LControl']
    'LControlAttribution': typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']
    'LControlLayers': typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']
    'LControlScale': typeof import("@vue-leaflet/vue-leaflet")['LControlScale']
    'LControlZoom': typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']
    'LFeatureGroup': typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']
    'LGeoJson': typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']
    'LIcon': typeof import("@vue-leaflet/vue-leaflet")['LIcon']
    'LImageOverlay': typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']
    'LLayerGroup': typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']
    'LMap': typeof import("@vue-leaflet/vue-leaflet")['LMap']
    'LMarker': typeof import("@vue-leaflet/vue-leaflet")['LMarker']
    'LPolygon': typeof import("@vue-leaflet/vue-leaflet")['LPolygon']
    'LPolyline': typeof import("@vue-leaflet/vue-leaflet")['LPolyline']
    'LPopup': typeof import("@vue-leaflet/vue-leaflet")['LPopup']
    'LRectangle': typeof import("@vue-leaflet/vue-leaflet")['LRectangle']
    'LTileLayer': typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']
    'LTooltip': typeof import("@vue-leaflet/vue-leaflet")['LTooltip']
    'LWmsTileLayer': typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../components/Header.vue")['default']>
    'LazyDialogsLocationHistoryDialog': LazyComponent<typeof import("../components/dialogs/LocationHistoryDialog.vue")['default']>
    'LazyMap': LazyComponent<typeof import("../components/map/Map.vue")['default']>
    'LazyUiButton': LazyComponent<typeof import("../components/ui/Button.vue")['default']>
    'LazyUiDialog': LazyComponent<typeof import("../components/ui/Dialog.vue")['default']>
    'LazyUiDropdownControl': LazyComponent<typeof import("../components/ui/DropdownControl.vue")['default']>
    'LazyUiHTMLSafelabel': LazyComponent<typeof import("../components/ui/HTMLSafelabel.vue")['default']>
    'LazyUiIconButton': LazyComponent<typeof import("../components/ui/IconButton.vue")['default']>
    'LazyUiProgressBar': LazyComponent<typeof import("../components/ui/ProgressBar.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyLCircle': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircle']>
    'LazyLCircleMarker': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']>
    'LazyLControl': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControl']>
    'LazyLControlAttribution': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']>
    'LazyLControlLayers': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']>
    'LazyLControlScale': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlScale']>
    'LazyLControlZoom': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']>
    'LazyLFeatureGroup': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']>
    'LazyLGeoJson': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']>
    'LazyLIcon': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LIcon']>
    'LazyLImageOverlay': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']>
    'LazyLLayerGroup': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']>
    'LazyLMap': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMap']>
    'LazyLMarker': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMarker']>
    'LazyLPolygon': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolygon']>
    'LazyLPolyline': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolyline']>
    'LazyLPopup': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPopup']>
    'LazyLRectangle': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LRectangle']>
    'LazyLTileLayer': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']>
    'LazyLTooltip': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTooltip']>
    'LazyLWmsTileLayer': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Footer: typeof import("../components/Footer.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const DialogsLocationHistoryDialog: typeof import("../components/dialogs/LocationHistoryDialog.vue")['default']
export const Map: typeof import("../components/map/Map.vue")['default']
export const UiButton: typeof import("../components/ui/Button.vue")['default']
export const UiDialog: typeof import("../components/ui/Dialog.vue")['default']
export const UiDropdownControl: typeof import("../components/ui/DropdownControl.vue")['default']
export const UiHTMLSafelabel: typeof import("../components/ui/HTMLSafelabel.vue")['default']
export const UiIconButton: typeof import("../components/ui/IconButton.vue")['default']
export const UiProgressBar: typeof import("../components/ui/ProgressBar.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LCircle: typeof import("@vue-leaflet/vue-leaflet")['LCircle']
export const LCircleMarker: typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']
export const LControl: typeof import("@vue-leaflet/vue-leaflet")['LControl']
export const LControlAttribution: typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']
export const LControlLayers: typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']
export const LControlScale: typeof import("@vue-leaflet/vue-leaflet")['LControlScale']
export const LControlZoom: typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']
export const LFeatureGroup: typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']
export const LGeoJson: typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']
export const LIcon: typeof import("@vue-leaflet/vue-leaflet")['LIcon']
export const LImageOverlay: typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']
export const LLayerGroup: typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']
export const LMap: typeof import("@vue-leaflet/vue-leaflet")['LMap']
export const LMarker: typeof import("@vue-leaflet/vue-leaflet")['LMarker']
export const LPolygon: typeof import("@vue-leaflet/vue-leaflet")['LPolygon']
export const LPolyline: typeof import("@vue-leaflet/vue-leaflet")['LPolyline']
export const LPopup: typeof import("@vue-leaflet/vue-leaflet")['LPopup']
export const LRectangle: typeof import("@vue-leaflet/vue-leaflet")['LRectangle']
export const LTileLayer: typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']
export const LTooltip: typeof import("@vue-leaflet/vue-leaflet")['LTooltip']
export const LWmsTileLayer: typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyDialogsLocationHistoryDialog: LazyComponent<typeof import("../components/dialogs/LocationHistoryDialog.vue")['default']>
export const LazyMap: LazyComponent<typeof import("../components/map/Map.vue")['default']>
export const LazyUiButton: LazyComponent<typeof import("../components/ui/Button.vue")['default']>
export const LazyUiDialog: LazyComponent<typeof import("../components/ui/Dialog.vue")['default']>
export const LazyUiDropdownControl: LazyComponent<typeof import("../components/ui/DropdownControl.vue")['default']>
export const LazyUiHTMLSafelabel: LazyComponent<typeof import("../components/ui/HTMLSafelabel.vue")['default']>
export const LazyUiIconButton: LazyComponent<typeof import("../components/ui/IconButton.vue")['default']>
export const LazyUiProgressBar: LazyComponent<typeof import("../components/ui/ProgressBar.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyLCircle: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircle']>
export const LazyLCircleMarker: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']>
export const LazyLControl: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControl']>
export const LazyLControlAttribution: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']>
export const LazyLControlLayers: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']>
export const LazyLControlScale: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlScale']>
export const LazyLControlZoom: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']>
export const LazyLFeatureGroup: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']>
export const LazyLGeoJson: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']>
export const LazyLIcon: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LIcon']>
export const LazyLImageOverlay: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']>
export const LazyLLayerGroup: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']>
export const LazyLMap: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMap']>
export const LazyLMarker: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMarker']>
export const LazyLPolygon: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolygon']>
export const LazyLPolyline: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolyline']>
export const LazyLPopup: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPopup']>
export const LazyLRectangle: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LRectangle']>
export const LazyLTileLayer: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']>
export const LazyLTooltip: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTooltip']>
export const LazyLWmsTileLayer: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
