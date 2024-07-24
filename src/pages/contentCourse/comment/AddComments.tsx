import React, { FC, useState } from "react";
import classes from "../ContentCourse.module.css";
import { Box, Button } from "@mantine/core";
import imagePerson from "@assets/Alsafwa/RetratoTwo.png";

interface AddCommentProps {
  onAddComment: (comment: string) => void;
}

const AddComment: FC<AddCommentProps> = ({ onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment.trim()) {
      onAddComment(comment);
      setComment("");
    }
  };

  return (
    <div>
      <Box display={"flex"} style={{ alignItems: "center", gap: "10px"  ,flexWrap:"wrap"}}>
        <Box
          display={"flex"}
          bg={"yellow"}
          style={{
            borderRadius: "100px",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img src={imagePerson} width={"50px"} height={"50px"} />
        </Box>
        <input
          className={classes.inputCommentCourse}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="اضافة تعليق..."
        />
        <Button className={classes.btnSend} type="submit" onClick={handleAddComment}>
          ارسال
        </Button>
      </Box>
    </div>
  );
};

export default AddComment;
