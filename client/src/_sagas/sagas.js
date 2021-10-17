import { all, takeLatest } from 'redux-saga/effects';
import { GET_VEDIOS } from '../_reducers/videoSlice';
import { handleGetVideos } from './handler/videoHandler';

//watcher saga
export function* rootSaga(){
    yield all([
        watcherSaga()
    ]);
}

export function* watcherSaga(){
    yield takeLatest(GET_VEDIOS, handleGetVideos);
}