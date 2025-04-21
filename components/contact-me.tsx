import React from "react";
import { Linkedin, Mail } from "lucide-react";

const ContactMe = () => {
  return (
    <div className="flex items-center space-x-4 text-gray-400">
      <a href="mailto:yannainghtwe.777.yy@gmail.com" className="mt-0.5">
        <Mail />
      </a>
      <a href="https://www.linkedin.com/in/yan-naing-htwe/">
        <Linkedin />
      </a>
    </div>
  );
};

export default ContactMe;
