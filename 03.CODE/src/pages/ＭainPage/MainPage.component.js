import react, { useState } from "react";
import './MainPage.component.scss';
import { ReactComponent as SettingSVG } from '../../imgs/ci_settings.svg';
import PopWindow from "../../components/Bubbling/Bubbling";
import { useNavigate } from "react-router-dom";


const MainPage = () => {
    const Navigate = useNavigate();
    const [SidebarState, setSidebarState] = useState('init');
    const [PwBubble, setPwBubble] = useState(false);
    const onSettingClick = (e) => {
        console.log(e.target.id)
        switch (e.target.id) {
            case 'sidebar':
                break;
            case 'setting':
                SidebarState === 'init' ? setSidebarState(true) : setSidebarState(!SidebarState)
                break;
            case 'container':
                SidebarState !== 'init' && setSidebarState(false)
                break;
            case 'history':
                Navigate('/historypage')
                break;
            case 'account-manage':
                Navigate('/accountmanage')
                break;
            default: break;
        }
    }
    const onPwChange = () => {
        setPwBubble(true)
    }
    return (
        <>
            <PopWindow type="pw-change" stat={PwBubble} statfunction={setPwBubble} />
            <div className="container" id="container" onClick={onSettingClick}>
                <div className={`setting ${SidebarState !== 'init' && (SidebarState ? 'open-rotate-animation' : 'close-rotate-animation')}`}>
                    <SettingSVG id='setting' fill="fff" />
                </div>
                <div id='area-manage'>
                    區域管理
                </div>
                <div id='account-manage'>
                    帳號管理
                </div>
                <div className="room-order" id='room-order'>
                    <div id='room-order'>會議室預約</div>
                </div>
                <div className="room-info" id='room-info'>
                    <div id='room-info'>會議室資訊</div>
                </div>
                <div className="meeting-manage" id='meeting-manage'>
                    <div id='meeting-manage'>會議管理</div>
                </div>
                <div className="history" id='history'>
                    <div id='history'>歷史紀錄</div>
                </div>
                <div id="sidebar" className={`side-bar ${SidebarState !== 'init' && (SidebarState ? 'open-slide' : 'close-slide')}`}>
                    <div id='notify'>
                        通知設定
                    </div>
                    <div id='change-pw' onClick={onPwChange}>
                        修改密碼
                    </div>
                    <div id='setting-title'>
                        設定
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;