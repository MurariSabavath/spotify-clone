export interface IAlbum {
  album_type: string;
  artists: {}[];
  available_markets: [];
  external_urls: {};
  href: string;
  id: string;
  images: { height: string; url: string; width: string }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface ITrack {
  album: IAlbum;
  artists: [];
  available_markets: [];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: {};
  external_urls: {};
  href: string;
  id: string;
  is_local: false;
  name: string;
  popularity: number;
  preview_url: null | string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
}

export interface ITracksList {
  added_at: string;
  added_by: {};
  is_local: boolean;
  primary_color: string | null;
  track: ITrack;
  video_thumbnail: {};
}
