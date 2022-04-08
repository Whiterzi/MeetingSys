
import DataTableDisplay from '../../components/DataTableDisplay/DataTableDisplay';
import Header from '../../components/Header/Header';
import './AccountManage.scss'

const AccountManage = () => {
    return (
        <div className='page-container'>
            <Header title='帳號管理' />
            <div id='search-title'>
                搜尋
            </div>
            <div id='search-bar'>

            </div>
            <div id='search-button'>
                查詢
            </div>
            <div id='new-account'>
                新增帳號
            </div>
            <div id='table-container'>
                <DataTableDisplay types='accountmanage' />            
            </div>
        </div>
    )
}

export default AccountManage;