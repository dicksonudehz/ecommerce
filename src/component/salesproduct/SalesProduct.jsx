import React from "react";
import "./salesproduct.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SalesProduct = () => {
  return (
    <>
      <div className="salesProductCon">
        <div className="salesProConLeft">
          <div className="salesProConTopCon">
            <div className="salesProTopTitleItem">
              <h1>enjoyment ministry</h1>
            </div>
            <div className="salesProSubTitle">
              <ul>
                <li>provisions</li>
                <li>drip of flavour</li>
                <li>self-care</li>
              </ul>
            </div>
            <div className="salesProTopIcon">
              <ChevronRightOutlinedIcon className="salesIconLeft" />
              <KeyboardArrowLeftOutlinedIcon className="salesIconRight" />
            </div>
          </div>
          <div className="mainProSalesContainer">
            <div className="saleProConLeftBottom">
              <div className="salesProConTop">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="salesProInfoCon">
                <img src="./images/milo.jpg" alt="" className="salesProImg" />
                <button className="salesAddToCart">Add to cart </button>
                <div className="salesProTopTitle">
                  <h1 className="salesTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="salesPrice">N4000</p>
                </div>
              </div>
            </div>
            <div className="saleProConLeftBottom">
              <div className="salesProConTop">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="salesProInfoCon">
                <img
                  src="./images/custard.jpg"
                  alt=""
                  className="salesProImg"
                />
                <button className="salesAddToCart">Add to cart </button>
                <div className="salesProTopTitle">
                  <h1 className="salesTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="salesPrice">N4000</p>
                </div>
              </div>
            </div>
            <div className="saleProConLeftBottom">
              <div className="salesProConTop">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="salesProInfoCon">
                <img src="./images/labis.jpg" alt="" className="salesProImg" />
                <button className="salesAddToCart">Add to cart </button>
                <div className="salesProTopTitle">
                  <h1 className="salesTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="salesPrice">N4000</p>
                </div>
              </div>
            </div>
            <div className="saleProConLeftBottom">
              <div className="salesProConTop">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="salesProInfoCon">
                <img
                  src="./images/palmwine.jpg"
                  alt=""
                  className="salesProImg"
                />
                <button className="salesAddToCart">Add to cart </button>
                <div className="salesProTopTitle">
                  <h1 className="salesTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="salesPrice">N4000</p>
                </div>
              </div>
            </div>
            <div className="saleProConLeftBottom">
              <div className="salesProConTop">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="salesProInfoCon">
                <img
                  src="./images/tigernut.jpg"
                  alt=""
                  className="salesProImg"
                />
                <button className="salesAddToCart">Add to cart </button>
                <div className="salesProTopTitle">
                  <h1 className="salesTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="salesPrice">N4000</p>
                </div>
              </div>
            </div>
            <div className="saleProConLeftBottom">
              <div className="salesProConTop">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="salesProInfoCon">
                <img src="./images/heinz.jpg" alt="" className="salesProImg" />
                <button className="salesAddToCart">Add to cart </button>
                <div className="salesProTopTitle">
                  <h1 className="salesTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="salesPrice">N4000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="salesProContainerRight">
          <div className="salesTopItems">
            <div className="salesProContTopTitle">
              <h1>on sales</h1>
            </div>
            <div className="salesProIcons">
              <KeyboardArrowLeftOutlinedIcon />
              <ChevronRightOutlinedIcon />
            </div>
          </div>
          <div className="salesProductConBottomRight">
            <ProductionQuantityLimitsOutlinedIcon className="salesProIcon" />
            <SearchOutlinedIcon className="salesProIcon" />
          </div>
          <div className="saleProdContainerContent">
            <div className="salesProductConBottomRightCon">
              <p className="percentageBarge">3%</p>
              <p className="featuredBarge">featured</p>
            </div>
            <img src="./images/malt.jpg" alt="" className="salesImage" />
          </div>

          <div className="salesProConTitle">
            <h1 className="salesProdName">Jolly Jolly Bread Slice</h1>
            <div className="priceContainer">
              <p className="formalPrice">N1500</p>
              <p className="currentPrice">N800</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesProduct;
