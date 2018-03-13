import React from 'react';
import {Layout,Icon} from 'antd';
let {Header, Footer, Sider}=Layout;
import NavDark from "../../components/NavDark/index";
import Logout from './subpage/Logout';
import navProps from './subpage/navProps';
import logo from '../../common/images/logo.png';

export default class Main extends React.Component{
	constructor(){
		super();
		this.state={
			collapsed:false,
		}
	}
	onCollapse=(collapsed)=>{
		this.setState({collapsed});
	};
	render(){
		let {collapsed}=this.state;
		return(
            <Layout style={{height:'100%'}}>
                <Sider
                    collapsed={collapsed}
                    collapsible={false}
                   	onCollapse={this.onCollapse}
                    width={200}
                    style={{boxShadow:'2px 0 6px rgba(134, 155, 116, 0.6)',backgroundColor:'rgba(134, 155, 116,1)'}}
                    breakpoint="md"
                >

                        <Header className="logoHeader" style={{backgroundColor:'rgb(224, 54, 54)'}}>
                            <img src={logo} alt="" className="logo"/>
	                        <div style={{display:collapsed?'none':'inline-block'}}>无锡公安<br/>锡山分局</div>
                        </Header>

						<NavDark {...navProps} inlineCollapsed={collapsed}/>
                </Sider>

                <Layout style={{height:'100%',backgroundColor:'#eee'}}>
                    <Header className="titleHeader">
	                    机动车驾驶人同步管控技术集成及示范
	                    <Logout/>
                    </Header>
					{this.props.children}
                    <Footer style={{textAlign:'center',height:'48px',paddingTop:'12px',paddingBottom:'12px'}}>Copyright <Icon type="copyright"/> 丰华联合科技有限公司 Inc. 2017</Footer>
                </Layout>
            </Layout>
		)
	}
}
import './index.less'

