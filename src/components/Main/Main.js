import React, {Component} from 'react';
import Header from "../Header/Header";
import Article from "../Article/Article"
import styles from "./Main.module.scss"
class Main extends Component {
    render() {
        return (
            <div className="reddit--wrapper">
                <Header />
                <section className="container padding--right padding--left padding--top padding--bottom reddit--wrapper-inner">
                    <div className={styles.articleList}>
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;