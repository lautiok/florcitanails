"use client";
import { useState, useRef } from "react";
import styles from "./acordeonitem.module.css";

interface AccordionItemProps {
  title: string;
  description: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionTitle} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div
        ref={contentRef}
        className={`${styles.accordionContent} ${isOpen ? styles.isOpen : ""}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
