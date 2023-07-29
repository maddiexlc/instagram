"use client";

import useSWR from "swr";
import { ProfileUser } from "@/model/user";
import { useState } from "react";

type Props = {
  user: ProfileUser;
};

export default function UserPosts({ user: { username } }: Props) {
  const [tab, setTab] = useState("posts");
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/${tab}`);
  console.log(posts);
  return <></>;
}
