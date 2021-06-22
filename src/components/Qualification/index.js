import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import tallboy from "../../assets/images/tallboy.jpg";

import "./style.css";

/**
 * @author
 * @function Qualification
 **/

const Qualification = (props) => {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <MediumHeading text="A little bit about me...." />
      <SmallHeading text={"My Education"} />
      <div
        className="flexRow flexCol align-center justify-sb"
        style={{ margin: "50px 0" }}
      >
        <div data-aos="fade-up-right">
          <img src={tallboy} alt="" />
          <div
            style={{
              background: "#fff",
              padding: "10px 10px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <div className="mlr-10">
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button label="Useless Button" inverse={true} />
            </div>
          </div>
        </div>
        <div>
          <Tile
            title="Education"
            mediumTitle="B.S. Plant Physiology / M.S. Organic Chemistry"
            desc="Research based on American Chestnut / American Clandestine"
          />
          <Tile
            title="Future Goals and Aspirations"
            mediumTitle="Travel, front-end development, ride more bikes"
            desc="in no particular order..."
          />
          <Tile
            title="Current Digs"
            mediumTitle="NYC bike messenger"
            desc="Working hard or hardly workin"
          />
        </div>
      </div>
    </div>
  );
};


export default Qualification;
