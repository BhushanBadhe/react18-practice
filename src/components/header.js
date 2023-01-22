
const Header = (props) => {
  return (
    <>
      {/* <header style={{background:`${this.state.active ? 'red' : 'blue'}`}}> */}
      <header className={props.active ? "active" : "not-active"}>
        <div className="logo">Code News</div>
        <input className="header-input" onChange={props.keyword} />
        <button onClick={props.changeColor}>Click</button>
      </header>
    </>
  );

  // render() {

  // }
};

export default Header;
