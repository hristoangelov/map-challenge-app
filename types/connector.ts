export enum ConnectorType {
  J1772 = "J1772",
  Type2 = "Type2",
  CCS2 = "CCS 2",
  Type3 = "Type 3",
}

export enum ConnectorStatus {
  Available = "available",
  Unavailable = "unavailable",
}

export interface Connector {
  type: ConnectorType;
  status: ConnectorStatus;
}
