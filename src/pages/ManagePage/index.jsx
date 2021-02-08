import React, { Component } from 'react';
import { Route } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { onload } from '../../store/homePage/actions';
import ManageSidebar from "./component/Sidebar";
import ManageHeader from "./component/Header";
import Summary from "./component/container/component/Summary";

import './index.scss';
import Stuff from './component/container/component/Stuff';
import Translation from './pages/Translation';

class MangerPage extends Component {

	componentDidMount() {
		const { onload } = this.props;
		onload({ loading: false });
	}

	render() {
		console.log(this.props)
		return (<div>
	
			<section className="manager-container">
				<ManageHeader></ManageHeader>
				<section className="manager-body">
					<ManageSidebar></ManageSidebar>
					<main className="manager-content">
						<Route exact path="/manage/translation" component={Translation} />
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