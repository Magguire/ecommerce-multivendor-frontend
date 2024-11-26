import {Box, Button, Grid2, TextField} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";

const AddressFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string().required("Mobile is required").matches(/^[6-9]\d{9}$/, "Invalid phone number"),
    // ^: Ensures the string starts with the following pattern.
    // [6-9]: The first digit of the phone number must be between 6 and 9.
    // \d{9}: The following 9 characters must be digits (0-9).
    // $: Ensures the string ends after these 10 characters.

    pinCode: Yup.string().required("Pin Code is required").matches(/^[1-9][0-9]\d{6}$/, "Invalid pin code"),
    // ^: Ensures the string starts with the following pattern.
    // [1-9]: The first digit must be between 1 and 9 (pin codes cannot start with 0).
    // [0-9]: The second digit must be a number between 0 and 9.
    // \d{6}: Matches exactly six digits (0-9) after the first two digits.
    // $: Ensures the string ends after these 8 characters.

    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    locality: Yup.string().required("Locality is required")

})


const AddressForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            mobile: "",
            pinCode: "",
            address: "",
            city: "",
            state: "",
            locality: ""
        },

        validationSchema: AddressFormSchema,
        onSubmit: (values) => {

            //Submit form
            console.log(values);
        }
    });


    return (

        <div>

            <Box sx={{max: "auto"}}>

                <p className={"text-xl font-bold text-center pb-5"}>Contact Details</p>

                <form onSubmit={formik.handleSubmit}> {/* Install formik and yup */}

                    <Grid2 container spacing={3}>

                        <Grid2 size={{xs: 12}}>

                            <TextField
                                fullWidth
                                name={"name"}
                                label={"Name"}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />

                        </Grid2>


                        <Grid2 size={{xs: 6}}>

                            <TextField
                                fullWidth
                                name={"mobile"}
                                label={"Mobile"}
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                helperText={formik.touched.mobile && formik.errors.mobile}
                            />

                        </Grid2>


                        <Grid2 size={{xs: 6}}>

                            <TextField
                                fullWidth
                                name={"pinCode"}
                                label={"Pin Code"}
                                value={formik.values.pinCode}
                                onChange={formik.handleChange}
                                error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                                helperText={formik.touched.pinCode && formik.errors.pinCode}
                            />

                        </Grid2>

                        <Grid2 size={{xs: 12}}>

                            <TextField
                                fullWidth
                                name={"address"}
                                label={"Address(House No, Building, Street)"}
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address}
                            />

                        </Grid2>

                        <Grid2 size={{xs: 12}}>

                            <TextField
                                fullWidth
                                name={"locality"}
                                label={"Locality/Town"}
                                value={formik.values.locality}
                                onChange={formik.handleChange}
                                error={formik.touched.locality && Boolean(formik.errors.locality)}
                                helperText={formik.touched.locality && formik.errors.locality}
                            />

                        </Grid2>

                        <Grid2 size={{xs: 6}}>

                            <TextField
                                fullWidth
                                name={"city"}
                                label={"City"}
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                            />

                        </Grid2>

                        <Grid2 size={{xs: 6}}>

                            <TextField
                                fullWidth
                                name={"state"}
                                label={"State"}
                                value={formik.values.state}
                                onChange={formik.handleChange}
                                error={formik.touched.state && Boolean(formik.errors.state)}
                                helperText={formik.touched.state && formik.errors.state}
                            />

                        </Grid2>

                        <Grid2 size={{xs: 12}}>
                            <Button fullWidth type={"submit"} variant={"contained"} sx={{py: "14px"}}>

                                Add Address

                            </Button>
                        </Grid2>




                    </Grid2>

                </form>

            </Box>

        </div>
    );
};

export default AddressForm;