import React, { Component } from 'react';
import { Route } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { onload } from '../../store/homePage/actions';
import MangeSiderbar from "./component/Sidebar";
import MangeHeader from "./component/Header"
import Culture from "./component/container/component/Cultural"
import Summary from "./component/container/component/Summary"

import './index.scss';

class MangerPage extends Component {

	componentDidMount() {
		const { onload } = this.props;
		onload({ loading: false });
	}

	render() {
		console.log(this.props)
		return (
			<section className="manager-container">
				<MangeHeader></MangeHeader>
				<section className="manager-body">
					<MangeSiderbar>	</MangeSiderbar>
					<main className="manager-content">
						<Route exact path="/manage/cultural" component={Culture} />
						<Route exact path="/manage/summary" component={Summary} />
					</main>
				</section>
			</section>
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