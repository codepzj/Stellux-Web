import { getSiteConfigAPI, type SiteConfigVO } from "@/api/setting";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<SiteConfigVO | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState<SiteConfigVO>();
  useEffect(() => {
    const fetchConfig = async () => {
      const res = await getSiteConfigAPI();
      setConfig(res.data || undefined);
    };
    fetchConfig();
  }, []);
  return <AppContext.Provider value={config}>{children}</AppContext.Provider>;
};

export const useAppConfig = () => {
  const config = useContext(AppContext);
  return config;
};
