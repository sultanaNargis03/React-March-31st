const laptops = [
  {
    id: "23",
    name: "Notebook",
    manufacturer: "Asus",
    ram: "8",
    isProModel: false,
  },
  {
    id: "33",
    name: "Macbook air",
    manufacturer: "Apple",
    ram: "8",
    isProModel: false,
  },
  {
    id: "34",
    name: "Surface pro",
    manufacturer: "Microsoft",
    ram: "16",
    isProModel: true,
  },
  {
    id: "21",
    name: "Macbook pro",
    manufacturer: "Apple",
    ram: "24",
    isProModel: true,
  },
];
function Laptops() {
  const listLaptops = laptops.map((laptop) => (
    <li
      style={{
        backgroundColor: laptop.isProModel ? "blue" : "red",
        color: "white",
        fontWeight: laptop.isProModel ? "bold" : "normal",
      }}
      key={laptop.id}
    >
      {laptop.name} from {laptop.manufacturer} with {laptop.ram} gbs
    </li>
  ));
  return <ul>{listLaptops}</ul>;
}
export default Laptops;
