"use client";
import React from "react";

import { GTMProvider as Provider } from "@elgorditosalsero/react-gtm-hook";

const GOOGLE_TAG_ID = "GTM-N9GCQSH";

const gtmParams = { id: GOOGLE_TAG_ID, dataLayerName: "customDataLayerName" };

function GTMProvider({ children }: { children: React.ReactNode }) {
  return <Provider state={gtmParams}>{children}</Provider>;
}

export default GTMProvider;
