import React from "react";
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="patch" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form> 
  );
}

export async function action({ params }) {
  await updateOrder(params.id, {
    priority: true,
  });
  return null;
}
export default UpdateOrder;
