import { connect } from 'react-redux';
import MainComponent from '../Main'
import { fetchArticlesRequest } from '../../../store/actions/articles'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles:() => dispatch(fetchArticlesRequest())
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
