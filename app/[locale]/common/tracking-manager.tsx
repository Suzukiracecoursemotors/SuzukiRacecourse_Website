"use client";

import React, { useContext, useEffect } from "react";
import { useGTMDispatch } from "@elgorditosalsero/react-gtm-hook";
import { AppContext } from "../providers/context-provider";

export default function TrackingManager() {
  const contextValues = useContext(AppContext);
  const sendDataToGTM = useGTMDispatch();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    if (contextValues?.base?.appVisited) {
      return;
    }

    sendDataToGTM({
      event: "appLoaded",
      email: "",
    });

    contextValues?.updateBase({ key: "appVisited", value: true });
  }, [sendDataToGTM, contextValues]);

  return <></>;
}
