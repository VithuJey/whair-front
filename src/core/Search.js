import React from 'react'

class Search extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         input: ""
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    // }

    // handleChange(event) {
    //     const {value} = event.target
    //     this.setState({
    //         input: value
    //     })
    // }

    componentDidMount(){
        this.nameInput.focus()
    }

    render(){
        return(

            <div className="search w-100 inter pa6">
                <div className="tl">
                    <span className="search">I'm looking for </span>
                    <input 
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder="Tommy"
                        // onChange={this.handleChange}
                        // value={this.state.input}
                        className="input"
                        ref={(input) => { this.nameInput = input; }} 
                    />
                </div>
                <div className="tl">
                    <span className="search">who used to work in </span>
                    <input 
                        type="text"
                        name="location"
                        placeholder="Marylebone"
                        // onChange={this.handleChange}
                        // value={this.state.input}
                        className="input"
                    />
                </div>
            </div>
        )
    }
}

export default Search