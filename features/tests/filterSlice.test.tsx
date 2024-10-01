import filterReducer, {
  setConnectorTypes,
  setConnectorStatuses,
} from "../filterSlice";

describe("filterSlice", () => {
  const initialState = {
    connectorTypes: [],
    connectorStatuses: [],
  };

  it("should return the initial state when passed an undefined action", () => {
    expect(filterReducer(undefined, { type: "InitialState" })).toEqual(
      initialState
    );
  });

  it("should handle setConnectorTypes", () => {
    const newConnectorTypes = ["Type1", "Type2"];
    const action = setConnectorTypes(newConnectorTypes);
    const expectedState = {
      ...initialState,
      connectorTypes: newConnectorTypes,
    };

    expect(filterReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle setConnectorStatuses", () => {
    const newConnectorStatuses = ["Available", "Unavailable"];
    const action = setConnectorStatuses(newConnectorStatuses);
    const expectedState = {
      ...initialState,
      connectorStatuses: newConnectorStatuses,
    };

    expect(filterReducer(initialState, action)).toEqual(expectedState);
  });
});
