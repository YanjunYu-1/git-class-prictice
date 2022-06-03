const Header = (props) => {
    return ( 
        <div className="top">
        <div className="budget">
          <div className="budget__title">
            Available Budget in{" "}
            <span className="budget__title--month">April 2020</span>:
          </div>

          <div className="budget__value">+ $225.10</div>

          {props.children}

          
        </div>
      </div>
     );
}
 
export default Header;