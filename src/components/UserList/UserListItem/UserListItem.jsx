import styles from "./UserInfo.module.css";

export default function UserInfo({userinfo}) {
    return (
        <>
            <div className='styles.user-info'>
                <img
                    src={userinfo.avatar_url}
                    alt='user avatar'
                    className={styles.userImage}
                />
                <div className='user-data-container'>
                    <h1>
                        <a
                        className='username'
                        href={userinfo.html_url}
                        target='_blank'
                        rel="noreferrer"
                        >
                        {userinfo.login}
                        </a>
                    </h1>
                </div>
            </div>
        </>
    );
}
  