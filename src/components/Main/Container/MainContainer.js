import { connect } from 'react-redux';
import MainComponent from '../Main'
import { fetchArticlesRequest } from '../../../store/actions/articles'
import { deleteCommentRequest } from '../../../store/actions/comments'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles:() => dispatch(fetchArticlesRequest()),
        deleteCommentRequest:(id, articleId) => dispatch(deleteCommentRequest(id, articleId))
    }
}
const mapStateToProps = (state) => {

    if(!state.articles.loading){
        console.log(state.articles.loading,state.articles.articles, "here")
    }
    return {
        articles : state.articles,

    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainComponent)
export default MainContainer;
