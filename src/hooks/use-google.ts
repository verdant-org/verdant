import { useEffect, useState } from 'react';

export type GoogleMapsLibraryName =
  | 'core'
  | 'maps'
  | 'places'
  | 'geocoding'
  | 'routes'
  | 'marker'
  | 'geometry'
  | 'elevation'
  | 'streetView'
  | 'journeySharing'
  | 'drawing'
  | 'visualization'
  | 'airQuality';

export interface GoogleMapsLibraryTypeMap {
  core: google.maps.CoreLibrary;
  maps: google.maps.MapsLibrary;
  places: google.maps.PlacesLibrary;
  geocoding: google.maps.GeocodingLibrary;
  routes: google.maps.RoutesLibrary;
  marker: google.maps.MarkerLibrary;
  geometry: google.maps.GeometryLibrary;
  elevation: google.maps.ElevationLibrary;
  streetView: google.maps.StreetViewLibrary;
  journeySharing: google.maps.JourneySharingLibrary;
  drawing: google.maps.DrawingLibrary;
  visualization: google.maps.VisualizationLibrary;
}

export default function useGoogleLibrary<T extends keyof GoogleMapsLibraryTypeMap>(
    lib: T
  ): GoogleMapsLibraryTypeMap[T] | null {
    const [library, setLibrary] = useState<GoogleMapsLibraryTypeMap[T] | null>(null);
  
    useEffect(() => {
      const loadLibrary = async () => {
        const imported = await google.maps.importLibrary(lib);
        setLibrary(imported as GoogleMapsLibraryTypeMap[T]);
      };
      loadLibrary();
    }, [lib]);
  
    return library;
}
  