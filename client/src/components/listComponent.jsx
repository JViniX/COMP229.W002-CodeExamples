import RowComponent from './rowComponent';  // Assuming RowComponent is in the same directory

const ListComponent = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <RowComponent key={index} item={item} />
      ))}
    </div>
  );
};

export default ListComponent;
