import React from "react";
import Accordion, { AccordionItem } from "./AccordianComponent.jsx";

export default function App() {
  return (
    <div className="flex flex-row items-center justify-center p-4 px-10 h-screen">
      <div className="flex flex-col gap-3  p-2 w-full">
        <div className=" p-3 font-bold text-6xl">FAQ</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2">
          <Accordion
              value={null}
              onChange={(value) => console.log("Selected Accordion:", value)}
              className="space-y-2"
            >
              <AccordionItem value="item1" trigger="Is the template free to use?" className="hover:bg-gray-200 rounded-xl">
                <p>Yes, the template is completely free to use. We believe in providing accessible tools to help competitive programmers improve their productivity without any costs or hidden fees.</p>
              </AccordionItem>
              <AccordionItem value="item2" trigger="Does the template support offline usage?" className="hover:bg-gray-200 rounded-xl">
                <p>No, the template requires an internet connection to function. This is due to the integration of online resources and features that require real-time data and updates.</p>
              </AccordionItem>
              <AccordionItem value="item3" trigger="Will there be a sort visualizer for better understanding in the future" className="hover:bg-gray-200 rounded-xl">
                <p>Yes, we are planning to introduce a sort visualizer in a future update. This will help users better understand sorting algorithms by visually seeing how data is being processed step-by-step.
                </p>
              </AccordionItem>
              <AccordionItem value="item4" trigger="Is the template error-free?" className="hover:bg-gray-200 rounded-xl">
                <p>Yes, the template has been thoroughly tested to ensure it is free from errors. We continuously monitor for any issues and promptly fix them to maintain a smooth user experience.
                </p>
              </AccordionItem>
              <AccordionItem value="item5" trigger="Does the template support object-oriented programming (OOP) for better code reusability?" className="hover:bg-gray-200 rounded-xl">
                <p>Yes, the template supports OOP principles to ensure that the code is modular and reusable. This helps competitive programmers focus more on solving problems rather than repetitive code writing.</p>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="p-2">
            <Accordion
              value={null}
              onChange={(value) => console.log("Selected Accordion:", value)}
              className="space-y-2"
            >
              <AccordionItem value="item6" trigger="Does the template include a chatbot?" className="hover:bg-gray-200 rounded-xl">
                <p>Yes, the template includes a chatbot feature to assist users with common queries. The chatbot provides instant answers, saving users time by reducing the need to search through documentation.</p>
              </AccordionItem>
              <AccordionItem value="item7" trigger="Can I modify the template to suit my needs?" className="hover:bg-gray-200 rounded-xl">
                <p>Yes, the template is fully customizable. You can modify the code structure, add your own functions, or adapt it to different programming challenges as needed for your competitive programming tasks.</p>
              </AccordionItem>
              <AccordionItem value="item8" trigger="Is a to-do list feature supported?" className="hover:bg-gray-200 rounded-xl">
                <p>Yes, a to-do list feature is supported within the template. It allows you to track tasks, manage deadlines, and prioritize your coding goals effectively, making it easier to stay organized and focused on your competitive programming journey.</p>
              </AccordionItem>
              <AccordionItem value="item9" trigger="Is there documentation available for using the template?" className="hover:bg-gray-200 rounded-xl">
                <p>Yes, we provide detailed documentation to help you understand how to use the template. The documentation includes step-by-step instructions, code examples, and guidance for setting up the template in your projects.
                </p>
              </AccordionItem>
              <AccordionItem value="item10" trigger="How frequently will the template be updated?" className="hover:bg-gray-200 rounded-xl">
                <p>The template will be regularly updated with new features, improvements, and bug fixes. We aim to keep it up-to-date with the latest trends in competitive programming and user feedback. Updates will be communicated through our website or notification system.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="text-gray-600 font-light p-3 px-6">
          More questions? Visit our <span className="hover:underline underline-offset-4 text-blue-400">docs.</span> Or send us a <span className="hover:underline underline-offset-4 text-blue-400">message</span>.
        </div>
      </div>
    </div>
  );
}
