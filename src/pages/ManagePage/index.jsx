import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { onload } from '../../store/homePage/actions';
import MangeSiderbar from "./component/sidebar";
import MangeHeader from "./component/header"

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