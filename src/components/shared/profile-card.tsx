import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type ProfileCardProps = {
  name?: string;
  email?: string;
};

const ProfileCard = ({
  name = "John Doe",
  email = "johndoe@example.com",
}: ProfileCardProps) => {
  return (
    <Card className="py-4 bg-secondary/50 border-0 shadow-none">
      <CardContent className="flex items-center gap-2 px-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-bold text-sm">{name}</h3>
          <p className="text-neutral-500 text-xs">{email}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
