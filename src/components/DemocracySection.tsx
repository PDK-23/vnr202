// src/components/DemocracySection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaVoteYea,
  FaDollarSign,
  FaUniversity,
  FaBuilding,
  FaUsers,
} from "react-icons/fa";

const DemocracySection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl border-4 border-green-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6 text-center"
        variants={itemVariants}
      >
        <FaVoteYea className="inline-block text-green-600 mr-3" />
        Dân chủ xã hội chủ nghĩa
      </motion.h2>
      <motion.p
        className="text-xl md:text-2xl text-gray-700 mb-8 text-center max-w-3xl mx-auto"
        variants={itemVariants}
        transition={{ delay: 0.2 }}
      >
        Bản chất: Quyền lực thuộc về đa số nhân dân lao động.
      </motion.p>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={itemVariants}
        transition={{ staggerChildren: 0.3, delay: 0.4 }}
      >
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaBuilding className="mr-3 text-2xl" /> Chính trị
          </div>
          <p className="text-gray-600 text-base">
            Quyền bầu cử, ứng cử, tham gia quản lý nhà nước và xã hội.
          </p>
        </motion.li>
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaDollarSign className="mr-3 text-2xl" /> Kinh tế
          </div>
          <p className="text-gray-600 text-base">
            Quyền lao động, sở hữu và tham gia quyết định sản xuất, kinh doanh.
          </p>
        </motion.li>
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaUniversity className="mr-3 text-2xl" /> Văn hóa - Xã hội
          </div>
          <p className="text-gray-600 text-base">
            Quyền học tập, sáng tạo, tiếp cận và thụ hưởng các giá trị văn hóa.
          </p>
        </motion.li>
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 transition-transform hover:scale-105"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaUsers className="mr-3 text-2xl" /> Hình thức
          </div>
          <p className="text-gray-600 text-base">
            Kết hợp dân chủ đại diện (Quốc hội, HĐND) và dân chủ trực tiếp
            (trưng cầu ý dân).
          </p>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default DemocracySection;
