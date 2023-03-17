/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { label, overrides, ...rest } = props;
  return (
    <View
      width="657px"
      height="98px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="5px SOLID rgba(42,94,226,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="657px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="49px"
        left="0px"
        padding="10px 20px 10px 20px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="14.522727012634277px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="This is sample coponent"
          {...getOverrideProps(overrides, "This is sample coponent")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="657px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        left="0px"
        padding="10px 20px 10px 20px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="Itim"
          fontSize="30px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sample Application"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </Flex>
    </View>
  );
}
