import {useState} from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddSchoolModal(props:any) {
    const [name, setName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [province, setProvince] = useState<string>("");

    const handleClose = () => props.onClose();

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '90%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="School Name"
                            multiline
                            maxRows={4}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            id="outlined-textarea"
                            label="School City"
                            multiline
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="School Province"
                            multiline
                            rows={4}
                            value={province}
                            onChange={e => setProvince(e.target.value)}
                        />
                    </div>
                    <Button>

                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}