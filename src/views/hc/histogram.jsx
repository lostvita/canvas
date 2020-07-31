import React, { useState  } from 'react'
import 'scss/hc/histogram.scss'
import { Table, InputNumber } from 'element-react'

function HcHistogram() {
  const [columns] = useState([{
    label: "日期",
    prop: "date",
    width: 180
  }, {
    label: "负债",
    prop: "debt",
    width: 180,
    render: function(data) {
      return <span>
        <InputNumber controls={false} size="small" placeholder="请输入内容" defaultValue={data.debt} />
      </span>
    }
  }, {
    label: "股东权益",
    prop: "equity",
    render: function(data) {
      return <span>
        <InputNumber controls={false} size="small" placeholder="请输入内容" defaultValue={data.equity} />
      </span>
    }
  }])
  const [data] = useState([{
    date: '2016',
    debt: 5,
    equity: 3
  },{
    date: '2017',
    debt: 7,
    equity: 7
  },{
    date: '2018',
    debt: 10,
    equity: 18
  },{
    date: '2019',
    debt: 15,
    equity: 30
  },{
    date: '2020',
    debt: 16,
    equity: 37
  }])
  return <div className="view bargraph-wrapper">
    <div className="bargraph-control">
    <Table
      style={{width: '100%'}}
      border={true}
      columns={columns}
      maxHeight={200}
      data={data}
    />
    </div>
    <div className="bargraph">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
}

export default HcHistogram