import { useItemsContext } from "@hooks";
import { nanoid } from "nanoid";

export const InsertionSort = () => {
  const { items } = useItemsContext();

  return (
    <div className="absolute left-0 bottom-0 h-[450px] w-screen">
      <div className="flex h-full items-end">
        {items.map((item, index) => (
          <div
            className="flex-1 rounded-t-md border"
            style={{ height: `${item / 7}%`, backgroundColor: "#fff" }}
            id={`${index}`}
            key={nanoid()}
          />
        ))}
      </div>
    </div>
  );
};
