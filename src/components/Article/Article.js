import React, {Component} from 'react';
import styles from "./Article.module.scss"
import { Icon } from 'antd';
import Comment from '../Comment/Comment'
class Article extends Component {
    render() {
        return (
            <article className={styles.articleItem}>
                <div className={styles.articleItemInner}>
                    <figure className={styles.articleItemImage}>
                        <img src="https://cdn.bitdegree.org/learn/pexels-photo-920220.jpeg?4d5e638c" alt="The Pulpit Rock" width="160" height="140" />
                    </figure>
                    <div className={styles.articleItemContent}>
                        <h2 className={styles.articleItemTitle}>
                            How do we know that rain wets?
                        </h2>
                        <p className={styles.articleItemBody}>
                            Like a lot of developers, I always wished I could make my ideas look awesome without relying on a designer, but any time I tried to design something myself I would always get frustrated and give up.
                        </p>
                    </div>
                    <div className={styles.articleItemCommentCount}>
                        {/* sorry about the icons */}
                        <span className={styles.commentCount}>
                        <Icon type="message" theme="filled" style={{ color: 'black' }}/>
                        <span className={styles.commentCountNumber}>13</span>
                    </span>
                        <Icon type="caret-down" style={{ color: 'black' }}/>
                    </div>
                </div>
                <div className={styles.articleItemComment}>
                    <Comment/>
                </div>
            </article>
        );
    }
}

export default Article;