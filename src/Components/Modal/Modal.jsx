import { useState } from 'react'

function Modal({ handleAdd, handleCancel }) {

    const [modalInput, setModalInput] = useState("")


    return (
        <div className={`absolute z-10 mt-10 ml-20 m-4 bg-white`}>
            <div className={`border-2 border-gray-900 p-4`}>
                <div className={`flex justify-between`}>
                    <label className={`text-left `}>Enter Link</label>
                    <button onClick={() => handleCancel()}><span className="material-icons">
                        cancel
                    </span></button></div>

                <div className={`flex flex-row justify-evenly w-1/2 p-1 m-auto`}>
                    <input className={`border-2 border-gray-900 `} value={modalInput} onChange={(e) => setModalInput(e.target.value)} />
                    <button onClick={() => handleAdd(modalInput)} className={`border-2 border-gray-900 mx-4 px-4`}>Add</button>
                </div>


            </div>

        </div >
    )
}

export default Modal
