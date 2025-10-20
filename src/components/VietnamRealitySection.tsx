// src/components/VietnamRealitySection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobeAsia,
  FaBalanceScale,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const VietnamRealitySection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl border-4 border-yellow-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6 text-center"
        variants={itemVariants}
      >
        <FaGlobeAsia className="inline-block text-yellow-600 mr-3" />
        Liên hệ Thực tiễn Việt Nam
      </motion.h2>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        variants={itemVariants}
        transition={{ staggerChildren: 0.3, delay: 0.2 }}
      >
        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaBalanceScale className="mr-3 text-2xl" /> Hiến pháp 2013
          </div>
          <p className="text-gray-600 text-base">
            Khẳng định rõ ràng Nhà nước pháp quyền XHCN "của nhân dân, do nhân
            dân, vì nhân dân."
          </p>
        </motion.li>
        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaChartLine className="mr-3 text-2xl" /> Cải cách Tư pháp & Hành
            chính
          </div>
          <p className="text-gray-600 text-base">
            Đẩy mạnh Chính phủ điện tử, dịch vụ công trực tuyến để tăng tính
            minh bạch.
          </p>
        </motion.li>
        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaCheckCircle className="mr-3 text-2xl" /> Phòng chống Tham nhũng
          </div>
          <p className="text-gray-600 text-base">
            Luật Phòng chống tham nhũng (2018) được ban hành, tăng cường minh
            bạch và xử lý nghiêm các vi phạm.
          </p>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default VietnamRealitySection;
