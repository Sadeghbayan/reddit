import React, {Component} from 'react';
import Header from "../Header/Header";
import Article from "../Article/Article"
import styles from "./Main.module.scss"
import {Spin, Icon, Button, Tooltip} from "antd";


const text = "Sort By Comments date"

class Main extends Component {
    state = { loading: false };


    componentDidMount() {
        this.props.fetchArticles()
    }

    deleteComment = (id, articleId) => {
        this.setState({ loading: true });
        this.props.deleteCommentRequest(id, articleId)
        setTimeout( () => this.setState({loading:false}), 1000)
    }

    fetchMoreArticles = () => {
        this.setState({ loading: true });
        this.props.loadMoreRequest();
        setTimeout( () => this.setState({loading:false}), 1000)
    }

    sortArticles = () => {
        this.setState({ loading: true });
        this.props.sortRequest();
        setTimeout( () => this.setState({loading:false}), 1000)
    }

    render() {
        return (
            <div className="reddit--wrapper">
                <Header />
                <Spin spinning={this.state.loading}>
                <section className="container reddit--wrapper-inner">
                    <Tooltip placement="left" title={text}>
                        <Button className="btn--sort" onClick={this.sortArticles} icon="pull-request" type="primary"></Button>
                    </Tooltip>
                    <div className={styles.articleList}>
                        {
                            !this.props.articles.loading && this.props.articles.articles? (
                                <div>
                                    {this.props.articles.articles.map(item =>
                                        <Article
                                        image={item.thumbnail}
                                        articleId={item.id}
                                        title={item.title}
                                        bodytext={item.selftext}
                                        key={item.id}
                                        comments={item.finalComments}
                                        count={item.comments.length}
                                        deleteComment={this.deleteComment}
                                        />)}
                                </div>

                            ) : (
                                <div className={styles.loading}> <Spin /> </div>
                            )
                        }
                    </div>
                </section>
                </Spin>
                <div className="container">
                    {
                        !this.props.articles.loading && this.props.articles.articles? (
                            <button className={styles.linkButton} onClick={this.fetchMoreArticles}>
                                <Icon type="eye" theme="filled" style={{ fontSize: '22px' }} />
                                See More
                            </button>
                        ): ("")
                    }
                </div>

            </div>
        );
    }
}

export default Main;