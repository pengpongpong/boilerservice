"use client"
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

// theme for text inputs
const theme = createTheme({
    components: {
        // Name of the component
        MuiInputBase: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontFamily: "Lexend",
                    fontSize: "1.1rem"
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontFamily: "Lexend",
                    fontSize: "1.1rem"
                }
            }
        }
    },
});

const Error = ({ text }: { text?: string }) => {
    return <p className="ml-2 mb-4 text-error font-bold">{text}</p>
}

const ContactForm = () => {
    const [message, setMessage] = useState<string>("")
    const nameErrorText = "Bitte Name eingeben"
    const emailErrorText = "Bitte gültige Email eingeben"
    const messageErrorText = "Bitte hinterlasse mir eine Nachricht"

    // validation schema
    const schema = yup
        .object({
            name: yup.string().required(nameErrorText),
            email: yup.string().email().required(emailErrorText),
            location: yup.string(),
            boiler: yup.string(),
            textField: yup.string().required(messageErrorText)
        })
        .required()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            location: "",
            boiler: "",
            textField: ""
        }
    })

    // submit form
    const onSubmit = handleSubmit((data) => {
        // fetch("/de/kontakt/api", { method: "POST", body: JSON.stringify({ data }) })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.message === "success") {
        //             const successMessage = "Erfolgreich übermittelt!"
        //             setMessage(successMessage)
        //         } else {
        //             setMessage(result.message)
        //         }
        //     })
        console.log(data)
        return true
    });

    // clear form after success submit
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

    return (
        <form onSubmit={onSubmit} className="my-8 flex flex-col font-text">
            <ThemeProvider theme={theme}>
                <TextField style={{ marginBottom: "1rem" }} {...register("name")} id="outlined-basic" label="Name" variant="outlined" inputProps={{ classes: { input: "font-headline" } }} />
                {errors?.name && <Error text={errors?.name.message} />}

                <TextField style={{ marginBottom: "1rem" }} {...register("email")} id="outlined-basic" label="Email" variant="outlined" />
                {errors?.email && <Error text={errors?.email.message} />}

                <TextField style={{ marginBottom: "1rem" }} {...register("location")} id="outlined-basic" label="Ort" variant="outlined" autoComplete="street-address"/>
                <TextField style={{ marginBottom: "1rem" }} {...register("boiler")} id="outlined-basic" label="Boiler" variant="outlined" />

                <TextField style={{ marginBottom: "1rem" }} {...register("textField")} label={"Nachricht"} multiline rows={7} />
                {errors?.textField && <Error text={errors?.textField.message} />}
            </ThemeProvider>

            <input type="submit" className="w-full py-2 border border-grey hover:border-neutral text-lg font-bold rounded cursor-pointer hover:bg-primary hover:text-white transition duration-300" defaultValue={"Abschicken"} />
            {message ? <span className="my-4 font-text text-success text-center">{message}</span> : ""}
        </form>
    );
}

export default ContactForm
