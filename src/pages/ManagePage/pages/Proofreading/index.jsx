import React, { Component } from 'react';
import Culture from '../../component/container/component/Cultural';

export default class Proofreading extends Component {

  render() {
    return (
      <Culture
        apiConfig={{
          situation:"Proofreading",
          role:"Proofreading",
          deleteFile: 'https://localhost:5000/api/file',
          fileInfos: 'https://localhost:5000/api/fileinfos',
          downloadFile: 'https://localhost:5000/api/file',
        }}
      ></Culture>
    )
  }
};