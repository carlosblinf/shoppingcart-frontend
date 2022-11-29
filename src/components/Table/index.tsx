import { useShoppingCart } from '../../contex/ShoppingCartContex';
import style from './table.module.scss'

function Table() {
  const {orders} = useShoppingCart();

  return (
    <table className={style.table}>
    <thead>
      <tr>
        <th>OrderId</th>
        <th>Amound</th>
        <th>Status</th>
        <th>Create Date</th>
        <th>Items count</th>
        <th>User</th>
      </tr>

    </thead>
      <tbody>
        {orders?.map(order => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.total}</td>
          <td>{order.status}</td>
          <td>{order.createdAt}</td>
          <td>{order.orderItems.length}</td>
          <td>{order.userId}</td>
        </tr>
        ))}
      </tbody>
  </table>
  )
}

export default Table