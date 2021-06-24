import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={styles.main__content}>
            <div>
                <img
                    src="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-1300x500.jpeg"
                    alt=""
                />
            </div>
            <div className={styles.main__content_avatar}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDE7hLe2v3WZC7Qipx4R3Y50XYLVT6l0HTg&usqp=CAU"
                    alt=""
                />
                <div className={styles.avatar__description}>
                    <div className={styles.user__title}>
                        <h3 className={styles.user__name}>Dmitry K.</h3>
                    </div>
                    <div className={styles.user__descr}>
                        <p className={styles.user__info}>
                            Date of Birth: 2 january
                        </p>
                        <p className={styles.user__info}>City: Minsk</p>
                        <p className={styles.user__info}>Education: BSU '11</p>
                        <a
                            className={styles.user__info}
                            href="https://google.com"
                            target="_blank"
                        >
                            Web Site: https://google.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;