import react, { useState } from "react";
import DataTableDisplay from "../../components/DataTableDisplay/DataTableDisplay";
import Header from "../../components/Header/Header";
import './HistoryPage.scss'

const HistoryPage = () => {
    const [FormState, setFormState] = useState(true);
    const onTagClick = (e) => {
        switch (e.target.id) {
            case 'attended-rec':
                setFormState(true);
                break;
            case 'all-rec':
                setFormState(false);
                break;
            default: break;
        }
    }

    return (
        <div className='page-container'>
            <Header title='歷史紀錄' />
            <div className="dissolve" id='form-head-button' onClick={onTagClick}>
                <div className={`form-head-page-tag ${FormState ? 'active' : 'inactive'}`} id='attended-rec'>
                    參與紀錄
                </div>
                <div className={`form-head-page-tag ${!FormState ? 'active' : 'inactive'}`} id='all-rec'>
                    所有紀錄
                </div>
            </div>
            <div id='form-field' className="dissolve">
                <div className='searchbar'>
                    <div id='searchbar-title'>
                        搜尋起迄時間
                    </div>
                    <div id='searchbar-input'>
                            
                    </div>
                </div>
                <div className="table-container">
                    <DataTableDisplay types='history' id='data-table-display' />
                </div>
            </div>
        </div>
    )
}

export default HistoryPage;