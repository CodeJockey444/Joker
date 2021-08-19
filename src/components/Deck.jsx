import React from "react";
import Card from "./card";

const Normal = (props) => {
  return props.data.map((jokeobj) => {
    return (
      <Card header={jokeobj.setup} body={jokeobj.punchline} key={jokeobj.id} />
    );
  });
};

export default Normal;
