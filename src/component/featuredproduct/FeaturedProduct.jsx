import React from "react";
import "./featuredproduct.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const FeaturedProduct = () => {
  return (
    <>
      <div className="featureProductContainer">
        <div className="featuredProductContainerLeft">
          <div className="featuredProductContainerLeftTop">
            <h1 className="featuredProductContainerLeftTopTitle">featured</h1>
            <div className="featureProductContainerTopIcons">
              <ChevronRightOutlinedIcon className="iconsRight" />
              <KeyboardArrowLeftOutlinedIcon className="iconsLeft" />
            </div>
          </div>
          <div className="featureProductConBottom">
            <div className="featuredProductCon">
              <div className="featureProductConBottomLeft">
                <h1 className="featureProductConTitle">featured</h1>
              </div>
              <div className="featureProductConBottomRight">
                <ProductionQuantityLimitsOutlinedIcon className="featuredIcon" />
                <SearchOutlinedIcon className="featuredIcon" />
              </div>
            </div>
            <div className="featureProConBottom">
              <img
                src="./images/malta.jpg"
                alt="this is a placeholder"
                className="featureProductImg"
              />
              <div className="featuredProConTitle">
                <h1 className="ProTitle">Jolly Jolly Bread Slice</h1>
                <p className="prie">N800</p>
              </div>
            </div>
          </div>
        </div>
        <div className="featuredContainerRight">
          <div className="featureProRightTop">
            <div className="featureProConTopLeftContainer">
              <ul>
                <li className="featureProConTopItems">speacial offers</li>
                <li className="featureProConTopItems"> new </li>
                <li className="featureProConTopItems">featured offer</li>
                <li className="featureProConTopItems">top seller offer</li>
              </ul>
            </div>
            <div className="featureProConTopRightContainer">
              <ChevronRightOutlinedIcon className="iconsRight" />
              <KeyboardArrowLeftOutlinedIcon className="iconsLeft" />
            </div>
          </div>
          <div className="featuredProConBottom">
            <div className="mainProContainer">
              <div className="mainProIcons">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="mainProInfoCon">
                <img src="./images/peakmilk.jpg" alt="" className="proImg" />
                <button className="addToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="mainProTitle">
                  <h1 className="proTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="proPrice">N4000</p>
                </div>
              </div>
            </div>
            <div className="mainProContainer">
              <div className="mainProIcons">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="mainProInfoCon">
                <img src="./images/onion.jpg" alt="" className="proImg" />
                <button className="addToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="mainProTitle">
                  <h1 className="proTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="proPrice">N4000</p>
                </div>
              </div>
            </div>
            <div className="mainProContainer">
              <div className="mainProIcons">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="mainProInfoCon">
                <img src="./images/manyyam.jpg" alt="" className="proImg" />
                <button className="addToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="mainProTitle">
                  <h1 className="proTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="proPrice">N4000</p>
                </div>
              </div>
            </div>
            <div className="mainProContainer">
              <div className="mainProIcons">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="mainProInfoCon">
                <img src="./images/yam.jpg" alt="" className="proImg" />
                <button className="addToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="mainProTitle">
                  <h1 className="proTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="proPrice">N4000</p>
                </div>
              </div>
            </div>
            <div className="mainProContainer">
              <div className="mainProIcons">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="mainProInfoCon">
                <img src="./images/custard.jpg" alt="" className="proImg" />
                <button className="addToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="mainProTitle">
                  <h1 className="proTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="proPrice">N4000</p>
                </div>
              </div>
            </div>
            <div className="mainProContainer">
              <div className="mainProIcons">
                <SearchOutlinedIcon className="mainProIcon" />
              </div>
              <div className="mainProInfoCon">
                <img src="./images/heinz.jpg" alt="" className="proImg" />
                <button className="addToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="mainProTitle">
                  <h1 className="proTitle">Burger Peanuts Snack by Nkatie</h1>
                  <p className="proPrice">N4000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
