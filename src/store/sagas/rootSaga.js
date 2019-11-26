import { all } from 'redux-saga/effects';
import articlesSaga from './articles'

export default function* rootSaga() {
    yield all([
        articlesSaga(),
    ]);
}
