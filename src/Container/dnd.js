

import { useState, useRef } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = { ITEM: "ITEM" };

function DraggableItem({ item, index, moveItem }) {
  const ref = useRef(null);
  const [, drag] = useDrag({
    type: ItemTypes.ITEM,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} className="draggable-item">
      {item}
    </div>
  );
}

function ItemDrop() {
  const [items, setItems] = useState(["Ashish", "DDF", "React", "JavaScript"]);
  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    [updatedItems[fromIndex], updatedItems[toIndex]] = [updatedItems[toIndex], updatedItems[fromIndex]];
    setItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        {items.map((item, index) => (
          <DraggableItem key={index} item={item} index={index} moveItem={moveItem} />
        ))}
      </div>
    </DndProvider>
  );
}

export default ItemDrop;

