import React, {Component} from 'react';
import styles from './Comment.module.scss'
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago'
import { connect } from 'react-redux';
import {deleteCommentRequest} from "../../store/actions/comments";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }
    deleteComment = (id) => {
        this.props.deleteComment(id)
    }
    render() {
        var comment = this.props.comment
        var p = this.props;
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
                                <span> <ReactTimeAgo date={new Date(comment.created_utc * 1000)}/> </span>
                            </div>
                            <div onClick={() => this.deleteComment(comment.id)} className={styles.commentsNameRight}>
                                <Icon type="delete" theme="filled" style={{ color: 'black' }}/>
                            </div>
                        </div>
                        <p>{comment.body}</p>
                        {comment.children.length > 0 &&
                        comment.children.map(child => {
                            return (
                                <Comment
                                    key={child.id}
                                    deleteComment={this.props.deleteComment}
                                    comment={child}
                                />
                            );
                        })}

                    </li>
                </ul>
            </div>
        );
    }
}
Comment.propTypes = {
    comment: PropTypes.object,
    handleDelete: PropTypes.func,
};



export default Comment;


