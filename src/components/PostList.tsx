"use client";
import { SimplePost } from "@/model/post";
import useSWR from "swr";

export default function PostList() {
  const { data: post, isLoading: loading } = useSWR<SimplePost[]>("/api/posts");
  console.log(post);
  return (
    <ul>{post && post.map((post) => <li key={post.id}>{post.text}</li>)}</ul>
  );
}
