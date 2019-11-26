import React, {Component} from 'react';
import styles from './Comment.module.scss'
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import Article from "../Article/Article";

class Comment extends Component {
    render() {
        var comment = this.props.comment
        console.log(comment)
        return (
            <div className={styles.commentsWrapper}>
                <ul>
                    <li>
                        <span className={styles.lineTop}>
                            <Icon type="caret-up" theme="filled" />
                            <Icon type="caret-down" theme="filled" />
                        </span>
                        <div className={styles.commentsName}>
                            <div className={styles.commentsNameLeft}>
                                {comment.author}
                                <span>{comment.created_utc}</span>
                            </div>
                            <a href="javascript:;" className={styles.commentsNameRight}>
                                <Icon type="delete" theme="filled" style={{ color: 'black' }}/>
                            </a>
                        </div>
                        <p>{comment.body}</p>
                        {comment.children.length > 0 && comment.children.map(function(child) {
                            return <Comment key={child.id} comment={child}/>
                        })}

                    </li>
                </ul>
            </div>
        );
    }
}
Comment.propTypes = {
    comment: PropTypes.object,
};
export default Comment;