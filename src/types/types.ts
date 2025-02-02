export interface CameraType {
    id: number;
    type: string;
    price: number;
    description: string;
  }
  
  export interface StorageOption {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export interface CameraConfig {
    id: number;
    type: CameraType;
    storage?: StorageOption;
  }
  
  export interface QuoteData {
    selectedCameras: CameraConfig[];
    total: number;
    storagePrice: number;
  }