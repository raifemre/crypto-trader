import React from 'react';

import ChartHeader from './ChartHeader';
import Chart from './Chart';
import WebsocketChart from './WebsocketChart';
import Scratchpad from './Scratchpad';
import Log from './Log';

const Dashboard = props => (
  (
    <div className="dashboard">
      <div className="top-container">
        <div className="left-container">
          <ChartHeader
            chart={props.chart}
            selectedProductIds={props.profile.selectedProducts.map(p => (p.value))}
            websocket={props.websocket}
            selectProduct={props.selectProduct}
            setGanularity={props.setGranularity}
            setProductData={props.setProductData}
            selectIndicator={props.selectIndicator}
            editIndicator={props.editIndicator}
            selectDateRange={props.selectDateRange}
            setProducts={props.setProducts}
            setProductWSData={props.setProductWSData}
            setFetchingStatus={props.setFetchingStatus}
          />
          <div className="chart-container">
            <Chart
              chart={props.chart}
            />
            <WebsocketChart
              scripts={props.scripts}
              profile={props.profile}
              products={props.chart.products}
              websocket={props.websocket}
              addOrder={props.addOrder}
              appendLog={props.appendLog}
              addProductData={props.addProductData}
              setProductData={props.setProductData}
              setProductWSData={props.setProductWSData}
            />
          </div>
        </div>
        <div className="right-container">
          <Log log={props.log} />
        </div>
      </div>
      <Scratchpad
        className="bottom-container"
        scripts={props.scripts}
        products={props.chart.products}
        profile={props.profile}
        addOrder={props.addOrder}
        addScript={props.addScript}
        appendLog={props.appendLog}
        saveScript={props.saveScript}
        deleteScript={props.deleteScript}
        saveTestResult={props.saveTestResult}
        selectScript={props.selectScript}
        selectProductDoc={props.selectProductDoc}
        toggleScriptLive={props.toggleScriptLive}
        updateAccounts={props.updateAccounts}
      />
    </div>
  )
);

export default Dashboard;