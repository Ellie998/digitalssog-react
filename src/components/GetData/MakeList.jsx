import classes from "./MakeList.module.css";
import { NavLink, useLocation } from "react-router-dom";

function MakeList({ FunctionOrApp, ListObjects }) {
  const url = useLocation();
  const params = url.search.slice(1);
  const keyword = decodeURI(params);

  const categorys = ["🔔 new", "👑 hot", "📞 전화, 문자", "👥 sns"];

  return (
    <ul className={classes.MakeList}>
      {categorys.map((categoryName) => {
        let categoryRealName = categoryName.slice(3, categoryName.length);
        return (
          <li key={categoryRealName}>
            <NavLink to={`?${categoryRealName}`}>
              {({ isActive }) => (
                <button
                  value={categoryRealName}
                  data-tooltip="클릭!"
                  style={
                    keyword === categoryRealName
                      ? {
                          backgroundColor: "rgba(255, 255, 255, 0.431)",
                          transform: "translateY(-6px)",
                        }
                      : {}
                  }
                  className={
                    keyword === categoryRealName ? classes.clicked : undefined
                  }>
                  {/* // className={isActive? "active":""}
                  // style={{ fontWeight: isActive ? "bold" : "" }}> */}
                  {categoryName}
                </button>
              )}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default MakeList;
