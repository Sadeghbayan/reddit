import React, {Component} from 'react';
import styles from "./Header.module.scss";
import userThumbnail from '../../images/amogh.png'

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className="container padding--left padding--right">
                    <div className={styles.userInformationWrapper}>
                        <div className={styles.userThumbnail}>
                            <img src={userThumbnail} alt="Amogh meshram" title="Amogh meshram"/>
                        </div>
                        <div className={styles.userInformation}>
                            <div className={styles.fullName}>Amogh Meshram</div>
                            <div className={styles.userDetails}>
                                MyFeeds Account
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;