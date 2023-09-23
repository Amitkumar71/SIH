import React from "react";
import { MenuList } from "./List";
import MenuItem from "./Menu";
import { MenuList1 } from "./List1";
import MenuItem1 from "./Menu1";
import { MenuList2 } from "./List2";
import MenuItem2 from "./Menu2";
import "./FunActivities.css";

function Menu() {
  return (
    <><div className="menu">
      <h1 className="menuTitle">Fun Activities</h1>
      
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
            />
          );
        })}
      </div>
      <div className="submit-button">
          <button type="submit">More music...</button>
        </div>
    <div className="menuList">
      {MenuList1.map((menuItem, key) => {
        return (
          <MenuItem1
            key={key}
            image={menuItem.image}
            name={menuItem.name}
          />
        );
      })}
    </div>
    <div className="submit-button">
          <button type="submit">Explore more...</button>
    </div>
    <div className="menuList">
      {MenuList2.map((menuItem, key) => {
        return (
          <MenuItem2
            key={key}
            image={menuItem.image}
            name={menuItem.name}
          />
        );
      })}
    </div>
    <div className="submit-button">
          <button type="submit">More Yoga Poses...</button>
    </div>
    </div></>
    
  );
}

export default Menu;
