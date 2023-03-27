import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Image from "next/image";

export default function userTextMining() {
  return (
    <Tabs>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        {/* 텍스트 마이닝  */}
        <div className="flex justify-center">
          <Image
            src="/images/profile/sample_text_mining_1.PNG"
            alt=""
            width={700}
            height={700}
          ></Image>
        </div>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}
