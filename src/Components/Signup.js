import React, {Component} from "react"
//so signup should instantly take you to a page that 
//lets you create an account
//then at the bottom of the page there should be a link
//that leads you to be able to sign into your account if already have one
class Signup extends Component{
    constructor(){
        super()
        this.state={
            email: "",
            password: "",
            reEnteredPassword:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(id){
        if(this.state.password != this.state.reEnteredPassword){
            alert("Your passwords do not match!")
            //isValidForm = false
        }
    }

    render(){
        return(
            <div>
                <box>

                    <form onSubmit="return isValidForm()">
                        <input type="text" name="email" value={this.state.email}
                        placeholder="email" onChange={this.handleChange}/>
                        <br />
                        <input type="password" name="password" value={this.state.password}
                        placeholder="password" onChange={this.handleChange}/>
                        <br />
                        <input type="password" name="reEnteredPassword" value={this.state.reEnteredPassword}
                        placeholder="Re-enter password" onChange={this.handleChange}/>
                        <br />
                        <button onClick={this.handleClick}>Submit</button>
                    </form>
                    <p>Already have an account?</p>
                    <p>Then sign in here</p>
                </box>
            </div>
        )
    }
}


export default Signup