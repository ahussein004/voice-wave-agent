
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FeaturePopupProps {
  message: string;
  icon?: React.ReactNode;
  isVisible: boolean;
}

const FeaturePopup: React.FC<FeaturePopupProps> = ({ message, icon, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-16 left-0 right-0 mx-auto w-11/12 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-voice-purple/30 shadow-lg z-20"
        >
          <div className="flex items-center space-x-2">
            {icon && <span className="text-voice-purple-light">{icon}</span>}
            <p className="text-xs text-voice-cream font-medium">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeaturePopup;
