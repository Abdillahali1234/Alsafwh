import React, { FC } from 'react';
import Comment from './Comment';
import { Box, Divider, Text, useComputedColorScheme } from '@mantine/core';
import imagePerson from "@assets/Alsafwa/RetratoTwo.png";


interface CommentListProps {
  comments: string[];

}




const CommentList: FC<CommentListProps> = ({ comments }) => {
  
//   localStorage.setItem("comment" , JSON.stringify(comments))
  
//   const data=localStorage.getItem("comment")
  
//  console.log(data);


const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

 const computedColorScheme = useComputedColorScheme("light", {
  getInitialValueInEffect: true,
});
 



  
  return (
    <div>
      {comments.map((comment, index) => (

        <>


        <Box key={index}>
                <Box
                  display={"flex"}
                  style={{ alignItems: "center", gap: "5px" }}
                >
                  <Box
                    display={"flex"}
                    bg={"yellow"}
                    style={{
                      borderRadius: "100px",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={imagePerson}
                      alt=""
                      width={"50px"}
                      height={"50px"}
                    />
                  </Box>
                  <Box>
                    <Text fz={13} fw={500}>
                    احمد ماهر
                    </Text>
                    <Text fz={13} fw={300}>
                      {/* االأربعاء 13 مارس الساعة 2:45 ظهرا */}
                      <Box>
                      <span style={{margin:"5px"}}> {formattedDate}</span>
                      <span style={{margin:"5px"}}> {formattedTime}</span>
                      </Box>
                    </Text>
                  </Box>
                </Box>
                <Text mt={10} mr={10} fz={15} fw={500}>
                <Comment  text={comment} />
                </Text>

                <Box mt={10} mr={20} display={"flex"} style={{ gap: "2rem" }}>
                  <Text
                    fz={13}
                    fw={500}
                    c={
                      computedColorScheme == "light"
                        ? "rgba(0, 0, 0, 0.6)"
                        : "white"
                    }
                  >
                    رد
                  </Text>
                  <Text
                    fz={13}
                    fw={500}
                    c={
                      computedColorScheme == "light"
                        ? "rgba(0, 0, 0, 0.6)"
                        : "white"
                    }
                  >
                    اعجاب
                  </Text>
                </Box>
                <Divider my={20} />
              </Box>
        
        </>







        
      ))}
    </div>
  );
};

export default CommentList;
