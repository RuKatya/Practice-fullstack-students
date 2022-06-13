import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { getListItem } from "./listItems";

const Orders = () => {
  let items = getListItem();
  console.log(items);

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>ORDERS</h1>
      <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />

      {items
        .filter((invoice) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = invoice.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((order) => {
          return (
            <Link key={order.id} to={order.id}>
              <div>{order.name}</div>
            </Link>
          );
        })}

      <Outlet />
    </div>
  );
};

export default Orders;
