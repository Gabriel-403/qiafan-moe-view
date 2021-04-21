import React, { Component } from 'react';
import { Route } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { onload } from '../../store/homePage/actions';
import ManageSidebar from "./component/Sidebar";
import ManageHeader from "./component/Header";
import Summary from "./component/container/component/Summary";

import './index.scss';
import Comment from './component/container/component/Comment';
import Translation from './pages/Translation';
import Test from "./pages/Test";
import Profreading from "./pages/Proofreading";
import  RoleManage from "../ManagePage/component/container/component/RoleManage"
import Register from "../ManagePage/component/container/component/Register"
import Uploads from "../ManagePage/component/container/component/Upload";
import RestManage from "../ManagePage/component/container/component/RestManage"

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
						<Route exact path="/manage/comment" component={Comment} />
						<Route exact path="/manage/test" component={Test} />
						<Route exact path="/manage/profreading" component={Profreading} />
						<Route exact path="/manage/rolemanage" component={RoleManage} />
						<Route exact path="/manage/register" component={Register} />
						<Route path="/manage/uploads" component={Uploads}/>
						<Route path="/manage/taskmanage" component={RestManage}/>
						
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