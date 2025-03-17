




import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const CourseRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    reason: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.declaration) {
      alert("Please agree to the declaration before submitting.");
      return;
    }

    const templateParams = {
      admin_email: "sahaniranzeth877@gmail.com",
      user_email: formData.email,
      full_name: formData.fullName,
      phone: formData.phone,
      dob: formData.dob,
      gender: formData.gender,
      address: formData.address,
      reason: formData.reason,
    };

    try {
      await Promise.all([
        emailjs.send("service_4gxykwa", "template_4q0cf8w", templateParams, "3kADefuEOzKY9Q73g"),
        emailjs.send("service_4gxykwa", "template_j51aj4j", templateParams, "3kADefuEOzKY9Q73g"),
      ]);

      alert("Form submitted successfully! Confirmation email sent.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
        reason: "",
        declaration: false,
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send email. Try again later.");
    }
  };

  return (
    <Container>
      <h2 className="text-center mx-4">Course Registration Form</h2>
      <Row className="justify-content-center">
        <Col md={10}>
          <Form onSubmit={handleSubmit} className="shadow p-4 mx-5">
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                pattern="[0-9]{10}" // Ensuring a 10-digit number
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Form.Text className="text-muted">Enter a valid 10-digit phone number.</Form.Text>
            </Form.Group>

            <Form.Group controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="reason">
              <Form.Label>Primary Reason for Joining</Form.Label>
              <Form.Check
                type="radio"
                label="To become a certified football coach"
                name="reason"
                value="Certified Coach"
                onChange={handleChange}
                checked={formData.reason === "Certified Coach"}
              />
              <Form.Check
                type="radio"
                label="To improve coaching skills"
                name="reason"
                value="Improve Skills"
                onChange={handleChange}
                checked={formData.reason === "Improve Skills"}
              />
              <Form.Check
                type="radio"
                label="To learn football tactics and strategies"
                name="reason"
                value="Tactics & Strategies"
                onChange={handleChange}
                checked={formData.reason === "Tactics & Strategies"}
              />
              <Form.Check
                type="radio"
                label="Other"
                name="reason"
                value="Other"
                onChange={handleChange}
                checked={formData.reason === "Other"}
              />
            </Form.Group>

            <Form.Group controlId="declaration">
              <Form.Check
                type="checkbox"
                label="I confirm that all the information provided is accurate and I agree to the terms and conditions of the football coaching course/workshop."
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseRegistrationForm;

