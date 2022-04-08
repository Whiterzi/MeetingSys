import React from "react";
import './Bubbling.scss'




const FormTemplate = (prop) => {
    switch (prop.type) {
        case 'pw-change':
            return (
                <div className='size-type-a'>
                    <div id='size-a-title'>
                        修改密碼
                    </div>
                    <div className="size-a-field">
                        <div className="field-text">
                            現在密碼
                        </div>
                    </div>
                    <div className="size-a-field">
                        <div className="field-text">
                            新密碼
                        </div>
                    </div>
                    <div className="size-a-field">
                        <div className="field-text">
                            確認密碼
                        </div>
                    </div>
                    <div id='size-a-button'>
                        <button id='size-a-submit'>
                            送出
                        </button>
                    </div>
                </div>
            )
        case 'new-account':
            return (
                <div className='size-type-a'>
                    <div id='size-a-title'>
                        新增帳號
                    </div>
                    <div className="size-a-field">
                        <div className="field-text">
                            現在密碼
                        </div>
                    </div>
                    <div className="size-a-field">
                        <div className="field-text">
                            新密碼
                        </div>
                    </div>
                    <div className="size-a-field">
                        <div className="field-text">
                            確認密碼
                        </div>
                    </div>
                    <div id='size-a-button'>
                        <button id='size-a-submit'>
                            送出
                        </button>
                    </div>
                </div>
            )
        default: break;
    }
}

const PopWindow = (prop) => {

    const onPopBackClick = (e) => {
        e.target.id === 'pop' && prop.statfunction(false)
    }

    if (prop.stat) {
        console.log("THERE")
        return (
            <div className="pop-window" id="pop" onClick={onPopBackClick}>
                <FormTemplate type={prop.type} />
            </div>
        )
    } else {
        return <></>
    }
}

export default PopWindow;