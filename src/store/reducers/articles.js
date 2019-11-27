import {
    FETCH_ARTICLES,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILED
} from '../actions/names';

const articles = (state = [], action) => {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                loading: true,
                error: false
            }
        case FETCH_ARTICLES_SUCCESS:
            var posts = action.data
            var articlWithCleanComments = posts.map(function (item) {

                var attach_children_to_item = function (item, data) {
                    item.children = data.filter(x => x.parent_id == item.id)
                        .map(x => attach_children_to_item(x, data));
                    return item;
                };
                var tree = item.comments.filter(x => x.depth == 0)
                    .map(x => attach_children_to_item(x, item.comments));

                item.finalComments = tree
                return item
            })
            return {
                ...state,
                articles: articlWithCleanComments,
                loading: false,
                error: false
            }
        case FETCH_ARTICLES_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default articles;
