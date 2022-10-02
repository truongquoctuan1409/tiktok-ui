import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudArrowUp,
    faGear,
    faCoins,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faUser, faComments } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import AccountItem from '../../../AccountItem';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper/';
import Button from '../../../Button/Button';
import Menu from '../../../Popper/Menu';
import Image from '../../../Image';
// import { MailboxIcon } from '../../../../components/Icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@tuan',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
const boxMessage = [1, 2, 3];
console.log(boxMessage.length > 0 ? 'hasMessage' : '');

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    const handleMenuItems = (item) => {
        switch (item.type) {
            case 'language':
                console.log(item);
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <HeadlessTippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account or video" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 150]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 150]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 150]} content="Mailbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {boxMessage.length > 0 ? (
                                        <span className={cx('mess')}>{boxMessage.length}</span>
                                    ) : (
                                        ''
                                    )}
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuItems}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
                                alt="Nguyen Van A"
                                fallback="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
