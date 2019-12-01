import {
    FETCH_ARTICLES,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILED, DELETE_COMMENT
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
        case DELETE_COMMENT:
            var posts = state.articles
            var dataIds = action.payload
            var existComment;

            // Find the relevant article

            let findPost = posts.filter(post => post.id === dataIds.articleId).shift()

            var find_children_to_cm = function (data) {
                data.children = data.children
                    .filter(function(child){ return child.id !== dataIds.id})
                    .map(function(child){ return find_children_to_cm(child)});
                return data;
            };

            // Find the comment Id and delete it


            var item = findPost.finalComments.filter(x => x.id == dataIds.id).length > 0
            if(item) {
                existComment = findPost.finalComments.filter(x => !(x.id == dataIds.id))
            }else{

                existComment = findPost.finalComments.map(x => find_children_to_cm(x))
            }
            findPost.finalComments = existComment

            // calculate count
            let originalCommentArr = findPost.comments.filter(x => !(x.id == dataIds.id))
            findPost.comments = originalCommentArr;
            let finalPosts = posts.map(item => {
               return item.id == findPost.id ? findPost : item

            })
            return {
                ...state,
                articles: finalPosts,
            }
        default:
            return state
    }
}

export default articles;
