import { connect } from 'react-redux';
import MainComponent from '../Main'
import { fetchArticlesRequest } from '../../../store/actions/articles'
import { deleteCommentRequest } from '../../../store/actions/comments'
import { loadMoreRequest } from '../../../store/actions/loadMore'
import { sortRequest } from '../../../store/actions/sort'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles:() => dispatch(fetchArticlesRequest()),
        deleteCommentRequest:(id, articleId) => dispatch(deleteCommentRequest(id, articleId)),
        loadMoreRequest:() => dispatch(loadMoreRequest()),
        sortRequest:() => dispatch(sortRequest())
    }
}
const mapStateToProps = (state) => {

    return {
        articles : state.articles,

    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainComponent)
export default MainContainer;
