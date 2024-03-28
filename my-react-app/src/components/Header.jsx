function Header() {
  const list = ["Home", "All restaurants", "About"];
  let arr = list.map((el) => {
    return <li className="list">{el}</li>;
  });
  return (
    <ul>
      <li>{arr}</li>
    </ul>
  );
}

export default Header;
