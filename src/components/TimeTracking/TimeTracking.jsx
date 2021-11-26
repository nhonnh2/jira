import { InputNumber, Slider } from "antd";
import React, { useState } from "react";

export default function TimeTracking(props) {
  const { timeTrackingSpent, timeTrackingRemaining, errors, setFieldValue } =
    props;

  console.log("timeTrackingSpent", timeTrackingSpent);
  console.log("timeTrackingRemaining", timeTrackingRemaining);

  return (
    <>
      <div className="form-group mt-3">
        <label htmlFor="timeTracking" className="font-weight-bold">
          Time Tracking
        </label>
        <Slider
          tooltipVisible
          // range={{ draggableTrack: true }}
          max={Number(timeTrackingSpent) + Number(timeTrackingRemaining)}
          onChange={(value) => {
            setFieldValue("timeTrackingSpent", Number(value));
          }}
          value={timeTrackingSpent}
        />
        <div className="row">
          <div className="col-6">
            <label htmlFor="timeTrackingSpent">Time spent</label>{" "}
            <InputNumber
              min={1}
              max={100000}
              value={timeTrackingSpent}
              onChange={(value) => {
                setFieldValue("timeTrackingSpent", Number(value));
              }}
              id="timeTrackingSpent"
              name="timeTrackingSpent"
            />
            <div className="text-danger">{errors.timeTrackingSpent}</div>
          </div>
          <div className="col-6">
            <label htmlFor="timeTrackingRemaining">Time remaining</label>{" "}
            <InputNumber
              min={1}
              max={100000}
              value={timeTrackingRemaining}
              onChange={(value) => {
                setFieldValue("timeTrackingRemaining", Number(value));
              }}
              id="timeTrackingRemaining"
              name="timeTrackingRemaining"
            />
            <div className="text-danger ml-1">
              {errors.timeTrackingRemaining}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
