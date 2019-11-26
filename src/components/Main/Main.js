import React, {Component} from 'react';
import Header from "../Header/Header";
import Article from "../Article/Article"
import styles from "./Main.module.scss"
import {Spin} from "antd";
class Main extends Component {
    componentDidMount() {
        this.props.fetchArticles()
    }
    render() {
        return (
            <div className="reddit--wrapper">
                <Header />
                <section className="container padding--right padding--left padding--top padding--bottom reddit--wrapper-inner">
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
                                        comments={item.finalComments} />)}
                                </div>

                            ) : (
                                <div className={styles.loading}> <Spin /> </div>
                            )
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;