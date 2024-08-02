import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  getDataSuccess,
  addDataSuccess,
  getAddData,
  getDeleteData,
  getDeleteSuccess,
  getEditData,
  getEditSuccess

} from "./Counter/dataSlice";

function* fetchUserData() {
  try {
    const res = yield call(axios.get, "http://localhost:3039/users");
    yield put(getDataSuccess(res.data));
  } catch (error) {
    console.error("Error fetching data:", error);
    yield put(getDataFailure());
  }
}
function* addData(action) {
  try {
    const res = yield call(axios.post, "http://localhost:3039/users", {
      id: action.payload.id,
      name: action.payload.name,
    });
    yield put(addDataSuccess(res.data));
  } catch (error) {
    console.error("Error adding data:", error);
  }
}

function* DeleteData(action){
  console.log(action);
    const res = yield call(axios.delete, `http://localhost:3039/users/${action.payload}`,{
     
    id:action.payload.id,
    name:action.payload.name
  })

 yield put(getDeleteSuccess(res.data))
}

function* EditData(action){
  console.log(action)
    try {
    const res = yield call(axios.patch, `http://localhost:3039/users/${action.payload.id}`, {
      id:action.payload,
      name:action.payload.name
    });
    yield put(getEditSuccess(res.data));
  } catch (error) {
    console.error("Error adding data:", error);
  }

}


function* getUserData() { 
  yield takeEvery("Data/getFetchData", fetchUserData);
  yield takeEvery(getAddData.type, addData);
  yield takeEvery(getDeleteData.type,DeleteData)
    yield takeEvery(getEditData.type,EditData)
}

export default getUserData;
