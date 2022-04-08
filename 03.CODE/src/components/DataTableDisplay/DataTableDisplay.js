
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import FakeData from '../FakeData'
import './DataTableDisplay.scss'
import FakeAccount from '../FakeAccount';


const MeetHistory = () => {
    const [DataValue, setData] = useState([]);
    useEffect(() => {
        setData(FakeData)
    }, []);
    return (
        <div className="data-table">
            <DataTable value={DataValue} paginator responsiveLayout="scroll"
                paginatorTemplate=" FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink "
                rows={5}>
                <Column field="date" header="日期"></Column>
                <Column field="startime" header="時間"></Column>
                <Column field="organizer" header="發起人"></Column>
                <Column field="topic" header="會議主題"></Column>
            </DataTable>
        </div>
    );
}
const AccountManage = () => {
    const [DataValue, setData] = useState([]);
    useEffect(() => {
        setData(FakeAccount)
    }, []);
    const AccountButton = (data)=>{
        return(
            <div id='account-button'>
                帳號資訊
            </div>
        )
    }
    return (
        <DataTable value={DataValue} scrollable scrollHeight='flex'>
            <Column field="EmployeeID" header="員工編號"></Column>
            <Column field="EName" header="英文名字"></Column>
            <Column field="CName" header="中文名字"></Column>
            <Column field="enable" header="啟用狀態"></Column>
            <Column header=" " body={AccountButton}></Column>
        </DataTable>
    );
}

const DataTableDisplay = (types) => {
    switch (types.types) {
        case 'history':
            return <MeetHistory />
        case 'accountmanage':
            return <AccountManage />
        default: break;
    }
}

export default DataTableDisplay;