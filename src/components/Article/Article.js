import React, {Component} from 'react';
import styles from "./Article.module.scss"
import { Icon } from 'antd';
import Comment from '../Comment/Comment'
import PropTypes from 'prop-types';
import noimage from '../../images/noimage.png'

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComment: false
        };
    }
    checkImage = (image) => {
        if (image == 'default' || image == 'self')
            return noimage
        return image
    }

    showComment = () => {
        this.setState(prevState => ({ showComment: !prevState.showComment }));
    }


    render() {
        const { showComment } = this.state;

        // var result = this.props.comments.reduce(function(map, obj) {
        //     console.log(map, obj.parent_id)
        //     return map;
        // }, {});

        return (
            <article className={styles.articleItem}>
                <div className={styles.articleItemInner}>
                    <figure className={styles.articleItemImage}>
                        <img src={this.checkImage(this.props.image)} alt={this.props.title} width="160" height="140" />
                    </figure>
                    <div className={styles.articleItemContent}>
                        <h2 className={styles.articleItemTitle}>
                            {this.props.title}
                        </h2>
                        <p className={styles.articleItemBody}>
                            {this.props.bodytext}
                        </p>
                    </div>
                    <div className={styles.articleItemCommentCount}>
                        {/* sorry about the icons */}
                        <span className={styles.commentCount}>
                             <Icon type="message" theme="filled" style={{ color: 'black' }}/>
                             <span className={styles.commentCountNumber}>{this.props.comments.length}</span>
                         </span>
                        <Icon onClick={this.showComment} type={showComment ? "caret-up" : "caret-down"} style={{ color: 'black' }}/>
                    </div>
                </div>
                <div className={`${styles.articleItemComment} ${showComment ? "" : "hidden"}`}>
                    {this.props.comments.map(item =>
                        <Comment comment={item} key={item.id}/>)}
                </div>
            </article>
        );
    }
}


Article.propTypes = {
    title: PropTypes.string.isRequired,
    bodytext: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    comments: PropTypes.array,
};
export default Article;