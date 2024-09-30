import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${ENDPOINT}/auth/register`,
        { username, password },
        config
      );

      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState: { loading: false, userInfo: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.userInfo = null;
        state.error = action.payload;
      });
  },
});

export const userRegisterReducer = userRegisterSlice.reducer;

export const login = createAsyncThunk(
  "users/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${ENDPOINT}/auth/login`, {
        username,
        password,
      });
      localStorage.setItem("access_token", data.access_token);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: { loading: false, userInfo: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.userInfo = null;
        state.error = action.payload;
        console.log("state.error", state.error);
      });
  },
});

export const userLoginReducer = userLoginSlice.reducer;

export const logout = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${ENDPOINT}/auth/logout/`, {}, config);
      localStorage.removeItem("userInfo");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

const userLogoutSlice = createSlice({
  name: "userLogout",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const userLogoutReducer = userLogoutSlice.reducer;

export const deactivateUserAccount = createAsyncThunk(
  "users/deactivateUserAccount",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/deactivate/");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const userAccountDeactivateSlice = createSlice({
  name: "userAccountDeactivate",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deactivateUserAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(deactivateUserAccount.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(deactivateUserAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const userAccountDeactivateReducer = userAccountDeactivateSlice.reducer;

export const deleteUserAccount = createAsyncThunk(
  "users/deleteUserAccount",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/delete/");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const userAccountDeleteSlice = createSlice({
  name: "userAccountDelete",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserAccount.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(deleteUserAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const userAccountDeleteReducer = userAccountDeleteSlice.reducer;

export const changePassword = createAsyncThunk(
  "users/changePassword",
  async ({ current_password, new_password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/change/password/", {
        current_password,
        new_password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const changePasswordReducer = changePasswordSlice.reducer;

export const changeEmail = createAsyncThunk(
  "users/changeEmail",
  async ({ current_password, new_email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/change/email/", {
        current_password,
        new_email,
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const changeEmailSlice = createSlice({
  name: "changeEmail",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeEmail.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(changeEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const changeEmailReducer = changeEmailSlice.reducer;

export const generatePasswordResetToken = createAsyncThunk(
  "users/generatePasswordResetToken",
  async ({ email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/password_reset/generate/", {
        email,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const generatePasswordResetTokenSlice = createSlice({
  name: "generatePasswordResetToken",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generatePasswordResetToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(generatePasswordResetToken.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(generatePasswordResetToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const generatePasswordResetTokenReducer =
  generatePasswordResetTokenSlice.reducer;

export const retrieveUserForPasswordReset = createAsyncThunk(
  "users/retrieveUserForPasswordReset",
  async ({ email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "/users/password_reset/retrieve_user/",
        { email }
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const retrieveUserForPasswordResetSlice = createSlice({
  name: "retrieveUserForPasswordReset",
  initialState: { loading: false, user: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveUserForPasswordReset.pending, (state) => {
        state.loading = true;
      })
      .addCase(retrieveUserForPasswordReset.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(retrieveUserForPasswordReset.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const retrieveUserForPasswordResetReducer =
  retrieveUserForPasswordResetSlice.reducer;

export const resetPassword = createAsyncThunk(
  "users/resetPassword",
  async ({ userId, new_password, confirm_password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/users/password_reset/reset/${userId}/`,
        { new_password, confirm_password }
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const resetPasswordReducer = resetPasswordSlice.reducer;

export const activateUserAccount = createAsyncThunk(
  "users/activateUserAccount",
  async ({ activation }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/activate/", { activation });

      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const userAccountActivationSlice = createSlice({
  name: "userAccountActivation",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(activateUserAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(activateUserAccount.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(activateUserAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const userAccountActivationReducer = userAccountActivationSlice.reducer;

export const getUserById = createAsyncThunk(
  "users/getUserById",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/users/${userId}/`);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: { loading: false, user: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const userDetailReducer = userDetailSlice.reducer;

export const getUserProfile = createAsyncThunk(
  "users/getUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${ENDPOINT}/auth/profile`, config);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: { loading: false, user: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const userProfileReducer = userProfileSlice.reducer;

export const updateAccountDetail = createAsyncThunk(
  "users/updateAccountDetail",
  async ({ detail }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        "/users/update/account_details/",
        detail
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const accountDetailSlice = createSlice({
  name: "accountDetail",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateAccountDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAccountDetail.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(updateAccountDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const accountDetailReducer = accountDetailSlice.reducer;

export const updateSetting = createAsyncThunk(
  "users/updateSetting",
  async ({ setting }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put("/users/update/user_settings/", setting);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      );
    }
  }
);

const userSettingSlice = createSlice({
  name: "userSetting",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateSetting.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSetting.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(updateSetting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const userSettingReducer = userSettingSlice.reducer;
