/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PersonComponent(props) {
  const { person, overrides, ...rest } = props;
  return (
    <View
      width="505px"
      height="132px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PersonComponent")}
      {...rest}
    >
      <Text
        fontFamily="Istok Web"
        fontSize="30px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="43.18359375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="16px"
        left="23px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.name}
        {...getOverrideProps(overrides, "name")}
      ></Text>
      <Text
        fontFamily="Istok Web"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.7890625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23px"
        left="445px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.age}
        {...getOverrideProps(overrides, "age")}
      ></Text>
      <Text
        fontFamily="Istok Web"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="17.2734375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="80px"
        left="23px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.email}
        {...getOverrideProps(overrides, "email")}
      ></Text>
      <Text
        fontFamily="Istok Web"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="17.2734375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="101px"
        left="23px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.tel}
        {...getOverrideProps(overrides, "tel")}
      ></Text>
    </View>
  );
}
