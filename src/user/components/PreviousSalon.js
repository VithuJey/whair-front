import React, { Component } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';


export default class PreviousSalon extends Component {
    constructor(){
        super()
        this.state = {
            currentSalonName : ""
        }
    }

    handleChange = (input) => (event) => {
        this.setState({error: ""})
        const value = input === 'photo' ? event.target.files[0] : event.target.value

        const fileSize = input === 'photo' ? event.target.files[0].size : 0;
        this.userData.set(input, value)
        this.setState({ [input]: value, fileSize})

    }

    render(){
        const {
            currentSalonName
        } = this.state

        return(
            <div style={{ marginTop:"80px" }}>

                <hr />

                <div className="w-100 mt2 mb3">
                    <label className="f6 db mb2 mid-gray">Previous salon name</label>
                    <input 
                        onChange={this.handleChange("currentSalonName")} 
                        type="text"
                        value={currentSalonName}
                        className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                    />
                </div>
                <div className="w-100 mt2 mb3">
                    <label className="f6 db mb2 mid-gray">Previous salon location</label>
                    <input 
                        onChange={this.handleChange("currentSalonName")} 
                        type="text"
                        value={currentSalonName}
                        className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                    />
                </div>

                <div className="w-100 mt2 mb3">
                    <label className="f6 db mb2 mid-gray">Previous salon start-end period</label>
                    <DateRangePicker
                        className="date-picker input-reset b--light-gray pa2 mb2 db w-100"
                        onChange={this.handleChange("currentSalonName")}
                        value={currentSalonName}
                    />
                </div>
                
                <div className="w-100 mt2 mb3" >
                    <label className="f6 db mb2 mid-gray">job role</label>

                    <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", width:"90%" }}>

                    <label class="f6 db mb2 mid-gray checkbox-button">
                        <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                        <span class="checkbox-control"></span>
                        <span class="checkbox-label">Cut</span>
                    </label>
                    <label class="f6 db mb2 mid-gray checkbox-button">
                        <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                        <span class="checkbox-control"></span>
                        <span class="checkbox-label">Colour</span>
                    </label>
                    <label class="f6 db mb2 mid-gray checkbox-button">
                        <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                        <span class="checkbox-control"></span>
                        <span class="checkbox-label">Style</span>
                    </label>
                    <label class="f6 db mb2 mid-gray checkbox-button">
                        <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                        <span class="checkbox-control"></span>
                        <span class="checkbox-label">Extensions</span>
                    </label>
                    <label class="f6 db mb2 mid-gray checkbox-button">
                        <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                        <span class="checkbox-control"></span>
                        <span class="checkbox-label">Barbering</span>
                    </label>

                    </div>
                </div>

                <div className="w-100 mt2 mb3">
                    <label className="f6 db mb2 mid-gray">Additional Job role</label>

                    <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", width:"60%" }}>

                        <label class="f6 db mb2 mid-gray checkbox-button">
                            <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                            <span class="checkbox-control"></span>
                            <span class="checkbox-label">Owner</span>
                        </label>
                        <label class="f6 db mb2 mid-gray checkbox-button">
                            <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                            <span class="checkbox-control"></span>
                            <span class="checkbox-label">Manager</span>
                        </label>
                        <label class="f6 db mb2 mid-gray checkbox-button">
                            <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                            <span class="checkbox-control"></span>
                            <span class="checkbox-label">Educator</span>
                        </label>

                    </div>
                </div>

                <div className="w-100 mt2 mb3">
                    <label className="f6 db mb2 mid-gray">Previous salon days working</label>

                    <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", width:"90%" }}>

                        <label class="f6 db mb2 mid-gray checkbox-button">
                            <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                            <span class="checkbox-control"></span>
                            <span class="checkbox-label">Monday</span>
                        </label>
                        <label class="f6 db mb2 mid-gray checkbox-button">
                            <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                            <span class="checkbox-control"></span>
                            <span class="checkbox-label">Tuesday</span>
                        </label>
                        <label class="f6 db mb2 mid-gray checkbox-button">
                            <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                            <span class="checkbox-control"></span>
                            <span class="checkbox-label">Wednesday</span>
                        </label>
                        <label class="f6 db mb2 mid-gray checkbox-button">
                            <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                            <span class="checkbox-control"></span>
                            <span class="checkbox-label">Thursday</span>
                        </label>
                        <label class="f6 db mb2 mid-gray checkbox-button">
                            <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                            <span class="checkbox-control"></span>
                            <span class="checkbox-label">Friday</span>
                        </label>
                        <label class="f6 db mb2 mid-gray checkbox-button">
                            <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                            <span class="checkbox-control"></span>
                            <span class="checkbox-label">Saturday</span>
                        </label>
                        <label class="f6 db mb2 mid-gray checkbox-button">
                            <input type="checkbox" class="checkbox-input" id="choice1-1" name="choice1" />
                            <span class="checkbox-control"></span>
                            <span class="checkbox-label">Sunday</span>
                        </label>

                    </div>
                </div>

            </div>
        )
    }

}