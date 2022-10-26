import React from "react";
import CoinItem from "./CoinItem";
import "./coins.css";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";

export const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p className="coin-name"></p>
          <p>Rank</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile"> Volume</p>
          <p className="hide-mobile"> Mrk cap</p>
        </div>

        {props.coins &&
          props.coins.map((coins) => {
            return (
              <Link
                excat
                to={`/coin/${coins.id}`}
                element={<Coin />}
                key={coins.id}
              >
                <CoinItem coins={coins} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
