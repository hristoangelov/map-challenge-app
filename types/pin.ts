import { Connector } from "./connector";

export interface Pin {
  title: string;
  latitude: string;
  longitude: string;
  connectors: Connector[];
}
