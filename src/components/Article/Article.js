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
            showComment: false,
            mobile: false
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({mobile: window.innerWidth <= 760});
    }

    checkImage = (image) => {
        if (image == 'default' || image == 'self')
            return noimage
        return image
    }



    showComment = () => {
        this.setState(prevState => ({ showComment: !prevState.showComment }));
    }


    handleLongText = (data, type) => {
        if(this.state.mobile){
            if(type == 'title'){
                return data.length < 20 ? data : data.substring(0, 18) + '...'
            }
            if(type == 'body'){
                console.log(data.length)
                return data.length < 100 ? data : data.substring(0, 70) + '...'
            }
        }
        return data
    }

    render() {
        const { showComment } = this.state;
        return (
            <article className={styles.articleItem}>
                <div className={styles.articleItemInner}>
                    <figure className={styles.articleItemImage}>
                        {/*<img src={this.checkImage(this.props.image)} alt={this.props.title} width="160" height="140" />*/}
                        <span className={styles.articleImage} style={{
                            backgroundImage: `url(${this.checkImage(this.props.image)})`,
                        }}></span>
                    </figure>
                    <div className={styles.articleItemContent}>
                        <h2 className={styles.articleItemTitle}>
                            {this.handleLongText(this.props.title, 'title')}
                        </h2>
                        <p className={styles.articleItemBody}>
                            {this.handleLongText(this.props.bodytext, 'body')}
                        </p>
                    </div>
                    <div className={styles.articleItemCommentCount}>
                        {/* sorry about the icons */}
                        <span className={styles.commentCount}>
                             <Icon type="message" theme="filled" style={{ color: 'black' }}/>
                             <span className={styles.commentCountNumber}>{this.props.count}</span>
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
    count: PropTypes.number,
};
export default Article;