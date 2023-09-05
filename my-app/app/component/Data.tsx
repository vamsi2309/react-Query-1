"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getData } from "@/app/page";
import Box from '@mui/material/Box';


interface Todo {
  id: number;
  title: string;
}
interface CustomListComponentProps {
  userData: Todo[];
}

const CustomListComponent: React.FC<CustomListComponentProps>= ({ userData }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user-data"],
    queryFn: getData,
    
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading ...!</p>;
  }

  if (error) {
    console.log(error);
    return <p>try again....</p>;
  }

  return (
    <>
      <Box>
        {data.posts.map((item:Todo) => {
          return (
            <Box key={item.id}>
              {item.id} : {item.title}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default CustomListComponent;
