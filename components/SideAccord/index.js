import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import SideItem from "../SideItem";

const DevNavExpandable = styled.li`
  border-top: 1px solid #dadce0;
  padding: 11px 0;
  line-height: 20px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
`;

const DevExpandableNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`;

const DevNavToggle = styled.a`
  color: #5f6368;
  font-size: 24px;
  margin-block: 0;
  margin-inline: 0 8px;
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -moz-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  text-decoration: none;
  transition: transform 1ms, -webkit-transform 1ms;
`;

const DevNavAccordianTitle = styled.div`
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-secondary-text-rgba);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 196px;
  -moz-box-flex: 1;
  -ms-flex: 1 0 196px;
  flex: 1 0 196px;
  font-weight: 700;
  overflow: hidden;
  padding: 6px 8px 6px 24px;
  cursor: pointer;
  line-height: 20px;
`;

const DevNavAccordianText = styled.span`
  overflow: hidden;
  color: rgba(0, 0, 0, 0.65);
  user-select: none;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  text-overflow: ellipsis;
`;

const DevNavSection = styled.ul`
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -moz-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  max-width: 100%;
  overflow-y: hidden;
  width: 100%;
  padding: 0;
  -webkit-transition: height 1ms;
  transition: height 1ms;
`;

export default function SideAccord({ item }) {
  const [expandedAccordion, setExpandedAccordion] = useState(false);
  const router = useRouter();
  const scrollToRef = useRef();
  const pathExists = item?.childrens?.find((a) => a.path === router.pathname);

  const toggleAccordion = () => {
    if (item.childrens) {
      setExpandedAccordion(!expandedAccordion);
    } else if (item.path) {
      router.push(item.path);
    }
  };

  useEffect(() => {
    if (item.childrens && pathExists) {
      setExpandedAccordion(true);
      scrollToRef.current?.scrollIntoView();
    }
  }, []);

  return (
    <DevNavExpandable>
      <DevExpandableNav>
        {item.childrens && (
          <DevNavToggle onClick={toggleAccordion}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: expandedAccordion
                  ? "rotateX(180deg)"
                  : "rotateX(0deg)",
                transition: "transform 0.2s ease",
              }}
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5f6368"
            >
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
            </svg>
          </DevNavToggle>
        )}
        <DevNavAccordianTitle onClick={toggleAccordion}>
          <DevNavAccordianText>{item.title}</DevNavAccordianText>
        </DevNavAccordianTitle>
        <DevNavSection
          style={{
            height: expandedAccordion ? "100%" : "0",
          }}
        >
          {item?.childrens?.map((childItem) => (
            <SideItem
              expandedAccordion={expandedAccordion}
              setExpandedAccordion={setExpandedAccordion}
              pathExists={pathExists}
              scrollToRef={scrollToRef}
              key={childItem.id}
              item={childItem}
            />
          ))}
        </DevNavSection>
      </DevExpandableNav>
    </DevNavExpandable>
  );
}
