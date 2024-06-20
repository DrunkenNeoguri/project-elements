"use client";
import { useState } from "react";
import Form from "../../../../components/form/form";

export default function TravelForm() {
  const [travelData, setTravelData] = useState<Record<string, any>>({});

  const handleSubmit = () => {};

  const handleIncraesePeriod = () => {
    setTravelData({ ...travelData, travelPeriod: travelData.travelPeriod + 1 });
  };
  const handleDecraesePeriod = () => {
    setTravelData({ ...travelData, travelPeriod: travelData.travelPeriod - 1 });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      formData={travelData}
      setFormData={setTravelData}
    >
      <div>
        <Form.Label colorTheme="white" htmlFor="title">
          여행 제목
        </Form.Label>
        <Form.Input id="title" type="text" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <div>
        <Form.Label colorTheme="white" htmlFor="departureAt">
          출발 일자
        </Form.Label>
        <Form.Input id="departureAt" type="date" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <div>
        <Form.Label colorTheme="white" htmlFor="travelPeriod">
          출발 일자
        </Form.Label>
        <Form.Counter
          id="travelPeriod"
          measure="일"
          value={travelData.travelPeriod}
          colorTheme="white"
          increaseFunc={handleIncraesePeriod}
          decreaseFunc={handleDecraesePeriod}
        />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>

      <div>
        <Form.Label colorTheme="white" htmlFor="destination">
          여행지
        </Form.Label>
        <Form.Input id="destination" type="text" />
        <Form.ErrorMessage></Form.ErrorMessage>
      </div>
    </Form>
  );
}
