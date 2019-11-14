import React, { Component } from 'react';
import { Card, Tabs, message, Icon } from 'antd'
import './style.scss';
const { TabPane } = Tabs;
export default class Tab extends Component {
    constructor(props){
        super(props);
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
          ];
          this.state = {
            activeKey: panes[0].key,
            panes,
          };

    }
    // 要定义初始变量
    newTabIndex = 0;

   
    callback = (key) => {
        message.info("选择了页签:" + key)
    };
    onChange = (activeKey) => {
        this.setState({
            activeKey,
        })

    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        // 当要关闭的和当前打开的是同一个key的时候,过滤掉当前激活的,并且默认打开第一个
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      };
    render() {

        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">Content1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图片" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={[<Icon type="plus" />, "Tab 1"]} key="1">Content1</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">Content2</TabPane>
                        <TabPane tab={[<Icon type="delete" />, "Tab 3"]} key="3">Content3</TabPane>
                        {/* 找不存在的话,需要img自定义设置 */}
                    </Tabs>
                </Card>
                <Card title="Tab动态增减" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.onChange} type="editable-card"
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panes) => {
                                return (<TabPane
                                    tab={panes.title}
                                    key={panes.key}
                                >{panes.content}</TabPane>)
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}
