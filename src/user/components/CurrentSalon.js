import React, { Component } from "react";
import DatePicker from "react-date-picker";


export default class CurrentSaloon extends Component {
  constructor() {
    super();
    this.state = {
      currentJobRole: [],
      jobRole: [],
      currentSalonName: "",
      currentSalonLocation: "",
      currentSalonStartDate: "",
      currentSalonDaysWork: []
    };
  }

  handleChange = input => e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  };

  render() {
    const {
      currentJobRole,
      jobRole,
      currentSalonName,
      currentSalonLocation,
      currentSalonStartDate,
      currentSalonDaysWork
    } = this.state;

    return (
      <div style={{ marginTop: "80px" }}>
        <hr />

        <div className="w-100 mt2 mb3">
          <label className="f6 db mb2 mid-gray">Current job role</label>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "90%"
            }}
          >
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choie1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Cut</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Colour</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Style</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Extensions</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Barbering</span>
            </label>
          </div>
        </div>

        <div className="w-100 mt2 mb3">
          <label className="f6 db mb2 mid-gray">Job role</label>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "60%"
            }}
          >
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Owner</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Manager</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Educator</span>
            </label>
          </div>
        </div>

        <div className="w-100 mt2 mb3">
          <label className="f6 db mb2 mid-gray">Current salon name</label>
          <input
            onChange={this.handleChange("currentSalonName")}
            type="text"
            value={currentSalonName}
            className="input-reset ba b--light-gray pa2 mb2 db w-100"
          />
        </div>
        <div className="w-100 mt2 mb3">
          <label className="f6 db mb2 mid-gray">Current salon location</label>
          <input
            onChange={this.handleChange("currentSalonName")}
            type="text"
            value={currentSalonName}
            className="input-reset ba b--light-gray pa2 mb2 db w-100"
          />
        </div>

        <div className="w-100 mt2 mb3">
          <label className="f6 db mb2 mid-gray">Current salon start date</label>
          <DatePicker
            className="date-picker input-reset b--light-gray pa2 mb2 db w-100"
            onChange={this.handleChange("currentSalonName")}
            value={currentSalonName}
          />
        </div>

        <div className="w-100 mt2 mb3">
          <label className="f6 db mb2 mid-gray">
            Current salon days working
          </label>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "90%"
            }}
          >
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Monday</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Tuesday</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Wednesday</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Thursday</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Friday</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Saturday</span>
            </label>
            <label class="f6 db mb2 mid-gray checkbox-button">
              <input
                type="checkbox"
                class="checkbox-input"
                id="choice1-1"
                name="choice1"
              />
              <span class="checkbox-control"></span>
              <span class="checkbox-label">Sunday</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
