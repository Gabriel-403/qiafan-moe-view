import React, { Component } from 'react';
import { Route } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { onload } from '../../store/homePage/actions';
import MangeSidebar from "./component/Sidebar/index";
import MangeHeader from "./component/Header/index";
import Culture from "./component/container/component/Cultural";
import Summary from "./component/container/component/Summary";

import './index.scss';
import Stuff from './component/container/component/Stuff';

class MangerPage extends Component {

	componentDidMount() {
		const { onload } = this.props;
		onload({ loading: false });
	}

	render() {
		console.log(this.props)
		return (<div>
	
			<section className="manager-container">
				<MangeHeader></MangeHeader>
				<section className="manager-body">
					<MangeSidebar></MangeSidebar>
					<main className="manager-content">
						<Route exact path="/manage/cultural" component={Culture} />
						<Route exact path="/manage/summary" component={Summary} />
						<Route exact path="/manage/stuff" component={Stuff} />
					</main>
				</section>
			</section>
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