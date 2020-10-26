import React, { Component } from 'react';
import styles from '../Header/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <h1>News4You</h1>
      </header>
    );
  }
}
