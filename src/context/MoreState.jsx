import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";

export const MoreContext = createContext();
const MoreState = ({ children }) => {
  const [data] = useState([
    {
      question: "How do I start writing on Medium?",
      answer: (
        <>
          First, make a{" "}
          <Link to="/" className="underline">
            free account
          </Link>
          . Then, to create a story, click on your profile picture in the
          top-right corner of the page, then "Write a Story."
        </>
      ),
    },
    {
      question: "How I can make money writing on Medium?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio?",
    },
    {
      question: "Who writes on Medium?",
      answer: (
        <>
          Anyone can write on Medium. Whether you've never written before or are
          ready to create a full publication, it's easy to{" "}
          <Link to="/" className="underline">
            get started
          </Link>{" "}
          and we allow you to focus more on big ideas and less on driving
          clicks. With the option to earn for your work, your work, you can also
          be directly rewarded for the value you provide readers.
        </>
      ),
    },
    {
      question: "Do I need to be in the Partner Program to write on Medium?",
      answer: (
        <>
          No, You can write on Medium even if you are not in the Partner Program
          you can also choose which of the stories you publish are eligible for
          the Program. For more about the Partner Program,{" "}
          <Link to="/" className="underline">
            click here
          </Link>
          .
        </>
      ),
    },
    {
      question: "What can I write about on Medium?",
      answer: (
        <>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          voluptates aliquid natus. Adipisci excepturi incidunt ad iusto illo
          ratione minima delectus, sequi perferendis reprehenderit explicabo ut
          eos, debitis odit temporibus!
        </>
      ),
    },
    {
      question: "Who can read the work I publish on Medium?",
      answer: (
        <>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sunt
          iste quae id dolorum labore, fuga accusantium ex, molestiae fugit
          corporis maiores doloremque dicta cumque fugiat, ipsam obcaecati ut
          odio.
        </>
      ),
    },
    {
      question: "How can I grow my audience with Medium?",
      answer: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          nemo maiores. Labore cum earum laudantium eius officia voluptatem,
          voluptatibus, tempore officiis ab dolorem impedit sunt. Dicta
          cupiditate corrupti quos ratione?
        </>
      ),
    },
  ]);
  return (
    <MoreContext.Provider value={{ data }}>{children}</MoreContext.Provider>
  );
};

export default MoreState;
