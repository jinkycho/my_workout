import { call, put } from '@redux-saga/core/effects';
import { requestGetVideos } from '../request/videoRequest';
import { setVideos } from '../../_reducers/videoSlice';

export function* handleGetVideos(item){
    try{
        const response = yield call(requestGetVideos, item.keyword);
        const { data } = response;
        yield put(setVideos(data.items));
    }catch(error){
        console.log(error);
    }
}
