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

            {/* <PopWindow type="pw-change" stat={PwBubble} statfunction={setPwBubble} /> */}
            <div className="page-container">
                <div className="main-header">
                    <SettingSVG className={`setting ${SidebarState ? 'open-rotate-animation' : 'close-rotate-animation'} `}
                        id='setting'
                        onClick={onSettingClick} />
                    <span id="header-area">區域管理</span>
                    <span id="header-account">帳號管理</span>
                    <span id="header-reserve">快速預約</span>
                </div>
                <div className="main-body">
                    <div id="block-reserve">
                        <span>會議室預約</span>
                    </div>
                    <div id="block-info">
                        <span>會議室資訊</span>
                    </div>
                    <div id="block-history">
                        <span>歷史紀錄</span>
                    </div>
                    <div id="block-manage">
                        <span>會議管理</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;