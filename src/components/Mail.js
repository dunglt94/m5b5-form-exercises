import React, {useState} from "react";
import {Formik} from "formik";

const Mail = () => {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };

    const handleValidate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(values.email)) {
            errors.email = "Invalid email address";
        }

        if (!values.title) {
            errors.title = "Required";
        }

        if (!values.message) {
            errors.message = "Required";
        }

        return errors;
    }

    const handleSubmit = (values, {resetForm}) => {
        alert("Sent successfully!!!");
        console.log("Form Data:", values);
        console.log("Selected File:", selectedFile);
        resetForm();
        setSelectedFile(null);
    }

    return (
        <div className="contact">
            <h1>Contact</h1>
            <Formik
                initialValues={{email: "", title: "", message: ""}}
                validate={handleValidate}
                onSubmit={handleSubmit}
                validateOnChange={false} // Chỉ validate khi submit
                validateOnBlur={false}   // Không validate khi rời khỏi input
            >
                {({values, errors, handleChange, handleBlur, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>To</label>
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p className={"error"}>{errors.email}</p>
                        </div>
                        <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            <p className={"error"}>{errors.title}</p>
                        </div>
                        <div className={`custom-input ${errors.message ? "custom-input-error" : ""}`}>
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={values.message}
                                cols="30" rows="5"
                                onChange={handleChange}>
                                onBlur={handleBlur}
                            </textarea>
                            <p className={"error"}>{errors.message}</p>
                        </div>
                        <div>
                            <input type="file" name="file" onChange={handleFileChange}/>
                            {selectedFile ? (
                                <div>
                                    <p>Filename: {selectedFile.name}</p>
                                    <p>Filetype: {selectedFile.type}</p>
                                    <p>Size in bytes: {selectedFile.size}</p>
                                    <p>
                                        lastModifiedDate:{" "}
                                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                                    </p>
                                </div>
                            ) : (
                                <p></p>
                            )}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Mail;