import React, { Component } from 'react';
import { BrowserRouter as Route } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { onload } from '../../store/homePage/actions';
import MangeSiderbar from "./component/Sidebar";
import MangeHeader from "./component/Header"
import Culture from "./component/container"
import router from '../../routers';

class MangerPage extends Component {

	componentDidMount() {
		const { onload } = this.props;
		onload({ loading: false });
	}

	render() {
		console.log('render')
		return (
			<div>
				<MangeHeader></MangeHeader>
				<MangeSiderbar>	</MangeSiderbar>
				<Route path="cultural"  component={Culture} />

			</div>

		);
	}
}

const ProvidedMangerPage = connect(
	(state) => ({
		homePageState: state.homePage,
	}),
	(dispatch) => bindActionCreators({
		onload
	}, dispatch)
)(MangerPage)

export default ProvidedMangerPage;