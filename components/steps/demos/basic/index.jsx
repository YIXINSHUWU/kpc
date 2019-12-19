import React from 'react';
import {Steps, Step} from 'kpc-react/components/steps';
import Button from 'kpc-react/components/button';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "index": 0
        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous() {
        this.setState({index: this.state.index - 1});
    }
    
    next() {
        this.setState({index: this.state.index + 1});
    }
    
    render() {
        return (
            <div>
                <Steps value={this.state.index} on$change-value={(c, index) => this.setState({index})}>
                    <Step title="选择配置">请选择主机的配置信息</Step>
                    <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
                    <Step title="设置VPC" />
                </Steps>
                <Button type="primary" onClick={this.previous}
                    disabled={this.state.index === 0}
                >Previous Step</Button>
                <Button type="primary" onClick={this.next}
                    disabled={this.state.index === 2}
                >Next Step</Button>
            </div>
        )
    }
}