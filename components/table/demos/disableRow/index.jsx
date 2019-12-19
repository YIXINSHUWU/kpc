import React from 'react';
import Table from 'kpc-react/components/table';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <Table scheme={{a: '奇数行不可点击'}}
                data={[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]}
                disableRow={(data, index) => index % 2 !== 0}
            />
        )
    }
}