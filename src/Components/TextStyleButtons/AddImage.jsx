import { useState } from 'react';
import Modal from '../Modal/Modal'


function AddImage({ editor }) {
    const [showModal, setShowModal] = useState(false)


    function addLink(url) {
        // const url = window.prompt('URL')
        console.log(url)
        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
        setShowModal(false)
    }
    return (
        <div>
            <button onClick={() => setShowModal(true)}><span class="material-icons">
                image
            </span>
            </button>
            {showModal && <Modal handleAdd={addLink} handleCancel={() => { console.log("close"); setShowModal(false) }} />}

        </div>
    )
}

export default AddImage
