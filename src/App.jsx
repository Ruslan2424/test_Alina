/* eslint-disable no-console */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import { Modal } from './modal/Modal';
import { ModalNew } from './modal/ModalNew';

const listProduct = [
  {
    id: 1,
    imageUrl: 'some url here',
    name: 'Product nameS',
    count: 19,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: '',
  },
  {
    id: 2,
    imageUrl: 'some url here',
    name: 'Product nameB',
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: '',
  },
  {
    id: 3,
    imageUrl: 'some url here',
    name: 'Product nameA',
    count: 4000,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: '',
  },
];

const comment = {
  id: 3,
  productId: 1,
  description: 'some text here',
  date: '14:00 22.08.2021',
};

export const App = () => {
  const [list, setList] = useState(listProduct);
  const [modal, setModal] = useState(true);
  const [modalNew, setModalNew] = useState(true);
  const [idremove, setIdremove] = useState('');
  // eslint-disable-next-line padding-line-between-statements
  // eslint-disable-next-line no-console

  const sortCount = () => {
    setList([...list.sort((a, b) => a.count - b.count)]);
  };

  const sortName = () => {
    setList([...list.sort((a, b) => a.name.localeCompare(b.name))]);
  };

  const remove = (id) => {
    setIdremove(id);
  };

  const addmodal = (a) => {
    setModal(!modal);
    if (a) {
      console.log(idremove);
      setList(prevCart => prevCart.filter(ele => ele.id !== idremove));
    }
  };

  const addmodalNew = (name, a) => {
    setModalNew(!modalNew);
    if (a) {
      setList([
        ...list,
        {
          id: uuidv4(),
          imageUrl: 'some url here',
          name,
          count: 4000,
          size: {
            width: 200,
            height: 200,
          },
          weight: '200g',
          comments: '',
        },
      ]);
    }
  };

  return (
    <>
      <h1>listProduct</h1>
      <button
        type="button"
        className="btn btn-dark"
        onClick={sortName}
      >
        Sort by name
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={sortCount}
      >
        Sort by count
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={addmodalNew}
      >
        Add new
      </button>
      <div className="starter">
        {list.map(ele => (
          <div className="car" key={ele.id}>
            <img src="" className="card-img-top" alt={ele.imageUrl} />
            <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <p className="card-text">Короткий опис</p>
              <p className="card-text">
                Залишки:
                {ele.count}
              </p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  addmodal();
                  remove(ele.id);
                }}
              >
                Delete Product
              </button>
            </div>
          </div>
        ))}
        <Modal addmodal={addmodal} modal={modal} />
        <ModalNew addmodalNew={addmodalNew} modalNew={modalNew} />
      </div>
    </>
  );
};
