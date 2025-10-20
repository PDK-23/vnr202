// src/components/ExampleAccordion.tsx
import React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const aiApplications = [
  {
    title: "Tạo Quiz tự động",
    content:
      "AI được sử dụng để tự động tạo ra bộ 15 câu hỏi trắc nghiệm cùng với gợi ý và giải thích chi tiết, giúp đội ngũ phát triển xây dựng nội dung ôn tập nhanh chóng và hiệu quả hơn.",
  },
  {
    title: "Chatbot hỏi đáp sử dụng Gemini",
    content:
      "Tích hợp mô hình AI Gemini để xây dựng chatbot thông minh. Chatbot này có khả năng trả lời các câu hỏi về giáo trình bằng cả giọng nói (Text-to-Speech) và văn bản, mang lại trải nghiệm tương tác tự nhiên và tiện lợi cho người học.",
  },
  {
    title: "Tối ưu hóa quy trình phát triển",
    content:
      "Các công cụ AI giúp tối ưu hóa nhiều khâu trong quá trình phát triển website, từ việc tạo nội dung, thiết kế giao diện đến tối ưu code, giúp website được hoàn thiện nhanh chóng và chất lượng cao.",
  },
  {
    title: "Cá nhân hóa trải nghiệm học tập",
    content:
      "Website sử dụng AI để gợi ý nội dung phù hợp với người dùng. Các hiệu ứng động và tương tác mượt mà (như fade-in, parallax) được tạo ra để cá nhân hóa trải nghiệm, tăng sự tập trung và hứng thú của người học.",
  },
];

const ExampleAccordion: React.FC = () => {
  return (
    <section className="relative z-10 w-full flex flex-col items-center justify-center py-14 px-4 bg-blue-50/80">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-blue-800 mb-2 text-center drop-shadow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Ứng dụng AI trong website này
      </motion.h2>
      <motion.p
        className="text-sm md:text-base text-gray-600 mb-7 text-center italic"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        *Lưu ý: Nội dung trả lời và quiz được tạo dựa trên Giáo trình Chủ nghĩa
        xã hội khoa học năm 2021.
      </motion.p>
      <Accordion.Root
        type="single"
        collapsible
        className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl bg-white/90 divide-y divide-blue-100"
      >
        {aiApplications.map((item, i) => (
          <Accordion.Item
            key={i}
            value={"item-" + i}
            className="overflow-hidden rounded-2xl mb-3 shadow-lg border border-blue-100"
          >
            <Accordion.Header asChild>
              <Accordion.Trigger asChild>
                <motion.button
                  className="flex w-full items-center justify-between px-7 py-6 text-lg font-semibold text-blue-700 bg-white group outline-none transition-all duration-200 hover:bg-blue-50 focus:bg-blue-100 rounded-2xl shadow-md"
                  initial={{ backgroundColor: "#fff" }}
                  whileHover={{ backgroundColor: "#e0edfa" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{item.title}</span>
                  <span className="ml-2 transition-transform group-data-[state=open]:rotate-180">
                    <ChevronDown className="w-6 h-6 text-blue-500" />
                  </span>
                </motion.button>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild>
              <motion.div
                className="px-7 pb-6 text-base text-gray-700 bg-blue-50/80 rounded-b-2xl border-t border-blue-100"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {item.content}
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default ExampleAccordion;
