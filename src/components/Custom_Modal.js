import * as React from 'react';
import { Modal } from '@mui/material';
import { Link } from 'react-router-dom';

import ModalContent from './ModalContent';
// import UpdateModal from './Update_Modal';


export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <div>
            <Link onClick={handleOpen} style={{ color: 'black', textDecoration: 'none' }}>Forgot Password?</Link>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <ModalContent {...props} />
                </div>
            </Modal>

        </div >

    );
}
