import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'
import { API } from '../../Helpers/Apis'
import {
    FETCH_ARTICLES,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILED
} from '../actions/names'

const fetchArticlesRequest = async() => {
    try {
        const response = await axios.get("https://cors-anywhere.herokuapp.com/" + API);
        return response
    } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
    }
}


function* fetchArticles() {
    try {
        const requestResponse = yield call(fetchArticlesRequest);
        if (requestResponse.error != null) {
            yield put({type: FETCH_ARTICLES_FAILED, message: requestResponse.error});
        } else {
            yield put({type: FETCH_ARTICLES_SUCCESS, data: requestResponse.data});
        }
    } catch (e) {
        yield put({type: FETCH_ARTICLES_FAILED, message: e.message});
    }
}

export default function* articlesSaga() {
    yield takeLatest(FETCH_ARTICLES, fetchArticles);
}

