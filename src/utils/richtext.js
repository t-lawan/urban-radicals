import React from "react"
import { MARKS, INLINES } from '@contentful/rich-text-types';
import styled from 'styled-components';
import { ContentBoxType } from "../models/ContentModel";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const EXTERNALLINK = styled.a`
`
export const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <EXTERNALLINK href={node.data.uri} target="__blank">{children}</EXTERNALLINK>
    },
  };

export const generateContentBlock = (block, index) => {
  switch(block.type){
    case ContentBoxType.TEXT_BLOCK:
      return (
        <React.Fragment key={index}>
          {documentToReactComponents(JSON.parse(block.text.raw), richTextOptions)}
        </React.Fragment>
      )
    default:
      return <></>
  }
}