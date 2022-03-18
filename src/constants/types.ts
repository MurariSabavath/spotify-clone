export interface User {
  country: string;
  display_name: string;
  email: string;
  explicit_content: { filter_enabled: boolean; filter_locked: boolean };
  external_urls: {};
  followers: {};
  href: string;
  id: string;
  images: Images;
  product: string;
  type: string;
  uri: string;
}

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

export interface IArtist {
  href: string;
  id: string;
  name: string;
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

export interface ICurrentlyPlaying {
  track: ITrack;
  played_at: string;
  context: null | {};
}

export interface IPlaylistTracks {
  href: string;
  items: ITracksList[];
  limit: number;
  next: string;
  offset: number;
  previous: null | string;
  total: number;
}

export interface Images {
  height: number;
  url: string;
}

export interface IOwner {
  display_name: string;
  external_links: {};
  id: string;
  href: string;
  type: string;
  uri: string;
}

export interface IPlaylistItem {
  collaborative: false;
  description: string;
  external_urls: {};
  href: string;
  id: string;
  images: Images[];
  name: string;
  owner: IOwner;
  primary_color: null | string;
  public: boolean;
  snapshot_id: string;
  tracks: {};
  type: string;
  uri: string;
}

export interface IPlaylists {
  href: string;
  items: IPlaylistItem[];
  limit: string;
  next: null | string;
  offset: number;
  previous: null | string;
  total: number;
}
