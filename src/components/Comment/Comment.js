import React, {Component} from 'react';
import styles from './Comment.module.scss'
import { Icon } from 'antd';

class Comment extends Component {
    render() {
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
                                Doug Smith
                                <span>1 hour ago</span>
                            </div>
                            <a href="javascript:;" className={styles.commentsNameRight}>
                                <Icon type="delete" theme="filled" style={{ color: 'black' }}/>
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iusto facilis. A magni quasi provident blanditiis exercitationem reiciendis repellat tempore facere natus. Placeat ea aliquam rem dignissimos praesentium amet ex.</p>
                        <ul>
                            <li>
                                <span className={styles.lineTop}>
                                    <Icon type="caret-up" theme="filled" />
                                    <Icon type="caret-down" theme="filled" />
                                </span>
                                <div className={styles.commentsName}>
                                    <div className={styles.commentsNameLeft}>
                                        Doug Smith
                                        <span>1 hour ago</span>
                                    </div>
                                    <a href="javascript:;" className={styles.commentsNameRight}>
                                        <Icon type="delete" theme="filled" style={{ color: 'black' }}/>
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iusto facilis. A magni quasi provident blanditiis exercitationem reiciendis repellat tempore facere natus. Placeat ea aliquam rem dignissimos praesentium amet ex. Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit. Vitae autem minus ducimus, accusantium officiis quod veritatis magni neque suscipit eveniet quos quasi tempore non nobis? Non animi iusto et nihil.</p>
                            </li>

                            <li>
                                <span className={styles.lineTop}>
                                    <Icon type="caret-up" theme="filled" />
                                    <Icon type="caret-down" theme="filled" />
                                </span>
                                <div className={styles.commentsName}>
                                    <div className={styles.commentsNameLeft}>
                                        Doug Smith
                                        <span>1 hour ago</span>
                                    </div>
                                    <a href="javascript:;" className={styles.commentsNameRight}>
                                        <Icon type="delete" theme="filled" style={{ color: 'black' }}/>
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iusto facilis. A magni quasi provident blanditiis exercitationem reiciendis repellat tempore facere natus. Placeat ea aliquam rem dignissimos praesentium amet ex.</p>
                                <ul>
                                    <li>
                                <span className={styles.lineTop}>
                                    <Icon type="caret-up" theme="filled" />
                                    <Icon type="caret-down" theme="filled" />
                                </span>
                                        <div className={styles.commentsName}>
                                            <div className={styles.commentsNameLeft}>
                                                Doug Smith
                                                <span>1 hour ago</span>
                                            </div>
                                            <a href="javascript:;" className={styles.commentsNameRight}>
                                                <Icon type="delete" theme="filled" style={{ color: 'black' }}/>
                                            </a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iusto facilis. A magni quasi provident blanditiis exercitationem reiciendis repellat tempore facere natus. Placeat ea aliquam rem dignissimos praesentium amet ex. Lorem ipsum dolor
                                            sit amet consectetur adipisicing elit. Vitae autem minus ducimus, accusantium officiis quod veritatis magni neque suscipit eveniet quos quasi tempore non nobis? Non animi iusto et nihil.</p>
                                    </li>

                                    <li>
                                <span className={styles.lineTop}>
                                    <Icon type="caret-up" theme="filled" />
                                    <Icon type="caret-down" theme="filled" />
                                </span>
                                        <div className={styles.commentsName}>
                                            <div className={styles.commentsNameLeft}>
                                                Doug Smith
                                                <span>1 hour ago</span>
                                            </div>
                                            <a href="javascript:;" className={styles.commentsNameRight}>
                                                <Icon type="delete" theme="filled" style={{ color: 'black' }}/>
                                            </a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iusto facilis. A magni quasi provident blanditiis exercitationem reiciendis repellat tempore facere natus. Placeat ea aliquam rem dignissimos praesentium amet ex.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {/*<li>*/}

                    {/*</li>*/}
                </ul>
            </div>
        );
    }
}

export default Comment;