import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

function getPosition() {
  return new Promise(function (resolve, reject) {
    return navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const positionObj = await getPosition();
    const position = {
      longitude: positionObj.coords.longitude,
      latitude: positionObj.coords.latitude,
    };
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
    return { position, address };
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers(builder) {
    const { fulfilled, pending, rejected } = fetchAddress;
    builder
      .addCase(pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.position = payload.position;
        state.address = payload.address;
        state.error = "";
      })
      .addCase(rejected, (state, { error }) => {
        state.status = "error";
        state.error =
          "There was a problem getting your address. Make sure to fill this field!";
      });
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
