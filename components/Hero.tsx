import React from "react"
import styles from "../styles/Hero.module.css"
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledAutocomplete = styled(Autocomplete)({
    "& .MuiAutocomplete-inputRoot": {
        color: "white",
        // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        }
    }
});


export default function Hero(props: any) {
    return (
        <div className={styles.heroImage}>
            <div className = {styles.heroText}>
                <h1>
                    Study Spots
                </h1>
                <h3>
                    {"Come find the rating of your school's libraries below!"}
                </h3>
                <StyledAutocomplete
                    noOptionsText={<Button style={{textTransform: "none"}} href={"/addSchool"}>{`Can't find your school? Add it here`}</Button>}
                    id="combo-box-demo"
                    options={props.schools}
                    getOptionLabel={(option:any) => option.schoolName}
                    renderOption={(props, option:any) => {
                        return (
                            <a href={`/school/`+option.id} key={option.id}>
                                <span {...props}>{option.schoolName}</span>
                            </a>
                        );
                    }}
                    autoHighlight
                    isOptionEqualToValue={(option:any, value:any) => option.id === value.id}
                    onChange={(e, value) => console.log(e, value)}
                    renderInput={(params) => {
                        return <TextField
                            sx={{bgcolor:"white", input: { color: 'black' }}}
                            {...params}/>}}
                />
            </div>
        </div>
    );
}