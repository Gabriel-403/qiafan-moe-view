import React, { Component } from 'react';
import Culture from '../../component/container/component/Cultural';

export default class Translation extends Component {

  render() {
    return (
      <Culture
        apiConfig={{
          fileInfos: 'https://localhost:5000/api/fileinfos'
        }}
      ></Culture>
    )
  }
};