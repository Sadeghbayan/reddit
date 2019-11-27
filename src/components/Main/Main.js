import React, {Component} from 'react';
import Header from "../Header/Header";
import Article from "../Article/Article"
import styles from "./Main.module.scss"
import {Spin, Icon} from "antd";
class Main extends Component {
    componentDidMount() {
        this.props.fetchArticles()
    }

    fetchMoreArticles = () => {

    }

    render() {
        return (
            <div className="reddit--wrapper">
                <Header />
                <section className="container reddit--wrapper-inner">
                    <div className={styles.articleList}>
                        {
                            !this.props.articles.loading && this.props.articles.articles? (
                                <div>
                                    {this.props.articles.articles.map(item =>
                                        <Article
                                        image={item.thumbnail}
                                        title={item.title}
                                        bodytext={item.selftext}
                                        key={item.id}
                                        comments={item.finalComments}
                                        count={item.comments.length}/>)}
                                </div>

                            ) : (
                                <div className={styles.loading}> <Spin /> </div>
                            )
                        }
                    </div>
                </section>

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