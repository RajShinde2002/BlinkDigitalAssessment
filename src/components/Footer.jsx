import React from "react";
import { useSelector } from "react-redux";

const Footer = ({ activeTab }) => {
  const detailsBarData = useSelector((state) => state.yearly.filteredBoards);
  const key = Object.keys(detailsBarData)
  const selectedBoard = detailsBarData[key]|| {};
  const perSessionPrice =
    (selectedBoard.per_class_price &&
      selectedBoard.per_class_price.split(".")) ||
    [];
  return (
    <>
      {activeTab === 0 ? (
        <div className="footer-container">
          <div className="footer-top-row">
            <div className="flex-col">
              <span className="footer-discount">Filling out soon</span>
              <span className="footer-vacant-seats">
                Vacant Seats:{" "}
                <span style={{ color: "#FEE101" }}>
                  {selectedBoard.seats ? selectedBoard.seats:"N/A"} seats
                </span>
              </span>
              <span className="text-align-left">
                Not a classroom, but 1:1 sessions.
              </span>
            </div>

            <div className="flex-col">
              <span className="footer-discount">
                {selectedBoard.discount}% OFF
              </span>
              <span
                className="footer-vacant-seats"
              >
                Subscription cost:{" "}
                <span style={{ color: "#FEE101" }}>₹{selectedBoard.price ? selectedBoard.price:"N/A"}
                <span
                    style={{
                      textDecoration: "line-through",
                      marginLeft: "1rem",
                      fontSize: "1rem",
                    }}
                  >
                    ₹
                    {Math.round(
                      selectedBoard.price / (1 - parseFloat(selectedBoard.discount) / 100)
                    )}
                  </span>
                </span>
              </span>
              <span className="text-align-left">
                Per session cost is ₹{perSessionPrice[0] ? perSessionPrice[0] : "N/A"}
              </span>
              <span className="text-align-left">{perSessionPrice[1]}</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <button className="book-now"><a href="#">Book Now</a></button>
            </div>
          </div>
          <div className="footer-bottom-row">
            <span className="text-align-left">
              You can also avail a 8 inch and 10 inch tablet with your
              subscription
            </span>
            <span
              className="tAndC"
            >
              Guaranteed{" "}
              <a href="#" style={{ textDecoration: "underline" }}>
                terms & conditions
              </a>{" "}
              apply*
            </span>
          </div>
        </div>
      ) : (
        <div
          className="footer-container footer-monthly"
        >
          <div className="flex-col">
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "left",
              }}
            >
              Monthly classes let you choose <br className="dNone"/> your own course topics
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "2rem",
            }}
          >
            <div
              style={{
                fontSize: "1.2rem",
                color: "#FFFFFF",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Each session lasts 45 minutes
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <button type="button" className="book-now"><a href="#">Book Now</a></button>
            <span
              className="tAndC"
            >
              Refund same day{" "}
              <span style={{ textDecoration: "underline" }}>
                terms & conditions
              </span>{" "}
              apply*
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
