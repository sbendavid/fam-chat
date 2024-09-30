import { configureStore } from "@reduxjs/toolkit";
import {
  userRegisterReducer,
  userLoginReducer,
  //   userLogoutReducer,
  //   userAccountDeactivateReducer,
  //   userAccountDeleteReducer,
  //   changePasswordReducer,
  //   changeEmailReducer,
  //   userAccountActivationReducer,
  //   userDetailReducer,
  //   accountDetailReducer,
  //   userSettingReducer,
  //   generatePasswordResetTokenReducer,
  //   retrieveUserForPasswordResetReducer,
  //   resetPasswordReducer,
} from "./reducers/userReducers";

const reducer = {
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  //   userLogout: userLogoutReducer,
  //   userAccountDeactivate: userAccountDeactivateReducer,
  //   userAccountDelete: userAccountDeleteReducer,
  //   changePassword: changePasswordReducer,
  //   changeEmail: changeEmailReducer,
  //   userAccountActivation:  userAccountActivationReducer,
  //   userDetail: userDetailReducer,
  //   accountDetail: accountDetailReducer,
  //   userSetting: userSettingReducer,
  //   generatePasswordResetToken: generatePasswordResetTokenReducer,
  //   retrieveUserForPasswordReset: retrieveUserForPasswordResetReducer,
  //   resetPassword: resetPasswordReducer,
};

const store = configureStore({
  reducer,
});

export default store;
