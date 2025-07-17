"use client";

import React from "react";
import { Loading } from "@/components/basic/loading";
import { AnimatePresence, motion } from "framer-motion";

export const PageTransition = ({
  loading,
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          key="loading"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
