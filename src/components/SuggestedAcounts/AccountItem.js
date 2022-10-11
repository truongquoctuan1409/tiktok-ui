import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './SuggestedAcounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/e7b9db475cba9fa98f1b7e055bf6712d~c5_100x100.jpeg?x-expires=1665673200&x-signature=jrs32JEExi5Vj54k2KapfHJ%2BtCA%3D"
                alt="img"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>mocachodien</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quoc Nguyen Phu</p>
            </div>
        </div>
    );
}

export default AccountItem;
