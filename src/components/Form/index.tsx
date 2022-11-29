import React, { useEffect, useRef, useState } from 'react';
import { useShoppingCart } from '../../contex/ShoppingCartContex';
import style from './form.module.scss'

type Values = {
  name : string,
  description : string,
  stock : number,
  price : number,
  imageUrl: string,
  category_id: number|string,
}

function Form() {
  const { categories, createProduct, createCategory } = useShoppingCart();

  const [values, setValues] = useState<Values>({
    name: '',
    description: '',
    stock: 0,
    price: 0,
    imageUrl: 'https://api.lorem.space/image/furniture?w=350&h=350',
    category_id: 0,
  })

  const refCategory = useRef<HTMLInputElement>(null);


  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>):void => {
    setValues({...values,[e.target.name] : e.target.value});
  }
  const handleOnSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createProduct(values.name,values.description,values.stock,values.price,values.imageUrl,values.category_id,);

  }

  const handleOnSend = (e:React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const name = refCategory.current?.value || ""
    createCategory(name);

  }
  
  return (
    <div className={style.form}>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <div>
            <label htmlFor="name">Category name</label>
            <input onChange={handleOnChange} type="text" id="name" name="name" placeholder="name.." />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <input onChange={handleOnChange} type="text" id="description" name="description" placeholder="description.." />
          </div>
        </div>

        <div className="form-group">
          <div>
            <label htmlFor="stock">Stock quantity</label>
            <input onChange={handleOnChange} type="number" id="stock" name="stock" placeholder="stock.." />
          </div>

          <div>
            <label htmlFor="price">The price</label>
            <input onChange={handleOnChange} type="number" id="price" name="price" placeholder="price.." />
          </div>
        </div>

        <div className={style.imageUrl}>
          <label htmlFor="imageUrl">Image Url</label>
          <input onChange={handleOnChange} type="text" id="imageUrl" name="imageUrl" placeholder="https://api.lorem.space/image/furniture?w=350&h=350" value={values.imageUrl} />
        </div>

        <div className="form-group">
          <div className={style.select_category}>
            <label htmlFor="category">Category</label>
            <select defaultValue="0" onChange={handleOnChange}  id="category_id" name="category_id">
            <option value="0" disabled>
              Choose category
            </option>
            {categories?.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className={style.category}>
            <input ref={refCategory} type="text" id="category" name="category" placeholder="new caegory.." />
            <button onClick={handleOnSend}>add category</button>
          </div>
        </div>
      
        <input type="submit" value="New Product" />
      </form>
    </div>
  )
}

export default Form