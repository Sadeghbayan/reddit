import {DELETE_COMMENT} from "./names";

export function deleteCommentRequest(id, articleId) {
    let listOfinfo = {}
    listOfinfo.id = id
    listOfinfo.articleId = articleId
    return {
        type: DELETE_COMMENT,
        payload: listOfinfo
    }
}