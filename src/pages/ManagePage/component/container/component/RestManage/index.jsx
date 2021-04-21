import React, { Component } from 'react';
import { Table, Button, Space, Input, Checkbox, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios'
import dayjs from 'dayjs';

import "./index.scss"

const { Option } = Select;
class RestMange extends Component {

  state = {

    change: { Translation: "", Proofreading: "", Embellishment: "", user: "" },
    options: [
      { label: '翻译', value: 'Translation' },
      { label: '校对', value: "Proofreading" },
      { label: '测试', value: "Embellishment" },
    ],

    select: [],
    user: [],
    data: [],
    searchText: '',
    searchedColumn: '',
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys }

    );
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },

  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
  refresh() {
    axios.get("https://localhost:5000/api/admin/fileinfos")
      .then((res) => {
        this.setState({
          data: res.data
        });
      })
      .catch(() => { console.error('error') })

  };

  componentDidMount() {
    axios.get("https://localhost:5000/api/admin/fileinfos")
      .then((res) => {
        this.setState({
          data: res.data
        });
        let start = [];
        this.state.data.translation==="Translation"?start.push("Translation"):start.push();
        this.state.data.proofreading==="Proofreading"?start.push("Proofreading"):start.push();
        this.state.data.embellishment==="Embellishment"?start.push("Embellishment"):start.push();
        console.log(start)
        this.setState({select:start})
      })
      .catch(() => { console.error('error') })
  
    axios.get("https://localhost:5000/api/users")
      .then((res) => {
        this.setState({
          user: res.data
        });

      })
      .catch(() => { console.error('error') })
  };
  onDownload = (id) => {
    let url = "https://localhost:5000/api/file/?id=" + id
    window.open(url);
  }
  Upload = (e) => {
    const { files } = e.target;
    const file = files[0];

    const fm = new FormData();
    fm.append("File", file);
    fm.append('fileName', file.name);
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };

    axios.post('/api/file', fm, config).then(() => {
      this.refresh();
    })
      ;
  }
  Delete = (id) => {
    axios.delete("https://localhost:5000/api/file/?id=" + id)
      .then((res) => {
        alert("删除成功")
        this.refresh()
      }).catch((res) => {
        alert(res)
      });
  }
  groupChange = (id, index, e) => {
    
    let oldstate = this.state.data
    let newdata = {
      translation: !(e.indexOf("Translation") === -1),
      proofreading: !(e.indexOf("Proofreading") === -1),
      embellishment: !(e.indexOf("Embellishment") === -1)
    }
    console.log(newdata)
    let changedat = { ...this.state.data[index], ...newdata }
    oldstate[index] = changedat
    this.setState({ data: oldstate })
  }//文件完成情况变更

  userChange = (id, index, e) => { 
    let oldstate = this.state.data
    let newdata = {
      userId: e
    }
    let changedat = { ...this.state.data[index], ...newdata }
    oldstate[index] = changedat
    this.setState({ data: oldstate })

  }//负责人变更

  onChangeAll = (id, index) => {
    let userId = this.state.data[index].userId;
    let Translation = this.state.data[index].translation;
    let Proofreading = this.state.data[index].proofreading;
    let Embellishment = this.state.data[index].embellishment;

    const fm = new FormData();
    fm.append("userId", userId);
    fm.append("Translation", Translation);
    fm.append("Proofreading", Proofreading);
    fm.append("Embellishment", Embellishment);
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };
    axios.put("https://localhost:5000/api/fileinfo/?id=" + id, fm, config).then(() => {
      alert("成功")
    }).catch(() => { alert("失败") })
  }

  render() {
    let option = [];
    for (let i = 0; i < this.state.user.length; i++) {
      option.push(<Option value={this.state.user[i].userId}>{this.state.user[i].user}</Option>)
    }
    const columns = [
      {
        title: '文件名',
        dataIndex: 'name',
        align: "center",
        width: '20%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: "负责人",
        render: (
          (item, record, index) => {

            return (
              <div >
                <Space style={{ marginBottom: 16 }}>
                  <Select defaultValue={record.userId} style={{ width: 120 }} onChange={(value) => this.userChange(record.id, index, value, record)}>
                    {option}
                  </Select>
                </Space>
              </div>
            )
          }
        ),
        align: "center"
      },
      {
        title: "完成情况",
        render: (
          (item, record, index) => {

            return (
              <div >
                <Space style={{ marginBottom: 16 }}>
                  <Checkbox.Group options={this.state.options} 
                  defaultValue={[this.state.data[index].translation===true?"Translation":"",
                  this.state.data[index].proofreading===true?"Proofreading":"",
                  this.state.data[index].embellishment===true?"Embellishment":""
                ]}
                   onChange={(e) => this.groupChange(record.id, index, e)} />
                </Space>
              </div>
            )
          }
        ),
        align: "center"
      },
      {
        title: '最后更改时间',
        dataIndex: 'lastModityTIme',
        align: "center",
        width: '20%',
        render: (item) => {
          return dayjs(item).format('YYYY-MM-DD HH:mm:ss');
        },
      },
      {
        title: "操作",
        render: (
          (item, record, index) => {

            return (
              <div >
                <Space style={{ marginBottom: 16 }}>
                  <Button onClick={() => this.onDownload(record.id)}>下载</Button>
                  <Button onClick={() => this.Delete(record.id)}>删除 </Button>
                  <Button onClick={() => this.onChangeAll(record.id, index)}>确定更改 </Button>
                </Space>
              </div>
            )
          }
        ),
        align: "center"
      }
    ];

    const { loading, selectedRowKeys, data } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div className="cultural">
        <Space style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            重新加载
          </Button>
          <Input margin="5px" type="file" onChange={this.Upload} />
          <Button marginLeft="5px">
            批量下载
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </Space>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} rowKey="id" />
      </div>
    );
  }
}

export default RestMange;