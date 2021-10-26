import {Component} from "react";

export default class NotFound extends Component {

    componentDidMount() {
        return this.props.history.push('/')
    }

    render() {
        return null
    }
}