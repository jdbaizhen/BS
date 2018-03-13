import React from 'react';
import {Layout} from 'antd';
import {connect} from 'react-redux';
import Title from "../../components/Title/index";
import MyTree from "../../components/MyTree/index";
import DataTable from './DataTable';
import * as action from '../../redux/actions/data';

class Data extends React.Component {
	render() {
		let {roadData, setSearchId,id} = this.props;
		let treeProps = {
			title:'选择车道摄像头',
			data: roadData,
			treeNum: 3,
			callback: setSearchId,
			maxHeight:'90%',
			defaultSelectedKeys:id?id:['0-0-0'],
			myStyle: {
				margin: '6px',
				position: 'absolute',
				top: '21px',
				left: '10px',
				zIndex: '10'
			}
		};
		return (
			<Layout>
				<Title tier1='数据管理'/>
				<Layout style={{
					position: 'relative',
					top: '0',
					left: '0'
				}}>
					<MyTree {...treeProps}/>
					<DataTable/>
				</Layout>
			</Layout>
		)
	}
}

export default connect(
	state => ({...state.mapDataR,id:state.dataTermR.id}),
	action
)(Data)