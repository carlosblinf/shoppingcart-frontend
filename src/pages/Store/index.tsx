import React, { useEffect, useRef, useState } from 'react';
import Form from '../../components/Form';
import Table from '../../components/Table';
import { useShoppingCart } from '../../contex/ShoppingCartContex';
import style from './store.module.scss'


function Store() {

  return (
    <div className={style.store + " container"}>
      <div className={style.storeContainer}>
        <Form />
        <Table />
        
      </div>
    </div>
  )
}

export default Store