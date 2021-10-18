import React from "react";
import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";
//   import "react-accessible-accordion/dist/fancy-example.css";


const Home = () => {
    return(
        <Accordion allowZeroExpanded  className="accord">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>基本情報（FE）</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel><Link to="/card">１．セキュリティ</Link></AccordionItemPanel>
          <AccordionItemPanel>２．データベース</AccordionItemPanel>
          <AccordionItemPanel>３．ネットワーク</AccordionItemPanel>
          <AccordionItemPanel>４．ハードウェア</AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>応用情報（AP）</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>１．セキュリティ</AccordionItemPanel>
          <AccordionItemPanel>２．データベース</AccordionItemPanel>
          <AccordionItemPanel>３．ネットワーク</AccordionItemPanel>
          <AccordionItemPanel>４．ハードウェア</AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>スペシャル</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>OKASEN.</AccordionItemPanel>
          <AccordionItemPanel>Kosukegawa</AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    )
}

export default Home