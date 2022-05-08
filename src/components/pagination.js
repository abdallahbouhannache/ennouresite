import React from "react";

function Paginate() {
  //     <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  // <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  // <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  // .pagination>li>a, .pagination>li>span { border-radius: 50% !important;margin: 0 5px;}
  const st = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="container" style={st}>
      <ul className="pagination">
        <li className="disabled">
          <a href="#">«</a>
        </li>
        <li className="active">
          <a href="#">
            1 <span className="sr-only">(current)</span>
          </a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">»</a>
        </li>
      </ul>
    </div>
  );
}

export default Paginate;
