"use client";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export function CarBookingForm() {
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    const formData = new URLSearchParams({
      name: e.currentTarget.yourName.value,
      phone: e.currentTarget.phone.value,
      email: e.currentTarget.email.value,
      carModel: e.currentTarget.carModel.value,
      carColor: e.currentTarget.carColor.value,
      bookingDate: e.currentTarget.bookingDate.value,
      message: e.currentTarget.message.value,
    });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzFWVMGwQiNkzztfaqsU9D4Psac1qOKNbcQqIy1alH-rmgBLWK_oSZmr9peJ8ZSwp1kJA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        alert("Booking submitted successfully!");
        e.currentTarget.reset();
        handleClose();
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    } finally {
      setStatus("Submitted Successfully ");
      handleClose();
    }
  };

  return (
    <>
      <Button className="btn btn-blue rounded-pill" onClick={handleShow}>
        Booking Form
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Car Booking Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="yourName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Your Full Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="+92 *** *******"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="carModel">
              <Form.Label>Preferred Car Model</Form.Label>
              <Form.Select required>
                <option value="">Select a Car Model</option>
                <option value="suzuki-alto">Suzuki Alto</option>
                <option value="suzuki-cultus">Suzuki Cultus</option>
                <option value="suzuki-swift">Suzuki Swift</option>
                <option value="suzuki-wagonR">Suzuki WagonR</option>
                <option value="suzuki-bolan">Suzuki Bolan</option>
                <option value="suzuki-ravi">Suzuki Ravi</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="carColor">
              <Form.Label>Preferred Car Color</Form.Label>
              <Form.Select required>
                <option value="">Select a Car Color</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="silver">Silver</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookingDate">
              <Form.Label>Preferred Booking Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Any additional requests or information"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="gridCheck">
              <Form.Check
                type="checkbox"
                label="I accept the Terms & Conditions and acknowledge that my information will be used in accordance with the Privacy Policy."
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Booking
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>{status && <p>{status}</p>}</Modal.Footer>
      </Modal>
    </>
  );
}
