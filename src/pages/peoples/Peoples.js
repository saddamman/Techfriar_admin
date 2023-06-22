import React from "react";
import MainTemplate from "../../UI/MainTemplate";
import Header from "../../components/Header";
import Button from "../../UI/Button";
import PeopleList from "./PeopleList";

import serchIcon from "../../assets/icons/search-icon.svg";
import filterIcon from "../../assets/icons/filter-icon.svg";
import listViewIcon from "../../assets/icons/list-view-icon.svg";
import gridViewIcon from "../../assets/icons/grid-view-icon.png";
import chaneingIcon from "../../assets/icons/chaneing-icon.png";

const People = () => {
  return (
    <MainTemplate className="people">
      <Header className="peopleHeader">
        <div className="peopleHeader__leftBx">
          <h2>
            People <Button className="peopleHeader__btn">+</Button>
          </h2>
        </div>
        <div className="people__rightBx">
          <form>
            <div className="people__searchBx">
              <Button>
                <img src={serchIcon} alt="searh" />
              </Button>
              <input type="search" placeholder="Search" />
            </div>
            <Button className="people__searchBx people__searchBx--filter">
              <img src={filterIcon} alt="searh" />
              <span> Filter</span>
            </Button>
          </form>
        </div>
      </Header>
      <section className="peopleContent">
        <div className="viewFilterRow">
          <div className="viewFilter">
            <Button>
              <img src={listViewIcon} alt="searh" />
            </Button>
            <Button>
              <img src={gridViewIcon} alt="searh" />
            </Button>
            <Button>
              <img src={chaneingIcon} alt="searh" />
            </Button>
          </div>
        </div>
        <PeopleList />
      </section>
    </MainTemplate>
  );
};

export default People;
