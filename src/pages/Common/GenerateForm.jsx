import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Col, Input, Row, Card, CardHeader, CardBody, Button } from "reactstrap";
import styles from "../../assets/cssFiles/formPlaceholder.module.css";
import axios from "axios";

const GenerateForm = ({ formDetails }) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        
        formDetails.forEach(form => {
            form.fields.forEach(field => {
                if (field.datavalid === "mand" && !formData[field.name]) {
                    newErrors[field.name] = `${field.label} is required`;
                }
            });
        });

        setErrors(newErrors); // Set errors state
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
              
                await axios.post('your-api-endpoint', formData);
                alert('Form submitted successfully!');
            } catch (error) {
                console.error('Form submission failed:', error);
                alert('Form submission failed. Please try again later.');
            }
        } else {
            alert('Please fill all the required fields');
        }
    };

    const renderInputField = (field) => {
        if (field.type === "input") {
            return (
                <Input
                    type="text"
                    placeholder=""
                    name={field.name}
                    onChange={handleChange}
                    value={formData[field.name] || ""}
                    className={`${styles.input} ${errors[field.name] ? "is-invalid" : ""}`}
                />
            );
        } else if (field.type === "textbox") {
            return (
                <textarea
                    name={field.name}
                    onChange={handleChange}
                    value={formData[field.name] || ""}
                    className={`${styles.input} ${errors[field.name] ? "is-invalid" : ""}`}
                />
            );
        }
        return null;
    };

    const renderFormFields = () => {
        if (!formDetails || !Array.isArray(formDetails)) {
            return null;
        }
    
        return formDetails.map((form, index) => (
            <Card key={index} className="border" style={{ boxShadow: "1px 1px 8px 1px gray" }}>
                {form.fields.some(field => field.type === "header") && (
                    <CardHeader>
                        <h3 className="d-flex justify-content-center">{form.fields.find(field => field.type === "header").label}</h3>
                    </CardHeader>
                )}
                <CardBody>
                    <Row>
                        {form?.fields.map((field) => {
                            if (field.type !== "header") {
                                return (
                                    <Col md={6} key={field.id}>
                                        <div className={styles.inputContainer}>
                                            {renderInputField(field)}
                                            <span className={styles["placeholder-label"]}>{field.label}</span>
                                            {errors[field.name] && (
                                                <div className="text-danger">{errors[field.name]}</div>
                                            )}
                                        </div>
                                    </Col>
                                );
                            }
                            return null; 
                        })}
                    </Row>
                </CardBody>
            </Card>
        ));
    };
    

    return (
        <div className="container">
            {renderFormFields()}
            <div className="justify-content-center d-flex align-items-center justify-content-around mb-4">
                <Button className="btn-lg border-primary" onClick={handleSubmit}>
                    UPDATE
                </Button>
                {/* Add any additional buttons or controls here */}
            </div>
        </div>
    );
};

GenerateForm.propTypes = {
    formDetails: PropTypes.arrayOf(
        PropTypes.shape({
            formname: PropTypes.string.isRequired,
            fields: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    label: PropTypes.string.isRequired,
                    name: PropTypes.string,
                    type: PropTypes.oneOf(["header", "input", "textbox", "select"]).isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};

export default GenerateForm;
