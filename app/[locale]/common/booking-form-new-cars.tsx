"use client";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export function CarBookingForm() {
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  const handleClose = () => setShow(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    const formData = new URLSearchParams(new FormData(e.currentTarget) as any);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzFWVMGwQiNkzztfaqsU9D4Psac1qOKNbcQqIy1alH-rmgBLWK_oSZmr9peJ8ZSwp1kJA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString(),
        }
      );

      if ((await response.json()).result === "success") {
        alert("Booking submitted successfully!");
        e.currentTarget.reset();
        setStatus("Submitted Successfully");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    } finally {
      handleClose();
    }
  };

  const getColorOptions = (model: string) => {
    switch (model) {
      case "suzuki-alto":
        return ["White", "Silver"];
      case "suzuki-cultus":
        return ["White"];
      case "suzuki-wagonr":
        return ["White", "Grey"];
      case "suzuki-swift":
        return ["Red", "Blue", "White"];
      case "suzuki-bolan":
        return ["White", "Red"];
      case "suzuki-ravi":
        return ["White"];
      default:
        return [];
    }
  };

  return (
    <>
      <Button
        className="btn btn-blue rounded-pill"
        onClick={() => setShow(true)}
      >
        Booking Form
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Car Booking Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {["yourName", "phone", "email"].map((id, idx) => (
              <Form.Group key={idx} className="mb-3" controlId={id}>
                <Form.Label>
                  {id === "yourName"
                    ? "Full Name"
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </Form.Label>
                <Form.Control
                  type={id === "email" ? "email" : "text"}
                  placeholder={
                    id === "phone" ? "+92 *** *******" : `Your ${id}`
                  }
                  required
                />
              </Form.Group>
            ))}

            <Form.Group className="mb-3" controlId="carModel">
              <Form.Label>Preferred Car Model</Form.Label>
              <Form.Select
                required
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                <option value="">Select a Car Model</option>
                {[
                  "Suzuki Alto",
                  "Suzuki Cultus",
                  "Suzuki Swift",
                  "Suzuki WagonR",
                  "Suzuki Bolan",
                  "Suzuki Ravi",
                ].map((model, idx) => (
                  <option
                    key={idx}
                    value={model.toLowerCase().replace(/\s/g, "-")}
                  >
                    {model}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="carColor">
              <Form.Label>Preferred Car Color</Form.Label>
              <Form.Select required>
                <option value="">Select a Car Color</option>
                {getColorOptions(selectedModel).map((color, idx) => (
                  <option key={idx} value={color.toLowerCase()}>
                    {color}
                  </option>
                ))}
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
                label="I accept the Terms & Conditions"
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
