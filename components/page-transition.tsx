"use client";

import { LoadingScreen, LoadingWithHeader } from "@/components/basic/loading";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const PageTransition = ({
  loading,
  withHeader,
  empty,
  children,
  loadingUI,
  emptyUI,
}: {
  loading: boolean;
  withHeader: boolean;
  empty: boolean;
  children: React.ReactNode;
  loadingUI?: React.ReactNode;
  emptyUI?: React.ReactNode;
}) => {
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {loadingUI || (withHeader ? <LoadingWithHeader /> : <LoadingScreen />)}
        </motion.div>
      ) : empty ? (
        <motion.div
          key="empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {emptyUI || (
            <div className="text-center text-gray-400 py-10">暂无数据</div>
          )}
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
