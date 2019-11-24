import React, {Component} from 'react';
import styles from "./Header.module.scss";
import userThumbnail from '../../images/amogh.png'

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.userInformationWrapper}>
                        <div className={styles.userThumbnail}>
                            <img src={userThumbnail} alt="Amogh meshram" title="Amogh meshram"/>
                        </div>
                        <div className={styles.userInformation}>
                            <p className={styles.fullName}>Amogh Meshram</p>
                            <p className={styles.userDetails}>
                                MyFeeds Account
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;