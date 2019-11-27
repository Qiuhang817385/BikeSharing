import React from 'react';
import { Select } from 'antd'
const Option = Select.Option;
export default {
    formateDate(date) {
        if (!date) return '';
        let time = new Date(date);
        return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + "   " +
            time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    },
    pagination(data, callback) {
        let page = {
            onChange: (current) => {
                callback(current)
            },
            current: data.result.page,
            pageSize: data.result.page_size,
            total: data.result.total,
            // 用于显示数据的总量和当前的数据
            showTotal: () => {
                return `共${data.result.total}条`
            },
            // 是否快速跳转到某页
            showQuickJumper: true
        }
        return page;

    },
    getOptionList(data) {
        if (!data) {
            return [];
        }
        let options = [] //[<Option value="0" key="all_key">全部</Option>];
        data.map((item) => {
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options;
    }
}