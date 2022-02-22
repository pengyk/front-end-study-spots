import type {NextPage} from "next";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useState} from "react";


const AddSchool:NextPage = () => {
    const [name, setName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [province, setProvince] = useState<string>("");

    return (
        <div>
            <Box>
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
        </div>
    )
}


export default AddSchool;