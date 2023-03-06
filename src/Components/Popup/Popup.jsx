/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useState } from 'react';
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import styled from 'styled-components';
import { getTokenPrice } from '../../api/api';
import { Options } from './Options';
import { Price } from './Price';

const OPTIONS = ["BTC", "ETH", "BNB"];

export const Popup = () => {
  const [activeToken, setActiveToken] = useState(null);
  const [price, setPrice] = useState(null);

  const handleGetTokenPrice = async (token) => {
    const resp = await getTokenPrice(`${token}USDT`);
    setPrice(resp?.data?.price ? Number(resp?.data?.price).toFixed(2) : null)
  }

  const handleSelectToken = (token) => {
    handleGetTokenPrice(token);
    setActiveToken(token);
    chrome?.storage?.local.set({ 'lastSelectedToken': token }, () => {
      console.log('lastSelectedToken:' + token);
    });
  }

  useEffect(() => {
    chrome?.storage?.local.get('lastSelectedToken', ({ lastSelectedToken }) => {
      handleSelectToken(lastSelectedToken ?? OPTIONS[0]);
    });
  }, [])

  return (
    <StyledPopup>
      <Options
        options={OPTIONS}
        activeToken={activeToken}
        onSelectToken={(token) => handleSelectToken(token)}
      />
      {
        activeToken &&
        <>
          <Price price={price} />
          <TradingViewWidget
            theme={Themes.DARK}
            symbol={`BINANCE:${activeToken}USD`}
            timezone="Etc/UTC"
            locale="ru"
            interval={"W"}
            enable_publishing={false}
            hide_top_toolbar={true}
            hide_legend={true}
            save_image={false}
            width={500}
            height={400}
          />
        </>
      }
    </StyledPopup >
  )
}

const StyledPopup = styled.div`
  padding: 20px;
`