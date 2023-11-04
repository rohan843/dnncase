import { createSlice } from "@reduxjs/toolkit";
import { logSeverities } from "../../constants";

const logsTerminalSlice = createSlice({
  name: "logsTerminal",
  initialState: {
    filterString: "",
    logs: [
      {
        timestamp: "[17/09/2023 20:15]",
        logString: "A warning message from a source.\na   b  c\n12  1  2",
        logSource: "MessageSource",
        logSeverity: logSeverities.warning,
        id: "owuietyb8vweyt8w",
      },
      {
        timestamp: "[17/09/2023 20:14]",
        logString: "An info message from a source.\na   b  c\n12  1  2",
        logSource: "MessageSource",
        logSeverity: logSeverities.info,
        id: "iutyv7837ut938",
      },
      {
        timestamp: "[17/09/2023 20:13]",
        logString: "An error message from a source.\na   b  c\n12  1  2",
        logSource: "MessageSource",
        logSeverity: logSeverities.error,
        id: "iuc8t7389cyb382tyc83o",
      },
      {
        timestamp: "[17/09/2023 20:12]",
        logString: "Another error message from a source.\na   b  c\n12  1  2",
        logSource: "MessageSource",
        logSeverity: logSeverities.error,
        id: "hfb9h903qvwr8ue0ty83",
      },
    ],
  },
  reducers: {
    setLogsFilterString(state, action) {
      state.filterString = action.payload;
    },
  },
});

export const { setLogsFilterString } = logsTerminalSlice.actions;
export const logsTerminalReducer = logsTerminalSlice.reducer;
