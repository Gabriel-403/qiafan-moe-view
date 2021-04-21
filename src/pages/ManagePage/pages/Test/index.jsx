import React, { Component } from 'react';
import Culture from '../../component/container/component/Cultural';

export default class Test extends Component {

  render() {
    return (
      <Culture
        apiConfig={{
          situation:"Embellishment",
          role:"Test",
          fileInfos: 'https://localhost:5000/api/fileinfos',
          downloadFile: 'https://localhost:5000/api/file',
          deleteFile: 'https://localhost:5000/api/file',
        }}
      ></Culture>
    )
  }
};