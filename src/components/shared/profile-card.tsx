import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { authClient } from "@/lib/auth-client";
import { Skeleton } from "../ui/skeleton";

const ProfileCard = () => {
  const { data: session, isPending } = authClient.useSession();

  const name = session?.user?.name || "User Name";
  const email = session?.user?.email || "user@example.com";

  const skeleton = () => {
    return (
      <div className="flex items-center gap-2">
        <Skeleton className="bg-secondary h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="bg-secondary h-4 w-20" />
          <Skeleton className="bg-secondary h-4 w-30" />
        </div>
      </div>
    );
  };

  return (
    <Card className="py-4 bg-secondary/30 border-0 shadow-none">
      <CardContent className="flex items-center gap-2 px-4">
        {isPending ? (
          skeleton()
        ) : (
          <>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-sm">{name}</h3>
              <p className="text-neutral-500 text-xs">{email}</p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
