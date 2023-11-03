import {
  configureStore,
  createSerializableStateInvariantMiddleware,
} from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";

const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
});

export const store = configureStore({
  reducer: {
    authUser: userReducer,
  },
  middleware: [serializableMiddleware],
});
