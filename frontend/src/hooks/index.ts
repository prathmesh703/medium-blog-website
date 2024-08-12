import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../components/config";

export interface Blog {
  "content": string;
  "title": string;
  "id": number;
  "author": {
    "name": string;
  };
}

export const useBlogs = () => {
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setblogs(response.data.post);
        setloading(false);
      });
  },[]);

  return {
    loading,
    blogs,
  };
};

export const useBlog = ({id}:{id:number}) => {
  const [loading, setloading] = useState(true);
  const [blog, setblog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setblog(response.data.post);
        setloading(false);
      });
  },[]);

  return {
    loading,
    blog,
  };
};
