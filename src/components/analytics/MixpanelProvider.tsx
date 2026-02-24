"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function MixpanelProvider() {
  useEffect(() => {
    mixpanel.init("f24de5cbf3e4d56896f0209e01a2c110", {
      autocapture: true,
      record_sessions_percent: 100,
    });
  }, []);

  return null;
}
