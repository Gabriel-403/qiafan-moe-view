import React, { Component } from 'react';
import { Table, Button, Space, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios'
import dayjs from 'dayjs';

import "./index.scss"

class Culture extends Component {
  static defaultProps = {
    apiConfig: {
      fileInfos: 'https://localhost:5000/api/fileinfos',
      deleteFile: '',
      deleteSelectedFiles: '',
      uploadFile: '',
      uploadSelectedFiles: '',
      downloadFile: '',
      downloadSelectedFiles: '',
    }
  }

  state = {
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
    render: text => {
      let _text = text;

      if (typeof text === 'boolean') {
        _text = text ? '是' : '否';
      }

      return this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={_text}
        />
      ) : (
          _text
        )
    }
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

  componentDidMount() {
    const { apiConfig } = this.props;
    axios.get(apiConfig.fileInfos)
      .then((res) => {
        console.log(res);

        this.setState({
          data: res.data
        });
      })
      .catch(() => { console.error('error') })
    console.log('componentDidMount')
  };

  onDownload = (id) => {
    console.debug('download', id);
  }

  downloadSeleted = () => {
    const { selectedRowKeys } = this.state;
    axios.post('', {

    });
  }

  render() {
    const columns = [
      {
        title: '文件名',
        dataIndex: 'name',
        align: "center",
        width: '20%',
        ...this.getColumnSearchProps('name'),

      },
      {
        title: '完成情况',
        dataIndex: 'translation',
        align: "center",
        width: '15%',
        ...this.getColumnSearchProps('translation'),
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
          (item, record) => {
            // console.debug(record);
            return (
              <div>
                <Space style={{ marginBottom: 16 }}>
                  <Button onClick={() => this.onDownload(record.id)}>下载</Button>
                  <Button>上传</Button>
                  <Button>删除</Button>
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
      <div>
        <Space style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            重新加载
          </Button>
          <Button margin="5px" onClick={this.downloadSeleted}>
            批量上传
          </Button>
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

export default Culture;